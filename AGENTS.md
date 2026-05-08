# AGENTS.md

This project uses:

- **Next.js 16**
- **React 19**
- **TypeScript (strict mode)**
- **Tailwind CSS v4**
- **shadcn/ui v4** with style `radix-vega`

The app is fully frontend-only. There is no database or backend service.

## Core Rules

### Next.js 16

- `params` and `searchParams` in `page.tsx` / `layout.tsx` are **Promises**
- Always `await` them before usage

Example:

```tsx
export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  return <div>{lang}</div>;
}
```

## Commands

```bash
pnpm dev         # start development server
pnpm build       # production build
pnpm lint        # run eslint
```

There is currently:

- no test framework
- no test scripts in `package.json`

Do not assume Jest, Vitest, Playwright, or Cypress exist.

## Tooling

### UI

- `shadcn/ui` v4
- style preset: `radix-vega`
- Radix primitives are preferred for accessibility

### Styling

- Tailwind CSS v4
- Configured through `@tailwindcss/postcss`
- Prefer utility-first styling
- Avoid custom CSS unless truly necessary

### TypeScript

- Strict mode enabled
- Avoid `any`
- Prefer explicit typing and inferred literals
- Prefer `satisfies` over type assertions when possible

### Linting

ESLint configuration:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

### Formatting

- VSCode uses Prettier formatting
- No `.prettierrc` exists
- Follow existing formatting conventions

### Imports

Path alias:

```ts
@/* -> ./src/*
```

Always prefer alias imports over deep relative paths.

## Architecture

### Internationalization (i18n)

i18n is middleware-driven through:

```txt
src/proxy.ts
```

Supported locales:

```ts
["es", "en"];
```

Rules:

- Spanish (`es`) is the default locale
- Routes follow `/[lang]/...`
- All user-facing strings must support both locales
- Prefer:

```ts
Record<Locale, string>;
```

Example:

```ts
title: {
  es: "Hola",
  en: "Hello",
}
```

Never hardcode a single-language UI string unless explicitly temporary.

### State Management

All shared state providers and contexts must use:

```ts
use-context-selector
```

Do NOT use plain React `useContext` for shared application state.

Example:

```ts
import { createContext, useContextSelector } from "use-context-selector";
```

### Device Detection

Device detection is handled through a custom:

```txt
DeviceProvider
```

implemented with:

```ts
useSyncExternalStore;
```

Do not replace this with window resize listeners inside components.

### Server Actions

Server utilities live in:

```txt
src/helpers/server.ts
```

These functions use:

```ts
"use server";
```

and are responsible for unwrapping async route params.

### Next.js Types

Next.js auto-generates route-aware types like:

```ts
PageProps<"/path">;
```

Prefer these instead of manually defining page prop types.

## Code Style

### React

- Prefer hooks over class components
- Avoid unnecessary `useEffect`
- Prefer derived state over duplicated state

### Tailwind

- Keep class lists readable
- Use utilities directly instead of premature abstraction
- Use `clsx`/`cn()` patterns consistently

### Components

- Prefer small composable components
- Keep business logic outside UI when possible
- Prefer server components unless client interactivity is needed
- Add `"use client"` only when required

### Accessibility

- Prefer semantic HTML
- Ensure keyboard accessibility
- Preserve Radix accessibility behavior

### TypeScript Imports

- Use `import type` for type-only imports
- Avoid mixing runtime imports with type imports when unnecessary
- Keep type imports explicit for better readability and tree-shaking

Example:

```ts
import type { ReactNode } from "react";
import type { Locale } from "@/types/common";
```
