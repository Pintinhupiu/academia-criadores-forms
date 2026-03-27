"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { FormProgress } from "@/components/form-progress";
import { QuestionRenderer } from "@/components/question-renderer";
import { StepTransition } from "@/components/step-transition";
import { FormLoader } from "@/components/form-loader";
import { FormStatusScreen } from "@/components/form-status-screen";
import { getVisiblePasso0Questions } from "@/lib/forms/passo-0";
import { getQuestionValidationError } from "@/lib/forms/validation";

type SessionResponse = {
  id: string;
  form_slug: string;
  current_step: number;
  status: string;
};

type AnswerMap = Record<string, string | string[]>;
type FinalScreenState = "none" | "thinking" | "not_now_end";

const HOTMART_CHECKOUT_URL = ""; // TODO: adicionar link real do checkout Passo 0
const SUPPORT_WHATSAPP_URL =
  "https://wa.me/5592999999999?text=Oi%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20Mentoria%20Passo%200";

const STAGE_TITLES = [
  "Conhecendo seu conteúdo",
  "Dados pessoais",
  "Passo 0",
];

function getCurrentStage(questionKey?: string) {
  if (!questionKey) return 1;

  const dadosPessoaisKeys = [
    "full_name",
    "phone",
    "instagram_handle",
    "email",
    "preferred_time",
    "preferred_days",
  ];

  if (dadosPessoaisKeys.includes(questionKey)) return 2;

  const passo0Keys = [
    "vision_after_step0",
    "purchase_decision",
    "main_doubt",
    "preferred_name_whatsapp",
    "not_now_reason",
    "not_now_reason_other",
    "expected_entry_time",
  ];

  if (passo0Keys.includes(questionKey)) return 3;

  return 1;
}

export default function Passo0Page() {
  const [session, setSession] = useState<SessionResponse | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [value, setValue] = useState<string | string[]>("");
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [history, setHistory] = useState<number[]>([]);
  const [loadingSession, setLoadingSession] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [finalScreen, setFinalScreen] = useState<FinalScreenState>("none");

  const visibleQuestions = useMemo(() => getVisiblePasso0Questions(answers), [answers]);
  const currentQuestion = visibleQuestions[stepIndex];
  const currentStage = getCurrentStage(currentQuestion?.key);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSession({
        id: "local-test-session",
        form_slug: "passo-0",
        current_step: 0,
        status: "in_progress",
      });
      setLoadingSession(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!currentQuestion) return;
    setValue(answers[currentQuestion.key] ?? (currentQuestion.type === "multi-select" ? [] : ""));
  }, [currentQuestion, answers]);

 function isQuestionValid(nextValue = value) {
  if (!currentQuestion) return false;

  return !getQuestionValidationError(
    currentQuestion.type,
    nextValue,
    currentQuestion.required
  );
}

  function handleBack() {
    if (history.length === 0 || finalScreen !== "none") return;

    const previousIndex = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setStepIndex(previousIndex);
  }

  async function handleSubmit(customValue?: string | string[]) {
    const submitValue = customValue ?? value;

    if (!currentQuestion || !session || !isQuestionValid(submitValue)) return;

    setSubmitting(true);

    const nextAnswers: AnswerMap = {
      ...answers,
      [currentQuestion.key]: submitValue,
    };
    setAnswers(nextAnswers);

    const updatedVisibleQuestions = getVisiblePasso0Questions(nextAnswers);
    const isLastStep = stepIndex === updatedVisibleQuestions.length - 1;

    if (!isLastStep) {
      setHistory((prev) => [...prev, stepIndex]);
      setStepIndex((prev) => prev + 1);
      setValue("");
      setSubmitting(false);
      return;
    }

    const purchaseDecision = nextAnswers.purchase_decision;

    if (purchaseDecision === "buy_now") {
      if (HOTMART_CHECKOUT_URL) {
        window.location.href = HOTMART_CHECKOUT_URL;
      }
      setSubmitting(false);
      return;
    }

    if (purchaseDecision === "thinking") {
      setFinalScreen("thinking");
      setSubmitting(false);
      return;
    }

    if (purchaseDecision === "not_now") {
      setFinalScreen("not_now_end");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
  }

  function handleAnswerChange(nextValue: string | string[]) {
    setValue(nextValue);

    const autoAdvanceTypes = ["single-choice"];

    if (currentQuestion && autoAdvanceTypes.includes(currentQuestion.type) && !submitting) {
      setTimeout(() => {
        handleSubmit(nextValue);
      }, 120);
    }
  }

  if (loadingSession) {
    return (
      <main className="form-noise-bg relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="relative z-10 w-full max-w-3xl">
          <FormLoader />
        </div>
      </main>
    );
  }

  if (finalScreen === "thinking") {
    return (
      <main className="form-noise-bg relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="relative z-10 w-full max-w-3xl">
          <FormStatusScreen
            title="Perfeito, nossa equipe entrará em contato em breve."
            description="Recebemos suas respostas e vamos falar com você para te ajudar com o que faltar. Se preferir, você já pode mandar mensagem agora mesmo no WhatsApp para tirar suas dúvidas e entender melhor como a mentoria funciona."
            primaryLabel="Falar no WhatsApp"
            onPrimaryClick={() => {
              window.location.href = SUPPORT_WHATSAPP_URL;
            }}
            secondaryLabel="Voltar ao início"
            onSecondaryClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </main>
    );
  }

  if (finalScreen === "not_now_end") {
    return (
      <main className="form-noise-bg relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="relative z-10 w-full max-w-3xl">
          <FormStatusScreen
            title="Obrigado pelo seu interesse."
            description="Agradecemos por ter chegado até aqui. Ficamos à disposição para atender qualquer dúvida que você tenha, e esperamos que em breve você comece a sua jornada no conteúdo com a gente."
            primaryLabel="Falar com a equipe"
            onPrimaryClick={() => {
              window.location.href = SUPPORT_WHATSAPP_URL;
            }}
            secondaryLabel="Voltar ao início"
            onSecondaryClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </main>
    );
  }

  if (!currentQuestion) {
    return (
      <main className="form-noise-bg relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="relative z-10 w-full max-w-3xl">
          <FormLoader />
        </div>
      </main>
    );
  }

  return (
    <main className="form-noise-bg relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="relative z-10 w-full max-w-3xl">
        <FormProgress currentStage={currentStage} titles={STAGE_TITLES} />

        <div className="mb-4 flex justify-start">
          <button
            type="button"
            onClick={handleBack}
            disabled={history.length === 0 || submitting}
            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-zinc-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
        </div>

        <StepTransition stepKey={currentQuestion.id}>
          <QuestionRenderer
            question={currentQuestion}
            value={value}
            onChange={handleAnswerChange}
            onSubmit={() => handleSubmit()}
            isSubmitting={submitting}
          />
        </StepTransition>
      </div>
    </main>
  );
}