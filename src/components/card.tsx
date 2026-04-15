import { cn } from "@/lib/utils";
import type { ElementType, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  as?: ElementType;
  hover?: "on" | "off";
  className?: string;
};

export const Card = ({
  as: Component = "div",
  hover = "on",
  className,
  children,
}: Props) => {
  return (
    <Component
      className={cn(
        "border-neutral-800 border-2 bg-neutral-800/50 rounded-sm",
        className,
        {
          "hover:bg-neutral-800/80": hover === "on",
        },
      )}
    >
      {children}
    </Component>
  );
};
