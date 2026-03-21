"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import type { Locale } from "@/typings/locale";

import { Runewords } from "@/constants/runewords";

import { RunewordDialog } from "@/components/runeword-dialog";

type Props = {
  locale: Locale;
};

export const RunewordDialogServer = ({ locale }: Props) => {
  const params = useSearchParams();

  const [isOpen, setIsOpen] = useState(params.get("dialog") !== null);

  if (params.get("dialog") === null) {
    return <></>;
  }

  const runeword_key = params.get("dialog") as string;
  const runeword = Runewords[runeword_key];

  const onClose = () => {
    setIsOpen(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <RunewordDialog
      open={isOpen}
      onClose={onClose}
      metadata={{
        locale,
        runeword,
      }}
    />
  );
};
