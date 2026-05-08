---
name: d2-recipes-edit
description: Update Spanish translations for recipe fields in src/constants/recipes.ts
---

# Recipes Edit Skill

Use this skill when the user wants to update the Spanish (`es`) translations of recipe fields in `src/constants/recipes.ts`.

## Workflow

1. Read the file `src/constants/recipes.ts`
2. Ask the user:
   - Which constant to edit (e.g., `Quest`, `Sockets`, `Jewelry`, `Repair`, `Reroll`)
   - Which field to update (e.g., `title`, `result[].name`, `ingredients[].name`)
3. Display all current English (`en`) values for that field in the specified constant
4. For each item, show the English value and ask for the Spanish (`es`) translation
5. Apply edits sequentially using the Edit tool
6. Confirm when all items are done

## Example Prompt

"Update the `title` field in `Reroll` constant"

## Constants Available

Automatically detect all exported arrays from `src/constants/recipes.ts` (e.g., look for `export const Name: Recipe[]` patterns).

## Fields That Support Updates

- `title`
- `result[].name`
- `ingredients[].name`
