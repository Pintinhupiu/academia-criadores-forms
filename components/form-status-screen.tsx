"use client";

type FormStatusScreenProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
};

export function FormStatusScreen({
  title,
  description,
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick,
}: FormStatusScreenProps) {
  return (
    <div className="glass-card rounded-[28px] p-6 sm:p-8">
      <div className="max-w-2xl">
        <h1 className="mb-3 text-[28px] font-medium leading-tight tracking-[-0.02em] text-zinc-900 sm:text-[38px]">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>

      {(primaryLabel || secondaryLabel) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {primaryLabel && onPrimaryClick && (
            <button
              type="button"
              onClick={onPrimaryClick}
              className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
            >
              {primaryLabel}
            </button>
          )}

          {secondaryLabel && onSecondaryClick && (
            <button
              type="button"
              onClick={onSecondaryClick}
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}