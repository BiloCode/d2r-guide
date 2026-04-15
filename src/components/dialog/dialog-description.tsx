import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren & {
  className?: string;
};

export const DialogDescription = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full auto-rows-min grid gap-2", className)}>
      {children}
    </div>
  );
};
