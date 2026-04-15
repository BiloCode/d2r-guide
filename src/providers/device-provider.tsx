"use client";

import { useSyncExternalStore } from "react";
import { createContext } from "use-context-selector";

type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const device = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("resize", onStoreChange);
      return () => window.removeEventListener("resize", onStoreChange);
    },
    () => {
      if (window.innerWidth < 768) return "mobile";
      if (window.innerWidth < 1024) return "tablet";
      return "desktop";
    },
    () => "desktop",
  );

  const isMobile = device === "mobile";
  const isTablet = device === "tablet";
  const isDesktop = device === "desktop";

  return (
    <DeviceContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};
