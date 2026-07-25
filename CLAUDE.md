# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Next.js, Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Architecture

This is a **single-page** Next.js 16 (App Router) portfolio site — one route (`app/page.tsx`), no dynamic pages, no API routes, no data fetching. `page.tsx` simply composes seven presentational section components in a fixed order:

```
Header -> Banner -> Experience -> About -> Credentials -> Projects -> Footer
```

Each section is a self-contained component under `app/components/` with its own hardcoded content array (see `Projects.tsx`'s `featuredProjects` and `Credentials.tsx`'s `credentialGroups`) — there is no CMS, no markdown loader, and no shared content/data layer. Copy changes are made by editing the component file directly, not a config or JSON file.

`Banner.tsx` and `Header.tsx` are the only client components (`"use client"`) — `Banner` runs a typewriter effect that cycles through the two-item `texts` array via `setTimeout`-driven state; `Header` holds the mobile-nav open/closed state. Everything else renders as a server component.

### Styling

- Tailwind v4 (CSS-first config, no `tailwind.config.js`) — theme tokens are defined in `app/globals.css` via `:root` custom properties and re-exposed through `@theme inline` (e.g. `--background`, `--foreground`, `--accent`, `--accent-warm`, `--surface`, `--border`). Use the corresponding Tailwind utility classes (`bg-background`, `text-accent`, etc.) rather than hardcoding hex values.
- The palette is an intentional dark, muted "developer japandi" direction — avoid reintroducing purple/violet tones.
- Font is Poppins loaded via `next/font/google` in `app/layout.tsx`, exposed as the `--font-poppins` variable and wired to `--font-sans` in `globals.css`.

### Assets

Images referenced by components live under `public/assets`, `public/cards`, `public/credentials`, and `public/projects`. When replacing or removing an image, grep the component files for the exact path string — there's no central asset manifest.

### Content source of truth

`Personal-Skills.md` contains the canonical copy (hero tagline, project descriptions, tech stack, contact links) that the components were populated from. `spec.md` documents the specific rebrand requirements (personal identity, palette, section-by-section acceptance criteria) this codebase was built to satisfy — check it before making further identity/branding-related content changes, since it encodes constraints (e.g. exact rotation strings, exact contact icons, banned legacy strings) that aren't obvious from the code alone.

### Metadata/SEO

`app/layout.tsx` centralizes all `<head>` metadata (title, OpenGraph, Twitter card, robots) via the Next.js `Metadata` API — update it there, not in individual pages.
