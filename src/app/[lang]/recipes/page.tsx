import { nanoid } from "nanoid";

import { Wrapper } from "@/components/wrapper";
import { RecipeCard } from "@/components/recipe-card";

import { Recipes } from "@/constants/recipes";

import { getPageParams } from "@/helpers/server";

type Props = PageProps<"/[lang]/recipes"> & {};

export default async function RecipesPage({ params }: Props) {
  const { locale } = await getPageParams(params);

  return (
    <Wrapper>
      <h1 className="pb-4 md:pb-8 w-full text-center uppercase font-bold text-base md:text-2xl tracking-widest text-neutral-400">
        Horadric Cube
      </h1>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {Recipes.map((recipe) => (
          <RecipeCard key={nanoid()} locale={locale} recipe={recipe} />
        ))}
      </div>
    </Wrapper>
  );
}
