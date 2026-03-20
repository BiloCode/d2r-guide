import { Home_Options, Home_Titles } from "@/constants/information";

import { Wrapper } from "@/components/wrapper";

import { getPageParams } from "@/helpers/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = PageProps<"/[lang]"> & {};

export default async function Home({ params }: Props) {
  const { locale } = await getPageParams(params);

  return (
    <Wrapper className="w-full min-h-dvh">
      <div className="grid gap-4">
        <h1 className="text-[16px] md:text-2xl text-neutral-400 font-bold">
          {Home_Titles["main"][locale]}
        </h1>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-2">
          <Link href={`/${locale}/runewords`} className="w-full outline-none">
            <Button className="w-full h-12" variant="secondary">
              {Home_Options["links"]["runewords"][locale]}
            </Button>
          </Link>
          <Button className="w-full h-12" variant="secondary" disabled>
            {Home_Options["links"]["recipes"][locale]}
          </Button>
          <Button className="w-full h-12" variant="secondary" disabled>
            {Home_Options["links"]["dlc"][locale]}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
