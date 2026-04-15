import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const DialogContent = ({ children, className }: Props) => {
  return <div className={cn("w-full p-4", className)}>{children}</div>;
};
