import type { Metadata } from "next";
import { isAuthed, logout } from "./actions";
import { LoginForm } from "./login-form";
import { getSupabaseAdmin, type Submission } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";

export const metadata: Metadata = {
  title: "Admin — cev.studio",
  robots: { index: false, follow: false },
};

// Always render per-request: read the live session cookie and submissions.
export const dynamic = "force-dynamic";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

async function getSubmissions(): Promise<Submission[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Submission[];
}

export default async function AdminPage() {
  if (!(await isAuthed())) {
    return <LoginForm />;
  }

  const submissions = await getSubmissions();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <Wordmark />
          <h1 className="text-sm text-muted">
            Submissions{" "}
            <span className="font-mono text-faint">({submissions.length})</span>
          </h1>
        </div>
        <form action={logout}>
          <Button variant="ghost" type="submit">
            Sign out
          </Button>
        </form>
      </header>

      {submissions.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border p-16 text-center text-muted">
          No submissions yet.
        </div>
      ) : (
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface font-mono text-xs uppercase tracking-[0.14em] text-faint">
                <th className="px-5 py-3 font-medium">When</th>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr
                  key={s.id}
                  className="border-t border-border align-top transition-colors hover:bg-surface/60"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-muted">
                    {dateFmt.format(new Date(s.created_at))}
                  </td>
                  <td className="px-5 py-4 font-medium text-fg">{s.name}</td>
                  <td className="px-5 py-4">
                    <a
                      href={`mailto:${s.email}`}
                      className="text-muted transition-colors hover:text-aurora-2"
                    >
                      {s.email}
                    </a>
                  </td>
                  <td className="max-w-md px-5 py-4 text-muted">
                    <p className="whitespace-pre-wrap">{s.message}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
