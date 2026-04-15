import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren & {
  className?: string;
};

export const DialogTitle = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        "w-full auto-rows-min text-lg md:text-2xl font-bold py-2",
        className,
      )}
    >
      {children}
    </h2>
  );
};
