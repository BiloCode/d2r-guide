import "../globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import { getPageParams } from "@/helpers/server";

import { DeviceProvider } from "@/providers/device-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diablo II",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
  },
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { locale } = await getPageParams(params);

  return (
    <html
      lang={locale}
      className={cn("w-full h-full", "antialiased", montserrat.variable)}
    >
      <body className="min-h-full flex flex-col bg-neutral-900">
        <TooltipProvider>
          <DeviceProvider>
            <div id="modals" />
            <div className="w-full flex flex-col min-h-dvh">
              <div className="shrink-0">
                <Header locale={locale} />
              </div>
              <div className="flex-1">{children}</div>
            </div>
          </DeviceProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
