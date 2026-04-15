"use client";

import { cn } from "@/lib/utils";

type Props = {
  rune: string;
  type?: "modal" | "card";
};

export const RunewordIcon = ({ rune, type = "card" }: Props) => (
  <div className="shrink-0">
    <img
      src={`/images/runes/${rune}.webp`}
      alt={`${rune} rune`}
      width={48}
      height={48}
      className="size-8 md:size-12"
      loading="lazy"
      style={{
        imageRendering: "pixelated",
      }}
    />
    <span
      className={cn(
        "inline-block w-full text-center uppercase text-[10px] md:text-xs",
        {
          "text-neutral-400 font-bold": type === "card",
          "text-neutral-600 font-medium": type === "modal",
        },
      )}
    >
      {rune}
    </span>
  </div>
);
