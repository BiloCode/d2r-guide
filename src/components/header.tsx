import Link from "next/link";

import type { Locale } from "@/typings/locale";

import { Wrapper } from "@/components/wrapper";

type Props = {
  locale: Locale;
};

export const Header = ({ locale }: Props) => (
  <header className="relative w-full h-16 md:h-32">
    <img
      src="/images/d2r_row.jpg"
      width={2560}
      height={256}
      alt="Diablo 2 Resurrected Reign of the Warlock"
      className="w-full h-full object-cover object-center opacity-40"
    />
    <div className="absolute w-full h-full top-0 left-0 flex items-center">
      <Wrapper className="py-0!">
        <Link href={`/${locale}`} className="inline-block w-max">
          <img
            src="/images/d2r_logo.png"
            width={96}
            height={96}
            className="size-12 md:size-24 shrink-0"
            alt="Diablo 2 Resurrect Logo"
          />
        </Link>
      </Wrapper>
    </div>
  </header>
);
