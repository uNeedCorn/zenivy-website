import { cn } from "@/lib/cn";

type ContainerSize = "narrow" | "wide";

export function Container({
  children,
  className,
  size = "narrow",
}: {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}) {
  const widthClassName =
    size === "wide" ? "max-w-[1100px]" : "max-w-[760px]";

  return (
    <div className={cn("mx-auto w-full px-6", widthClassName, className)}>
      {children}
    </div>
  );
}
