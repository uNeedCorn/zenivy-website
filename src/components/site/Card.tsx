import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200/80 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
