import { cn } from "@/lib/cn";

export function Callout({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-teal-100 bg-[#E7F4F0] p-5",
        className,
      )}
    >
      <div className="text-sm font-semibold text-stone-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-stone-600">
        {children}
      </div>
    </div>
  );
}
