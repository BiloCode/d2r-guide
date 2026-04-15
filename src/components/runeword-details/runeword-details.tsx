"use client";

import type { Locale } from "@/typings/locale";

import type { Runeword } from "@/typings/runeword";
import type { DialogProps } from "@/typings/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tag } from "@/components/tag";
import { Divider } from "@/components/divider";
import { RunewordIcon } from "@/components/runeword-icon";
import { RunewordDialogOption } from "./runeword-details-option";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";

type Props = DialogProps & {
  metadata: {
    locale: Locale;
    runeword: Runeword;
  };
};

export const RunewordDetails = ({
  open,
  onClose,
  metadata: { locale, runeword },
}: Props) => (
  <Dialog
    open={open}
    onClose={onClose}
    width={{
      mobile: "90vw",
    }}
    maxWidth={{
      tablet: 576,
      desktop: 576,
    }}
    minWidth={{
      tablet: 576,
      desktop: 576,
    }}
    maxHeight={{
      mobile: "80vh",
    }}
  >
    <DialogContent>
      <div className="w-full text-center">
        <DialogTitle>{runeword.name[locale]}</DialogTitle>
        <DialogDescription>
          <div className="flex justify-center gap-1">
            {runeword.runes.map((rune, index) => (
              <RunewordIcon key={rune + index} rune={rune} type="modal" />
            ))}
          </div>
          <p className="w-full flex justify-center gap-1">
            {runeword.expansion === "row" && <Tag theme="violet">RoW</Tag>}
            {runeword.ladder && <Tag theme="lime">Ladder</Tag>}
          </p>
        </DialogDescription>
      </div>

      <Divider className="my-1.5" />

      {typeof runeword.options !== "undefined" && (
        <div className="grid cursor-default text-center">
          {runeword.options?.[locale].map((option, index) => (
            <RunewordDialogOption key={index} option={option} />
          ))}
        </div>
      )}

      {typeof runeword.options_tabs !== "undefined" && (
        <Tabs defaultValue={runeword.options_tabs[0].key} className="w-full">
          <TabsList className="self-center">
            {runeword.options_tabs.map((tab) => (
              <TabsTrigger key={tab.key} value={tab.key}>
                {tab.name[locale]}
              </TabsTrigger>
            ))}
          </TabsList>
          {runeword.options_tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <div className="grid cursor-default">
                {tab.items[locale].map((option, index) => (
                  <RunewordDialogOption
                    key={index}
                    option={option}
                    className="text-center"
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      <Divider className="my-1.5" />

      <a
        href={runeword.references[locale]}
        target="_blank"
        className="w-full inline-block mt-1.5 text-xs md:text-sm text-blue-700 hover:underline text-center truncate"
      >
        {runeword.references[locale]}
      </a>
    </DialogContent>
  </Dialog>
);
