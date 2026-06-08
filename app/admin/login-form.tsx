"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

const initial: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initial);

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
      <Glow className="-top-32 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 opacity-20" />
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          cev.studio
        </p>
        <h1 className="mt-2 text-xl font-semibold tracking-tight">
          Admin access
        </h1>
        <p className="mt-1 text-sm text-muted">
          Enter the passcode to view submissions.
        </p>

        <form action={action} className="mt-6 space-y-4">
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            error={state.error}
          />
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Checking…" : "Unlock"}
          </Button>
        </form>
      </div>
    </main>
  );
}
