import { Card } from "@/components/card";
import { Badge } from "@/components/ui/badge";

import type { Locale } from "@/typings/locale";
import type { Recipe } from "@/typings/recipe";

type Props = {
  locale: Locale;
  recipe: Recipe;
};

export function RecipeCard({ locale, recipe }: Props) {
  return (
    <Card hover="off" className="w-full flex flex-col gap-8 p-4">
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-1 flex-wrap">
          {recipe.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h2 className="text-gray-200 text-sm md:text-base font-medium">
          {recipe.title[locale]}
        </h2>

        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient) => (
            <li
              key={ingredient.key}
              className="text-sm md:text-base text-gray-300"
            >
              {ingredient.quantity}x {ingredient.name[locale]}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-end">
        <span className="text-gray-400 text-xs md:text-sm">
          &rarr; {recipe.result[0].name[locale]}
        </span>
      </div>
    </Card>
  );
}
