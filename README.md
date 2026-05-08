![Diablo II Resurrected](public/images/d2r_row.jpg)

# D2R Guides

A bilingual (Spanish/English) companion reference app for **Diablo II: Resurrected**. Browse runewords and Horadric Cube recipes with powerful filtering and fuzzy search.

## 📦 Packages

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Fuse.js

## 📁 Folders

```
src/
├── app/
│   ├── [lang]/
│   │   ├── recipes/
│   │   └── runewords/
│   └── globals.css
├── components/
│   ├── ui/
│   └── ...
├── constants/
├── helpers/
├── hooks/
├── lib/
├── providers/
├── typings/
└── proxy.ts
```

## 🚀 Installation

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware will redirect to `/es` or `/en` based on the default locale (Spanish first).

## 📜 Scripts

```bash
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```
