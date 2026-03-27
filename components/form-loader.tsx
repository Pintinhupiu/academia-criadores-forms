"use client";

export function FormLoader() {
  return (
    <div className="glass-card flex min-h-[280px] flex-col items-center justify-center rounded-[28px] px-6 py-10">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900" />
      <p className="mt-4 text-sm text-zinc-500">Carregando formulário...</p>
    </div>
  );
}