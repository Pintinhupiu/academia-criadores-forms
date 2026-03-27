import { ChevronRight } from "lucide-react";

type FormProgressProps = {
  currentStage: number;
  titles: string[];
};

export function FormProgress({ currentStage, titles }: FormProgressProps) {
  return (
    <div className="mx-auto mb-6 w-full max-w-[640px] rounded-[24px] border border-black/5 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        {titles.map((title, index) => {
          const step = index + 1;
          const isActive = step === currentStage;
          const isDone = step < currentStage;

          return (
            <div key={title} className="flex min-w-0 items-center gap-2">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition ${
                    isActive || isDone
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {step}
                </div>

                <div className="leading-none">
                  <p
                    className={`text-[11px] uppercase tracking-[0.16em] ${
                      isActive ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    Etapa
                  </p>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      isActive || isDone ? "text-zinc-900" : "text-zinc-400"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              </div>

              {step < titles.length && <ChevronRight className="h-4 w-4 text-zinc-300" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}