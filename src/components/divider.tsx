import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  return <div className={cn("w-full h-px bg-neutral-200", className)} />;
};
