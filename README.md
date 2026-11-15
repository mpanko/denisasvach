# Denisa Svach Portfolio

A Next.js-based portfolio website for visual artist Denisa Svach, live at https://denisasvach.com.

## Key Features

- Responsive design using Tailwind CSS
- Dynamic project showcase
- Detailed project pages
- Artist biography with collapsible sections
- Contact page

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript 6
- Tailwind CSS 4 (CSS-first config in `app/globals.css`) + `@tailwindcss/typography`
- ESLint 9 (flat config in `eslint.config.mjs`)
- Decap CMS for content editing (`/admin`)

Requires Node.js 20.9 or newer (CI uses Node 24).

## Project Structure

- `app/`: Next.js app router pages and components
- `app/components/`: Reusable React components
- `content/`: Markdown content (projects, bio, contact), edited through the CMS
- `public/images/`: Images (CMS media folder)
- `public/admin/`: Decap CMS config

## Development

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Lint and type-check: `npm run lint` and `npm run typecheck`
4. Build for production: `npm run build` (writes the static site to `out/`)

## Deployment

- Every push to `main` (including CMS edits) runs `.github/workflows/nextjs.yml`,
  which builds the static export and deploys it to GitHub Pages on the custom domain.
- `next.config.ts` sets `output: 'export'` and unoptimized images; no basePath is
  needed because the site is served from the domain root.
