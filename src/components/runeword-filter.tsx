"use client";

import { ChangeEvent } from "react";

import type { Locale } from "@/typings/locale";

import { Runewords_Titles } from "@/constants/information";

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
  const {
    onRunewordSearch,
    onRunewordQuantitySearch,
    onRunewordExpansionSearch,
  } = useRunewordContext();

  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onRunewordSearch(ev.target.value ?? "");
  };

  const onQuantityChange = (value: string) => {
    onRunewordQuantitySearch(value);
  };

  const onExpansionChange = (value: string) => {
    onRunewordExpansionSearch(value);
  };

  return (
    <div className="w-full flex gap-2">
      <Field className="gap-1">
        <FieldLabel htmlFor="search-by-name" className="text-neutral-300">
          {Runewords_Titles["search"][locale]}
        </FieldLabel>
        <Input
          type="search"
          id="search-by-name"
          autoComplete="off"
          className="border-neutral-600 text-neutral-300"
          placeholder={Runewords_Titles["search_placeholder"][locale]}
          onChange={onSearchChange}
        />
      </Field>

      <Field className="w-48 gap-1">
        <FieldLabel className="text-neutral-300">
          {Runewords_Titles["quantity"][locale]}
        </FieldLabel>
        <Select defaultValue="any-runes" onValueChange={onQuantityChange}>
          <SelectTrigger className="border-neutral-600 text-neutral-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="any-runes" className="h-7"></SelectItem>
              <SelectItem value="2-runes">
                {Runewords_Titles["quantity_list"][0][locale]}
              </SelectItem>
              <SelectItem value="3-runes">
                {Runewords_Titles["quantity_list"][1][locale]}
              </SelectItem>
              <SelectItem value="4-runes">
                {Runewords_Titles["quantity_list"][2][locale]}
              </SelectItem>
              <SelectItem value="5-runes">
                {Runewords_Titles["quantity_list"][3][locale]}
              </SelectItem>
              <SelectItem value="6-runes">
                {Runewords_Titles["quantity_list"][4][locale]}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="w-96 gap-1">
        <FieldLabel className="text-neutral-300">
          {Runewords_Titles["expansion"][locale]}
        </FieldLabel>
        <Select defaultValue="any-expansion" onValueChange={onExpansionChange}>
          <SelectTrigger className="border-neutral-600 text-neutral-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="any-expansion" className="h-7"></SelectItem>
              <SelectItem value="lod">Lord of Destruction</SelectItem>
              <SelectItem value="row">Reign of the Warlock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
