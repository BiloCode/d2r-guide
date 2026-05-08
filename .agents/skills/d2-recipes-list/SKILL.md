---
name: d2-recipes-list
description: Display all recipes from src/constants/recipes.ts in a table format showing title.es, ingredients.key, and result.es
---

# Recipes List Skill

Use this skill when the user wants to see all recipes in a formatted table.

## Workflow

1. Read the file `src/constants/recipes.ts`
2. Detect all exported recipe arrays from the file by reading `src/constants/recipes.ts` (look for `export const Name: Recipe[]` patterns)
3. For each recipe, get:
   - `title.es` - the Spanish title
   - `ingredients[].key` - format each ingredient as "x{quantity} {key}" and join with ", "
   - `result[0].name.es` - the Spanish result name
4. Display the data in a markdown table with columns: `#`, `title.es`, `ingredients.key`, `result.es`
5. Detect and group by category dynamically from the exported array names found in step 2 (e.g., if `export const Quest: Recipe[]` exists, use "Quest" as category header)

