# cev.studio

A one-page landing site for **cev.studio**, a digital studio (Web Development,
Mobile Apps, Brand Identity, 3D Modelling). The contact form _is_ the hero —
submissions persist to Supabase and are viewable at a password-gated `/admin`.

Design is modeled on a dark, height.app-style aesthetic: near-black canvas, a
luminous magenta→orange→violet "aurora" gradient, Geist type, and restrained
scroll motion. No stock assets — the logo is a typographic wordmark and the
copy is written from scratch.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **Supabase** (`@supabase/supabase-js`) for persistence
- **zod** for validation, **motion** (Framer) for scroll reveals
- **Geist** / **Geist Mono** via `next/font`

## Features

- Hero with the contact form front and centre (name / email / message)
- Server Action + `useActionState`: pending, per-field error, and success states
- Honeypot + zod validation; spam-resistant
- Submissions stored in Supabase with Row Level Security on (server-only access)
- `/admin` — passcode-gated, newest-first submissions table
- Generated OpenGraph image, custom 404, `prefers-reduced-motion` support

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable                    | Where                             | Purpose                                    |
| --------------------------- | --------------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`  | Supabase → Project Settings → API | Project URL                                |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API | Service-role key — **server only, secret** |
| `ADMIN_PASSWORD`            | Your choice                       | Passcode that unlocks `/admin`             |

The service-role key is only ever read in `lib/supabase.ts` (server). It is never
exposed to the client.

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and run it. This creates the
   `submissions` table with RLS enabled (no public policies — only the
   service-role key can read/write).
3. Copy the **Project URL** and **service_role** key into `.env.local`.

## Admin

Visit `/admin`, enter `ADMIN_PASSWORD`. The session is an httpOnly cookie holding
`sha256(passcode)`, valid for 8 hours. "Sign out" clears it.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Add the three environment variables above under **Settings → Environment
   Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

## Scripts

| Script           | Does                       |
| ---------------- | -------------------------- |
| `npm run dev`    | Dev server                 |
| `npm run build`  | Production build           |
| `npm run start`  | Serve the production build |
| `npm run lint`   | ESLint                     |
| `npm run format` | Prettier write             |

## Project structure

```
app/
  layout.tsx            fonts, metadata, OG
  page.tsx              Nav · Hero · Services · Approach · Footer
  globals.css           design tokens + aurora utilities
  actions.ts            submitContact server action
  opengraph-image.tsx   generated OG image
  not-found.tsx         custom 404
  admin/                password gate + submissions table
components/             sections + ui/ atoms (Wordmark, Glow, Button, Field, Reveal…)
lib/                    schema (zod), supabase (server client), content, cn
supabase/schema.sql     table + RLS
```
