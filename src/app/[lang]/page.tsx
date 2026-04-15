import Link from "next/link";

import { Home_Titles } from "@/constants/information";

import { Card } from "@/components/card";
import { Wrapper } from "@/components/wrapper";

import { getPageParams } from "@/helpers/server";

type Props = PageProps<"/[lang]"> & {};

export default async function Home({ params }: Props) {
  const { locale } = await getPageParams(params);

  return (
    <Wrapper className="w-full">
      <div className="grid gap-4">
        <h1 className="w-full uppercase font-bold text-sm md:text-2xl tracking-widest text-neutral-300">
          {Home_Titles["main"][locale]}
        </h1>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <Link href="/recipes">
            <Card as="figure" className="p-4 flex flex-col items-center gap-4">
              <img
                src="/images/horadric_cube.webp"
                alt="Horadric Cube"
                width={240}
                height={240}
                loading="lazy"
                className="inline-block size-40 md:size-60"
              />
              <figcaption className="text-sm md:text-base text-neutral-300 font-bold uppercase tracking-wider">
                Horadric Cube
              </figcaption>
            </Card>
          </Link>
          <Link href="/runewords">
            <Card as="figure" className="p-4 flex flex-col items-center gap-4">
              <img
                src="/images/horadric_runewords.webp"
                alt="Runewords"
                width={240}
                height={240}
                loading="lazy"
                className="inline-block size-40 md:size-60 object-cover"
              />
              <figcaption className="text-sm md:text-base text-neutral-300 font-bold uppercase tracking-wider">
                Runewords
              </figcaption>
            </Card>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
