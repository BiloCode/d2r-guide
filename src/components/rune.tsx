import Image from "next/image";
import { Runes } from "@/constants/runes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  name: string;
  side: "left" | "right" | "top" | "bottom";
};

export const Rune = ({ name, side }: Props) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="size-12 shrink-0">
        <Image
          src={`/images/${name}_rune.png`}
          width={48}
          height={48}
          alt={`${name} rune`}
          style={{
            imageRendering: "pixelated",
          }}
        />
      </div>
    </TooltipTrigger>
    <TooltipContent side={side}>
      <span className="font-bold uppercase">{Runes[name].name}</span>
    </TooltipContent>
  </Tooltip>
);
