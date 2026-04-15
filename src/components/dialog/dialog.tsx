"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useContextSelector } from "use-context-selector";

import { DeviceContext } from "@/providers/device-provider";

import { DialogElement } from "./dialog-element";

import { ANIMATION_DURATION } from "./dialog.helpers";

const Portals = dynamic(
  () => import("@/components/portals").then((v) => v.Portals),
  { ssr: false },
);

type MeasureDevice = Partial<{
  tablet: number | string;
  mobile: number | string;
  desktop: number | string;
}>;

type Props = PropsWithChildren & {
  open: boolean;
  onClose?: () => void;
  width?: (number | string) | MeasureDevice;
  height?: (number | string) | MeasureDevice;
  minWidth?: (number | string) | MeasureDevice;
  maxWidth?: (number | string) | MeasureDevice;
  maxHeight?: (number | string) | MeasureDevice;
  minHeight?: (number | string) | MeasureDevice;
};

export const Dialog = ({
  open,
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  onClose,
  children,
}: Props) => {
  const [isRenderer, setIsRenderer] = useState(open);

  const isMobile = useContextSelector(DeviceContext, (s) => s.isMobile);
  const isTablet = useContextSelector(DeviceContext, (s) => s.isTablet);
  const isDesktop = useContextSelector(DeviceContext, (s) => s.isDesktop);

  useEffect(() => {
    if (open) {
      setIsRenderer(true);
    } else {
      window.setTimeout(() => setIsRenderer(false), ANIMATION_DURATION);
    }
  }, [open]);

  const widthValue = useMemo(() => {
    if (typeof width === "object" && isMobile) {
      return width?.mobile ?? undefined;
    }

    if (typeof width === "object" && isTablet) {
      return width?.tablet ?? undefined;
    }

    if (typeof width === "object" && isDesktop) {
      return width?.desktop ?? undefined;
    }

    if (typeof width === "number" || typeof width === "string") {
      return width;
    }

    return undefined;
  }, [width, isMobile, isTablet, isDesktop]);

  const minWidthValue = useMemo(() => {
    if (typeof minWidth === "object" && isMobile) {
      return minWidth?.mobile ?? undefined;
    }

    if (typeof minWidth === "object" && isTablet) {
      return minWidth?.tablet ?? undefined;
    }

    if (typeof minWidth === "object" && isDesktop) {
      return minWidth?.desktop ?? undefined;
    }

    if (typeof minWidth === "number" || typeof minWidth === "string") {
      return minWidth;
    }

    return undefined;
  }, [minWidth, isMobile, isTablet, isDesktop]);

  const maxWidthValue = useMemo(() => {
    if (typeof maxWidth === "object" && isMobile) {
      return maxWidth?.mobile ?? undefined;
    }

    if (typeof maxWidth === "object" && isTablet) {
      return maxWidth?.tablet ?? undefined;
    }

    if (typeof maxWidth === "object" && isDesktop) {
      return maxWidth?.desktop ?? undefined;
    }

    if (typeof maxWidth === "number" || typeof maxWidth === "string") {
      return maxWidth;
    }

    return undefined;
  }, [maxWidth, isMobile, isTablet, isDesktop]);

  const heightValue = useMemo(() => {
    if (typeof height === "object" && isMobile) {
      return height?.mobile ?? undefined;
    }

    if (typeof height === "object" && isTablet) {
      return height?.tablet ?? undefined;
    }

    if (typeof height === "object" && isDesktop) {
      return height?.desktop ?? undefined;
    }

    if (typeof height === "number" || typeof height === "string") {
      return height;
    }

    return undefined;
  }, [height, isMobile, isTablet, isDesktop]);

  const minHeightValue = useMemo(() => {
    if (typeof minHeight === "object" && isMobile) {
      return minHeight?.mobile ?? undefined;
    }

    if (typeof minHeight === "object" && isTablet) {
      return minHeight?.tablet ?? undefined;
    }

    if (typeof minHeight === "object" && isDesktop) {
      return minHeight?.desktop ?? undefined;
    }

    if (typeof minHeight === "number" || typeof minHeight === "string") {
      return minHeight;
    }

    return undefined;
  }, [minHeight, isMobile, isTablet, isDesktop]);

  const maxHeightValue = useMemo(() => {
    if (typeof maxHeight === "object" && isMobile) {
      return maxHeight?.mobile ?? undefined;
    }

    if (typeof maxHeight === "object" && isTablet) {
      return maxHeight?.tablet ?? undefined;
    }

    if (typeof maxHeight === "object" && isDesktop) {
      return maxHeight?.desktop ?? undefined;
    }

    if (typeof maxHeight === "number" || typeof maxHeight === "string") {
      return maxHeight;
    }

    return undefined;
  }, [maxHeight, isMobile, isTablet, isDesktop]);

  if (!isRenderer) {
    return null;
  }

  return (
    <Portals>
      <DialogElement
        open={open}
        onClose={onClose}
        style={{
          width: widthValue,
          height: heightValue,
          minWidth: minWidthValue,
          maxWidth: maxWidthValue,
          minHeight: minHeightValue,
          maxHeight: maxHeightValue,
        }}
      >
        {children}
      </DialogElement>
    </Portals>
  );
};
