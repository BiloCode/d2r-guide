"use client";

import type { Locale } from "@/typings/locale";

import { useRunewordContext } from "@/contexts/runeword-context";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  locale: Locale;
};

export const RunewordFilter = ({ locale }: Props) => {
  const { onRunewordSearch } = useRunewordContext();

  return (
    <div className="w-full flex gap-2">
      <Field className="gap-1">
        <FieldLabel htmlFor="search-by-name" className="text-neutral-300">
          Busca por:
        </FieldLabel>
        <Input
          type="search"
          id="search-by-name"
          autoComplete="off"
          className="border-neutral-600 text-neutral-300"
          placeholder="Nombre, Runas y Equipamiento"
          onChange={(ev) => {
            onRunewordSearch(ev.target.value ?? "");
          }}
        />
      </Field>

      <Field className="w-48 gap-1">
        <FieldLabel className="text-neutral-300">Cantidad:</FieldLabel>
        <Select>
          <SelectTrigger className="border-neutral-600 text-neutral-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2-runes">2 runas</SelectItem>
              <SelectItem value="3-runes">3 runas</SelectItem>
              <SelectItem value="4-runes">4 runas</SelectItem>
              <SelectItem value="5-runes">5 runas</SelectItem>
              <SelectItem value="6-runes">6 runas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="w-96 gap-1">
        <FieldLabel className="text-neutral-300">Expansion:</FieldLabel>
        <Select>
          <SelectTrigger className="border-neutral-600 text-neutral-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="lod">Lord of Destruction</SelectItem>
              <SelectItem value="row">Reign of the Warlock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
