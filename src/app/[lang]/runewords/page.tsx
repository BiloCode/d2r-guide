import { Runes } from "@/constants/runes";
import { Runewords } from "@/constants/runewords";
import { Runewords_Subtitles } from "@/constants/information";

import { Wrapper } from "@/components/wrapper";
import { RuneImage } from "@/components/rune-image";
import { RunewordCardLink } from "@/components/runeword-card-link";
import { RunewordDialogShare } from "@/components/runeword-dialog-share";

import { getPageParams } from "@/helpers/server";

type Props = PageProps<"/[lang]/runewords"> & {};

export default async function RunewordsPage({ params }: Props) {
  const { locale } = await getPageParams(params);

  return (
    <Wrapper className="w-full min-h-dvh">
      <div className="w-full grid gap-6 md:gap-8">
        <h1 className="font-bold text-[16px] md:text-2xl text-neutral-400">
          {Runewords_Subtitles["rune"][locale]}
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
          {Object.values(Runes).map((rune) => (
            <RuneImage key={rune.order} name={rune.name} />
          ))}
        </div>

        <h2 className="font-bold text-[16px] md:text-2xl text-neutral-400">
          {Runewords_Subtitles["runewords"][locale]}
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-2">
          {Object.values(Runewords).map((runeword) => (
            <RunewordCardLink
              key={runeword.key}
              locale={locale}
              runeword={runeword}
            />
          ))}
        </div>
      </div>

      <RunewordDialogShare locale={locale} />
    </Wrapper>
  );
}
