import "../globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { Wrapper } from "@/components/wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D2R Guides",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-neutral-900">
        <TooltipProvider>
          <div className="w-full min-h-dvh">
            <div className="relative w-full h-16 md:h-32">
              <img
                src="/images/d2r_row.jpg"
                width={2560}
                height={256}
                alt="Diablo 2 Resurrected Reign of the Warlock"
                className="w-full h-full object-cover object-center opacity-40"
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-center">
                <Wrapper className="py-0!">
                  <img
                    src="/images/d2r_logo.png"
                    width={96}
                    height={96}
                    className="size-12 md:size-24 shrink-0"
                    alt="Diablo 2 Resurrect Logo"
                  />
                </Wrapper>
              </div>
            </div>
            {children}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
