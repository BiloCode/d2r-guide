"use client";

import { createPortal } from "react-dom";
import type { PropsWithChildren } from "react";

export const Portals = ({ children }: PropsWithChildren) => {
  const element = document.getElementById("modals");

  if (element === null) {
    return createPortal(children, document.body);
  }

  return createPortal(children, element);
};
