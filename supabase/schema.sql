-- cev.studio — contact submissions
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security is ON with no policies: the anon/public key can neither
-- read nor write. All access goes through the server's service-role key,
-- which bypasses RLS. This keeps submissions private to the /admin view.
alter table public.submissions enable row level security;

create index if not exists submissions_created_at_idx
  on public.submissions (created_at desc);
