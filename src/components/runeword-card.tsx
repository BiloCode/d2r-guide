"use client";

import { Fragment, useState } from "react";
import Link from "next/link";

import type { Locale } from "@/typings/locale";
import type { Runeword } from "@/typings/runeword";

import { cn } from "@/lib/utils";

import { History } from "@/helpers/history";

import { Tag } from "@/components/tag";
import { Card } from "@/components/card";
import { Badge } from "@/components/ui/badge";
import { RunewordIcon } from "@/components/runeword-icon";
import { RunewordDetails } from "@/components/runeword-details";

type Props = {
  locale: Locale;
  runeword: Runeword;
};

export const RunewordCard = ({ locale, runeword }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);

    const params = new URLSearchParams({
      ...Object.fromEntries(new URLSearchParams(window.location.search)),
      name: runeword.key,
    });

    History.replace({ params });
  };

  const onClose = () => {
    setIsOpen(false);

    const params = new URLSearchParams(window.location.search);

    if (params.has("name")) {
      params.delete("name");
    }

    History.replace({ params });
  };

  return (
    <Fragment>
      <Link
        className="flex-1 min-w-64 lg:min-w-80 "
        href={`/${locale}/runewords?name=${runeword.key}`}
        onClick={(ev) => {
          ev.preventDefault();
          onClick();
        }}
      >
        <Card
          className={cn(
            "relative z-0 w-full h-full flex flex-col p-4 md:p-5 gap-6",
            {
              "border-violet-800/50": runeword.expansion === "row",
            },
          )}
        >
          <div className="w-full text-center">
            <span className="font-bold text-neutral-400">
              {runeword.name[locale]}
            </span>
            <p className="text-xs text-neutral-400">
              ({runeword.level[locale]})
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-wrap items-center gap-1">
            {runeword.runes.map((rune, index) => (
              <RunewordIcon key={index} rune={rune} />
            ))}
          </div>

          <div className="min-h-5 flex flex-wrap gap-1 justify-center">
            {runeword.requires[locale].map((apply) => (
              <Badge key={apply}>{apply}</Badge>
            ))}
          </div>

          <div className="absolute top-3 left-3 grid gap-1">
            {runeword.expansion === "row" && <Tag theme="violet">RoW</Tag>}
            {runeword.ladder && <Tag theme="lime">Ladder</Tag>}
          </div>

          {Boolean(runeword.version) && (
            <span className="absolute top-3 right-2 text-gray-500/80 text-xs">
              v{runeword.version}+
            </span>
          )}
        </Card>
      </Link>
      <RunewordDetails
        open={isOpen}
        onClose={onClose}
        metadata={{
          locale,
          runeword,
        }}
      />
    </Fragment>
  );
};
