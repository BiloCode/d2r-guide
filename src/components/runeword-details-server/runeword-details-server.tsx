"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import type { Locale } from "@/typings/locale";

import { History } from "@/helpers/history";

import { Runewords } from "@/constants/runewords";

import { RunewordDetails } from "@/components/runeword-details";

type Props = {
  locale: Locale;
};

export const RunewordDetailsServer = ({ locale }: Props) => {
  const params = useSearchParams();
  const paramsKey = params.get("name") ?? undefined;

  const [isOpen, setIsOpen] = useState(() => {
    if (typeof paramsKey === "undefined") {
      return false;
    }

    if (typeof Runewords[paramsKey] === "undefined") {
      return false;
    }

    return true;
  });

  const onClose = () => {
    setIsOpen(false);

    const params = new URLSearchParams(window.location.search);

    if (params.has("name")) {
      params.delete("name");
    }

    History.replace({ params });
  };

  if (typeof paramsKey === "undefined") {
    return <></>;
  }

  if (typeof Runewords[paramsKey] === "undefined") {
    return <></>;
  }

  return (
    <RunewordDetails
      open={isOpen}
      onClose={onClose}
      metadata={{
        locale,
        runeword: Runewords[paramsKey],
      }}
    />
  );
};
