"use client";

import { KeyboardEvent } from "react";
import type { FormQuestion } from "@/lib/forms/types";
import {
  formatPhone,
  getQuestionValidationError,
  normalizePhone,
} from "@/lib/forms/validation";

type Props = {
  question: FormQuestion;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
};

export function QuestionRenderer({
  question,
  value,
  onChange,
  onSubmit,
  isSubmitting,
}: Props) {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && question.type !== "long-text") {
      event.preventDefault();
      onSubmit();
    }
  };

  const multiValue = Array.isArray(value) ? value : [];
  const singleValue = Array.isArray(value) ? "" : value;

  const errorMessage = getQuestionValidationError(
    question.type,
    value,
    question.required
  );

  const toggleMultiValue = (optionValue: string) => {
    const exists = multiValue.includes(optionValue);
    if (exists) {
      onChange(multiValue.filter((item) => item !== optionValue));
      return;
    }
    onChange([...multiValue, optionValue]);
  };

  function handleTextChange(next: string) {
    if (question.type === "phone") {
      const onlyDigits = normalizePhone(next);
      onChange(formatPhone(onlyDigits));
      return;
    }

    onChange(next);
  }

  return (
    <div className="glass-card rounded-[28px] p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-[26px] font-medium leading-tight tracking-[-0.02em] text-zinc-900 sm:text-[36px]">
          {question.title}
        </h1>
        {question.description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            {question.description}
          </p>
        ) : null}
      </div>

      

      {["short-text", "email", "phone"].includes(question.type) && (
        <div>
          <input
            value={singleValue}
            onChange={(e) => handleTextChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={question.placeholder}
            inputMode={question.type === "phone" ? "numeric" : question.type === "email" ? "email" : "text"}
            autoCapitalize={question.type === "email" ? "none" : "sentences"}
            autoComplete={
              question.type === "email"
                ? "email"
                : question.type === "phone"
                ? "tel"
                : "name"
            }
            className={`h-14 w-full rounded-2xl border bg-white px-4 text-base text-zinc-900 outline-none transition ${
              errorMessage
                ? "border-red-400 focus:border-red-500"
                : "border-black/8 focus:border-black/15"
            }`}
          />
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      )}

      {question.type === "long-text" && (
        <div>
          <textarea
            value={singleValue}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className={`min-h-[160px] w-full resize-none rounded-2xl border bg-white px-4 py-4 text-base text-zinc-900 outline-none transition ${
              errorMessage
                ? "border-red-400 focus:border-red-500"
                : "border-black/8 focus:border-black/15"
            }`}
          />
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      )}

      {question.type === "single-choice" && question.options && (
        <div className="space-y-3">
          {question.options.map((option) => {
            const selected = singleValue === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChange(option.value)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                  selected
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-black/8 bg-white text-zinc-900 hover:border-black/15"
                }`}
              >
                <div className="font-medium">{option.label}</div>
                {option.description ? (
                  <div
                    className={`mt-1 text-sm ${
                      selected ? "text-white/80" : "text-zinc-500"
                    }`}
                  >
                    {option.description}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "multi-select" && question.options && (
        <div>
          <div className="space-y-3">
            {question.options.map((option) => {
              const selected = multiValue.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleMultiValue(option.value)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    selected
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-black/8 bg-white text-zinc-900 hover:border-black/15"
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                </button>
              );
            })}
          </div>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      )}

      {question.type !== "single-choice" && (
        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">Enter para continuar</p>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting || !!errorMessage}
            className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-95 disabled:opacity-50"
          >
            {isSubmitting
              ? "Salvando..."
              : question.type === "info"
              ? "Continuar"
              : "Avançar"}
          </button>
        </div>
      )}
    </div>
  );
}