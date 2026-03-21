import Fuse from "fuse.js";

import { Runes } from "@/constants/runes";
import { Locales } from "@/constants/locale";
import { Runewords } from "@/constants/runewords";

export const getResults = (search: unknown) => {
  const runes = Object.keys(Runes);
  const runewords = Object.values(Runewords);

  const query = String(search ?? "")
    .toLowerCase()
    .trim();

  if (query.length < 2) {
    return runewords;
  }

  const isLevel = query.match(/^(?:(?:lv|nv)\.?\s*)?\d+$/i);
  const isPattern = query.match(/^[a-zA-Z]+(?:\+[a-zA-Z]+)*\+?$/i);

  if (isPattern) {
    const slides = query.split("+").filter((p) => p !== "");

    if (slides.every((s) => runes.includes(s))) {
      return runewords.filter((runeword) =>
        slides.some((s) => runeword.runes.includes(s)),
      );
    }
  }

  const fuse = new Fuse(runewords, {
    keys: Locales.map((locale) => `name.${locale}`),
    threshold: 0.1,
  });

  return fuse.search(query).map((r) => r.item);
};
