import { Runes } from "@/constants/runes";
import { Runewords_Subtitles } from "@/constants/information";

import { RunewordProvider } from "@/contexts/runeword-context";

import { Wrapper } from "@/components/wrapper";
import { RuneImage } from "@/components/rune-image";
import { RunewordList } from "@/components/runeword-list";
import { RunewordFilter } from "@/components/runeword-filter";
import { RunewordDialogServer } from "@/components/runeword-dialog-server";

import { getPageParams, getSearchParams } from "@/helpers/server";

type Props = PageProps<"/[lang]/runewords"> & {};

export default async function RunewordsPage({ params, searchParams }: Props) {
  const { locale } = await getPageParams(params);
  const { runewords } = await getSearchParams(searchParams);

  return (
    <RunewordProvider runewords={runewords}>
      <Wrapper className="w-full min-h-dvh">
        <div className="w-full grid gap-6">
          <h1 className="w-full text-center font-bold text-[16px] py-2 md:text-2xl text-neutral-400">
            {Runewords_Subtitles["runewords"][locale]}
          </h1>

          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(Runes).map((rune) => (
              <RuneImage key={rune.order} name={rune.name} />
            ))}
          </div>

          <div className="w-full">
            <div className="sticky top-0 left-0 py-4 bg-neutral-900">
              <RunewordFilter locale={locale} />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-2">
              <RunewordList locale={locale} />
            </div>
          </div>
        </div>

        <RunewordDialogServer locale={locale} />
      </Wrapper>
    </RunewordProvider>
  );
}
