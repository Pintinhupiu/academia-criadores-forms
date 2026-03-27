export function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

export function formatPhone(value: string) {
  const digits = normalizePhone(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function isValidBrazilPhone(value: string) {
  const digits = normalizePhone(value);

  if (digits.length < 10 || digits.length > 11) return false;

  const ddd = Number(digits.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;

  return true;
}

export function isValidEmail(value: string) {
  const email = value.trim().toLowerCase();

  if (!email) return false;

  // formato básico
  const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!basicRegex.test(email)) return false;

  // bloqueios simples para evitar lixo muito óbvio
  const blockedDomains = [
    "email.com",
    "test.com",
    "teste.com",
    "fake.com",
    "example.com",
    "exemplo.com",
  ];

  const domain = email.split("@")[1];
  if (!domain) return false;

  if (blockedDomains.includes(domain)) return false;

  // evita sequências absurdamente falsas
  if (email.includes("aaa@") || email.includes("123@")) return false;

  return true;
}

export function getQuestionValidationError(
  type: string,
  value: string | string[],
  required?: boolean
) {
  if (!required) return null;

  if (Array.isArray(value)) {
    return value.length > 0 ? null : "Selecione pelo menos uma opção.";
  }

  const trimmed = value.trim();

  if (!trimmed) return "Este campo é obrigatório.";

  if (type === "email" && !isValidEmail(trimmed)) {
    return "Digite um e-mail válido.";
  }

  if (type === "phone" && !isValidBrazilPhone(trimmed)) {
    return "Digite um WhatsApp válido com DDD.";
  }

  return null;
}