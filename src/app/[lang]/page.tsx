import { Runes } from "@/constants/runes";
import { Runewords } from "@/constants/runewords";

import { Rune } from "@/components/rune";
import { Badge } from "@/components/ui/badge";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <div className="max-w-7xl mx-auto min-h-dvh py-8 px-8">
      <div className="w-full grid gap-8">
        <span className="font-bold text-gray-400">Lista de runas</span>

        <div className="flex flex-wrap justify-center gap-2">
          {Object.values(Runes).map((rune) => (
            <Rune key={rune.order} name={rune.name} side="top" />
          ))}
        </div>

        <span className="font-bold text-gray-400">
          Lista de palabras runicas
        </span>

        <div className="flex flex-wrap justify-center gap-2">
          {Object.values(Runewords).map((runeword) => (
            <div
              key={runeword.key}
              className="w-48 shrink-0 flex flex-col p-5 gap-6 bg-gray-800 rounded-sm"
            >
              <div className="w-full text-center">
                <span className="font-bold text-gray-400">
                  {runeword.name[lang]}
                </span>
                <p className="text-xs text-gray-400">
                  ({runeword.level[lang]})
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                {runeword.runes.map((rune, index) => (
                  <Rune key={index} name={rune} side="left" />
                ))}
              </div>
              <div className="flex flex-row gap-1 justify-center">
                {runeword.apply_on[lang].map((apply) => (
                  <Badge key={apply}>{apply}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
