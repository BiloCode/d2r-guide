"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import type { Runeword } from "@/typings/runeword";

import { getResults } from "@/helpers/search";
import { debounce } from "@/helpers/debounce";

type Props = PropsWithChildren & {
  runewords: Runeword[];
};

type Context = {
  runewords: Runeword[];
  onRunewordSearch: (search: string) => void;
};

export const RunewordContext = createContext<Partial<Context>>({});

export const RunewordProvider = (props: Props) => {
  const [runewords, setRunewords] = useState<Runeword[]>(props.runewords);

  const onRunewordSearch = useMemo(
    () =>
      debounce((search: string) => {
        setRunewords(() => getResults(search));
        if (search !== "") {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + "?search=" + search,
          );
        } else {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }, 300),
    [],
  );

  return (
    <RunewordContext.Provider
      value={{
        runewords,
        onRunewordSearch,
      }}
    >
      {props.children}
    </RunewordContext.Provider>
  );
};

export const useRunewordContext = () => useContext(RunewordContext) as Context;
