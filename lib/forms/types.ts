export type QuestionType =
  | "info"
  | "short-text"
  | "long-text"
  | "email"
  | "phone"
  | "single-choice"
  | "multiple-choice"
  | "multi-select";

export type QuestionOption = {
  label: string;
  value: string;
  description?: string;
};

export type FormQuestion = {
  id: string;
  step: number;
  key: string;
  type: QuestionType;
  title: string;
  description?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  options?: QuestionOption[];
  minSelections?: number;
  maxSelections?: number;
};