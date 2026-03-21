"use client";

import type { Locale } from "@/typings/locale";

import { useRunewordContext } from "@/contexts/runeword-context";
import { RunewordCardLink } from "./runeword-card-link";

type Props = {
  locale: Locale;
};

export const RunewordList = ({ locale }: Props) => {
  const { runewords } = useRunewordContext();

  return runewords.map((runeword) => (
    <RunewordCardLink key={runeword.key} locale={locale} runeword={runeword} />
  ));
};
