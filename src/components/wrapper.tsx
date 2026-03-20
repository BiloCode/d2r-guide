import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const Wrapper = ({ children, className }: Props) => (
  <div
    className={cn(
      "max-w-7xl w-full mx-auto py-6 px-6 md:py-8 md:px-8",
      className,
    )}
  >
    {children}
  </div>
);
