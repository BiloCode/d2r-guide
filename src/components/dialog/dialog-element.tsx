import { HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { ANIMATION_OPEN_DELAY, ANIMATION_DURATION } from "./dialog.helpers";

type Props = PropsWithChildren & {
  open: boolean;
  style?: HTMLAttributes<HTMLDivElement>["style"];
  onClose?: () => void;
};

export const DialogElement = ({ open, style, onClose, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => setIsVisible(true), ANIMATION_OPEN_DELAY);
    } else {
      window.setTimeout(() => setIsVisible(false), ANIMATION_OPEN_DELAY);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{ transitionDuration: `${ANIMATION_DURATION}ms` }}
      className={cn(`fixed inset-0 z-20 transition-opacity`, {
        "opacity-0": !isVisible,
        "opacity-100": isVisible,
      })}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-end justify-center md:items-center md:p-4 pointer-events-none">
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ ...style, transitionDuration: `${ANIMATION_DURATION}ms` }}
          className={cn(
            `w-auto transform rounded-t-2xl md:rounded-2xl bg-white shadow-xl transition-all ease-out pointer-events-auto`,
            {
              "translate-y-0 md:translate-y-0 scale-100 opacity-100": isVisible,
              "translate-y-full md:translate-y-0 scale-95 md:scale-95 opacity-0":
                !isVisible,
            },
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
