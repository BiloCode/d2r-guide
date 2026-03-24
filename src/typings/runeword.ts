import type { Locale } from "@/typings/locale";

export type RunewordOption = string | Record<string, string[]>;
export type Runeword = {
  key: string;
  runes: string[];
  name: Record<Locale, string>;
  level: Record<Locale, string>;
  requires: Record<Locale, string[]>;
  details?: Record<Locale, Array<RunewordOption>>;
  details_on?: Array<{
    key: string;
    name: Record<Locale, string>;
    items: Record<Locale, Array<RunewordOption>>;
  }>;
  expansion: string;
  references: Record<Locale, string>;
};
