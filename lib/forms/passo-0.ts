import type { FormQuestion } from "./types";

export const passo0Questions: FormQuestion[] = [
  {
    id: "p0_q1",
    step: 1,
    key: "current_phase",
    type: "single-choice",
    title: "Sendo honesto, hoje você está em qual fase?",
    required: true,
    options: [
      { label: "Ainda nem comecei de verdade", value: "ainda_nao_comecei" },
      { label: "Posto às vezes, mas sem consistência", value: "posto_sem_consistencia" },
      { label: "Tenho ideias, mas travo na execução", value: "tenho_ideias_mas_travo" },
      { label: "Já posto, mas sinto que não tenho direção", value: "posto_sem_direcao" },
      { label: "Tenho base, mas estou estagnado", value: "tenho_base_estagnado" },
    ],
  },
  {
    id: "p0_q2",
    step: 2,
    key: "commitment_score",
    type: "single-choice",
    title: "Que nota você daria para o seu comprometimento com seus objetivos de vida?",
    description: "Escolha uma nota de 0 a 5.",
    required: true,
    options: [
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
  {
    id: "p0_q3",
    step: 3,
    key: "main_block",
    type: "single-choice",
    title: "O que mais te trava agora?",
    required: true,
    options: [
      { label: "Nicho (não sei qual escolher)", value: "nicho" },
      { label: "Posicionamento (não sei como me diferenciar)", value: "posicionamento" },
      { label: "Ideias (parece que nunca vem nada bom)", value: "ideias" },
      { label: "Roteiro (não sei escrever / fica raso)", value: "roteiro" },
      { label: "Gravação (vergonha, travo, não gosto do resultado)", value: "gravacao" },
      { label: "Edição (demoro demais / não sei dar ritmo)", value: "edicao" },
      { label: "Consistência (começo e paro)", value: "consistencia" },
      { label: "Confiança (não acredito que vai dar)", value: "confianca" },
    ],
  },
  {
    id: "p0_q4",
    step: 4,
    key: "digital_presence_meaning",
    type: "single-choice",
    title: "O que você quer que a sua presença digital represente?",
    required: true,
    options: [
      { label: "Minha história e meus valores", value: "historia_valores" },
      { label: "Minha evolução e meu processo real", value: "evolucao_processo" },
      { label: "Minha autoridade e resultados", value: "autoridade_resultados" },
      { label: "Minha criatividade e visão de mundo", value: "criatividade_visao" },
      { label: "Meu trabalho / serviço / marca", value: "trabalho_servico_marca" },
    ],
  },
  {
    id: "p0_q5",
    step: 5,
    key: "benefits_step",
    type: "info",
    title: "A Academia de Criadores é o lugar certo pra destravar o seu conteúdo!",
    description:
      "Em 4 semanas, você vai participar de aulas práticas ao vivo, fazer um diagnóstico completo do seu perfil, sair com plano de conteúdo pronto, aprender a roteirizar vídeos, dominar o processo da ideia à postagem, construir um ecossistema de conteúdo, analisar métricas, descobrir o que vender no futuro, entrar na comunidade e acessar materiais bônus. Se concluir o programa e ainda assim não se sentir confortável para criar conteúdo, o valor é devolvido.",
    helperText: "Clique para continuar.",
    required: false,
  },
  {
    id: "p0_q6",
    step: 6,
    key: "full_name",
    type: "short-text",
    title: "Qual o seu primeiro e último nome?",
    placeholder: "Seu nome completo",
    required: true,
  },
  {
    id: "p0_q7",
    step: 7,
    key: "phone",
    type: "phone",
    title: "Qual é o seu WhatsApp?",
    placeholder: "(00) 00000-0000",
    required: true,
  },
  {
    id: "p0_q8",
    step: 8,
    key: "instagram_handle",
    type: "short-text",
    title: "Qual o seu @ do Instagram?",
    placeholder: "@seuusuario",
    required: true,
  },
  {
    id: "p0_q9",
    step: 9,
    key: "email",
    type: "email",
    title: "Qual é o seu melhor e-mail?",
    placeholder: "voce@exemplo.com",
    required: true,
  },
  {
    id: "p0_q10",
    step: 10,
    key: "preferred_time",
    type: "single-choice",
    title: "Qual o melhor horário para nossos encontros 1:1?",
    required: true,
    options: [
      { label: "Manhã", value: "manha" },
      { label: "Tarde", value: "tarde" },
      { label: "Noite", value: "noite" },
    ],
  },
  {
    id: "p0_q11",
    step: 11,
    key: "preferred_days",
    type: "multi-select",
    title: "Quais dias da semana são melhores pra você?",
    description: "Você pode marcar mais de um.",
    required: true,
    minSelections: 1,
    options: [
      { label: "Seg", value: "seg" },
      { label: "Ter", value: "ter" },
      { label: "Qua", value: "qua" },
      { label: "Qui", value: "qui" },
      { label: "Sex", value: "sex" },
      { label: "Sáb", value: "sab" },
    ],
  },
  {
    id: "p0_q12",
    step: 12,
    key: "vision_after_step0",
    type: "long-text",
    title: "Como você se vê depois de concluir o passo 0?",
    description: "Por que isso importa pra você? Vale responder com verdade. Eu leio tudo.",
    placeholder: "Escreva sua resposta",
    required: true,
  },
  {
    id: "p0_q13",
    step: 13,
    key: "purchase_decision",
    type: "single-choice",
    title: "Você se vê pronto pra fazer sua matrícula na Mentoria Passo 0 e investir 12x de R$ 83 por 4 semanas de acompanhamento direto comigo?",
    description:
      "Esse valor inclui 4 encontros 1:1 semanais, diagnóstico completo do perfil, planejamento de conteúdo, produção assistida, feedback técnico e emocional e acesso vitalício à Academia de Criadores.",
    required: true,
    options: [
      { label: "✅ Sim, estou pronto pra realizar minha matrícula na Academia de Criadores!", value: "buy_now" },
      { label: "🤔 Sim, mas ainda tenho dúvidas e quero entender melhor antes.", value: "thinking" },
      { label: "⏳ Ainda não consigo agora, mas quero entrar em breve.", value: "not_now" },
    ],
  },
  {
    id: "p0_q14",
    step: 14,
    key: "main_doubt",
    type: "short-text",
    title: "Qual sua principal dúvida?",
    placeholder: "Digite sua dúvida principal",
    required: true,
  },
  {
    id: "p0_q15",
    step: 15,
    key: "preferred_name_whatsapp",
    type: "short-text",
    title: "Como prefere ser chamado no WhatsApp?",
    placeholder: "Nome ou apelido",
    required: false,
  },
  {
    id: "p0_q16",
    step: 16,
    key: "not_now_reason",
    type: "single-choice",
    title: "O que te impediu de fazer a matrícula hoje?",
    required: true,
    options: [
      { label: "Valor agora / orçamento apertado", value: "orcamento" },
      { label: "Falta de tempo no momento", value: "tempo" },
      { label: "Quero entender melhor como funciona", value: "entender_melhor" },
      { label: "Estou com medo de não conseguir manter constância", value: "medo_constancia" },
      { label: "Quero conversar antes de decidir", value: "quero_conversar" },
      { label: "Outro", value: "outro" },
    ],
  },
  {
    id: "p0_q17",
    step: 17,
    key: "not_now_reason_other",
    type: "short-text",
    title: "Pode me contar qual é esse outro motivo?",
    placeholder: "Escreva aqui",
    required: true,
  },
  {
    id: "p0_q18",
    step: 18,
    key: "expected_entry_time",
    type: "single-choice",
    title: "Quando você acredita que consegue entrar?",
    required: true,
    options: [
      { label: "Em até 7 dias", value: "7_dias" },
      { label: "Em até 15 dias", value: "15_dias" },
      { label: "No mês que vem", value: "mes_que_vem" },
      { label: "Ainda não sei", value: "nao_sei" },
    ],
  },
];

export function getVisiblePasso0Questions(
  answers: Record<string, string | string[]>
): FormQuestion[] {
  return passo0Questions.filter((question) => {
    const decision = answers.purchase_decision;
    const notNowReason = answers.not_now_reason;

    if (["main_doubt", "preferred_name_whatsapp"].includes(question.key)) {
      return decision === "thinking";
    }

    if (["not_now_reason", "expected_entry_time"].includes(question.key)) {
      return decision === "not_now";
    }

    if (question.key === "not_now_reason_other") {
      return decision === "not_now" && notNowReason === "outro";
    }

    return true;
  });
}