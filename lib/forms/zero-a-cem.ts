import type { FormQuestion } from "./types";

export const zeroACemQuestions: FormQuestion[] = [
  {
    id: "z100_q1",
    step: 1,
    key: "main_problem",
    type: "single-choice",
    title: "Sendo honesto, hoje, qual é o seu maior problema?",
    required: true,
    options: [
      { label: "Crescimento inconsistente", value: "crescimento_inconsistente" },
      { label: "Baixa retenção / vídeos não seguram atenção", value: "baixa_retencao" },
      { label: "Falta de consistência (vou e volto)", value: "falta_consistencia" },
      { label: "Conteúdo sem direção (não sei o que postar agora)", value: "conteudo_sem_direcao" },
      { label: "Monetização (tenho audiência, mas não tenho produto)", value: "monetizacao_sem_produto" },
      { label: "Produto existe, mas não vende como deveria", value: "produto_nao_vende" },
      { label: "Tenho resultado, mas me sinto drenado / sem prazer", value: "resultado_sem_prazer" },
    ],
  },
  {
    id: "z100_q2",
    step: 2,
    key: "priority_platform",
    type: "single-choice",
    title: "Qual plataforma é sua prioridade nos próximos 90 dias?",
    required: true,
    options: [
      { label: "Instagram", value: "instagram" },
      { label: "TikTok", value: "tiktok" },
      { label: "YouTube", value: "youtube" },
      { label: "Todas (com estratégia)", value: "todas" },
    ],
  },
  {
    id: "z100_q3",
    step: 3,
    key: "instagram_handle_priority",
    type: "short-text",
    title: "Qual é o seu @ no Instagram?",
    placeholder: "@seuinstagram",
    required: true,
  },
  {
    id: "z100_q4",
    step: 4,
    key: "tiktok_handle_priority",
    type: "short-text",
    title: "Qual é o seu @ no TikTok?",
    placeholder: "@seutiktok",
    required: true,
  },
  {
    id: "z100_q5",
    step: 5,
    key: "youtube_handle_priority",
    type: "short-text",
    title: "Qual é o seu canal ou @ no YouTube?",
    placeholder: "@seuyoutube",
    required: true,
  },
  {
    id: "z100_q6",
    step: 6,
    key: "current_assets",
    type: "multi-select",
    title: "O que você já tem hoje?",
    description: "Você pode marcar mais de uma opção.",
    required: true,
    minSelections: 1,
    options: [
      { label: "Rotina de postagem", value: "rotina_postagem" },
      { label: "Pilares/editoriais definidos", value: "pilares_editoriais" },
      { label: "Produto ou serviço (mesmo que simples)", value: "produto_servico" },
      { label: "Oferta clara", value: "oferta_clara" },
      { label: "Página de vendas / link na bio organizado", value: "pagina_vendas" },
      { label: "Lista de e-mails / WhatsApp", value: "lista_emails_whatsapp" },
      { label: "Nada disso bem amarrado ainda", value: "nada_amarrado" },
    ],
  },
  {
    id: "z100_q7",
    step: 7,
    key: "already_monetizes",
    type: "single-choice",
    title: "Hoje você já monetiza sua audiência?",
    required: true,
    options: [
      { label: "Ainda não", value: "ainda_nao" },
      { label: "Às vezes (publi/afiliado/serviço pontual)", value: "as_vezes" },
      { label: "Sim, mas é instável", value: "sim_instavel" },
      { label: "Sim, já tenho recorrência", value: "sim_recorrencia" },
    ],
  },
  {
    id: "z100_q8",
    step: 8,
    key: "revenue_goal",
    type: "single-choice",
    title: "Qual meta de faturamento você quer bater com conteúdo?",
    required: true,
    options: [
      { label: "Primeiros R$1.000/mês", value: "1000" },
      { label: "R$3.000–5.000/mês", value: "3000_5000" },
      { label: "R$10.000/mês", value: "10000" },
      { label: "Mais que isso (quero escalar sério)", value: "mais_que_10000" },
    ],
  },
  {
    id: "z100_q9",
    step: 9,
    key: "benefits_step",
    type: "info",
    title: "A Mentoria 0 a 100 foi feita para transformar consistência em crescimento e resultado.",
    description:
      "Você vai ter check-ins quinzenais com plano de ação, dashboard de desempenho com leitura de métricas e insights, acesso à Academia de Criadores, participação em hotseats nas mentorias coletivas mensais, feedbacks assíncronos de conteúdo, recomendação para jobs e collabs e tudo o que existe na Mentoria Passo 0 incluso.",
    helperText: "Clique em continuar para seguir.",
    required: false,
  },
  {
    id: "z100_q10",
    step: 10,
    key: "full_name",
    type: "short-text",
    title: "Qual o seu primeiro e último nome?",
    placeholder: "Seu nome completo",
    required: true,
  },
  {
    id: "z100_q11",
    step: 11,
    key: "phone",
    type: "phone",
    title: "Qual é o seu WhatsApp?",
    placeholder: "(00) 00000-0000",
    required: true,
  },
  {
    id: "z100_q12",
    step: 12,
    key: "instagram_handle",
    type: "short-text",
    title: "Qual o seu @ do Instagram?",
    placeholder: "@seuusuario",
    required: true,
  },
  {
    id: "z100_q13",
    step: 13,
    key: "email",
    type: "email",
    title: "Qual é o seu melhor e-mail?",
    placeholder: "voce@exemplo.com",
    required: true,
  },
  {
    id: "z100_q14",
    step: 14,
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
    id: "z100_q15",
    step: 15,
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
    id: "z100_q16",
    step: 16,
    key: "vision_after_30_days",
    type: "long-text",
    title: "Como você se vê depois de 30 dias na Mentoria 0 a 100?",
    placeholder: "Escreva sua resposta",
    required: true,
  },
  {
    id: "z100_q17",
    step: 17,
    key: "purchase_decision",
    type: "single-choice",
    title: "Você se vê pronto pra fazer sua matrícula na Mentoria 0 a 100 e investir R$ 497/mês pra ter acompanhamento quinzenal comigo e evoluir com constância?",
    description:
      "Esse valor inclui check-ins quinzenais, dashboard de desempenho, acesso à Academia, hotseats, feedbacks assíncronos, recomendação para jobs/collabs e tudo o que existe na Mentoria Passo 0 incluso.",
    required: true,
    options: [
      { label: "✅ Sim, estou pronto pra realizar minha matrícula no 0 a 100!", value: "buy_now" },
      { label: "🤔 Sim, mas ainda tenho dúvidas e quero entender melhor antes.", value: "thinking" },
      { label: "⏳ Ainda não consigo agora, mas quero entrar em breve.", value: "not_now" },
    ],
  },
  {
    id: "z100_q18",
    step: 18,
    key: "main_doubt",
    type: "short-text",
    title: "Qual sua principal dúvida sobre o 0 a 100?",
    placeholder: "Digite sua dúvida principal",
    required: true,
  },
  {
    id: "z100_q19",
    step: 19,
    key: "preferred_contact_channel",
    type: "single-choice",
    title: "Como você prefere que a gente fale com você?",
    required: true,
    options: [
      { label: "WhatsApp", value: "whatsapp" },
      { label: "Email", value: "email" },
    ],
  },
  {
    id: "z100_q20",
    step: 20,
    key: "not_now_reason",
    type: "single-choice",
    title: "O que te impediu de entrar agora?",
    required: true,
    options: [
      { label: "Orçamento agora / preciso me organizar", value: "orcamento" },
      { label: "Quero terminar outras prioridades primeiro", value: "prioridades" },
      { label: "Tô com medo de não conseguir manter constância", value: "medo_constancia" },
      { label: "Ainda não tenho produto / não sei se é a hora", value: "sem_produto" },
      { label: "Quero conversar antes de decidir", value: "quero_conversar" },
      { label: "Outro", value: "outro" },
    ],
  },
  {
    id: "z100_q21",
    step: 21,
    key: "not_now_reason_other",
    type: "short-text",
    title: "Pode me contar qual é esse outro motivo?",
    placeholder: "Escreva aqui",
    required: true,
  },
  {
    id: "z100_q22",
    step: 22,
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

export function getVisibleZeroACemQuestions(
  answers: Record<string, string | string[]>
): FormQuestion[] {
  return zeroACemQuestions.filter((question) => {
    const platform = answers.priority_platform;
    const decision = answers.purchase_decision;
    const notNowReason = answers.not_now_reason;

    if (question.key === "instagram_handle_priority") {
      return platform === "instagram" || platform === "todas";
    }

    if (question.key === "tiktok_handle_priority") {
      return platform === "tiktok" || platform === "todas";
    }

    if (question.key === "youtube_handle_priority") {
      return platform === "youtube" || platform === "todas";
    }

    if (["main_doubt", "preferred_contact_channel"].includes(question.key)) {
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