"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="mt-6 rounded-xl border border-border bg-bg/40 p-6 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full aurora-fill text-white">
          ✓
        </div>
        <p className="mt-4 font-medium text-fg">Got it.</p>
        <p className="mt-1 text-sm text-muted">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;

  return (
    <form action={action} className="mt-6 space-y-4" noValidate>
      {/* Honeypot — hidden from users, catches bots */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field
        label="Name"
        name="name"
        placeholder="Ada Lovelace"
        autoComplete="name"
        required
        error={errors?.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="ada@studio.com"
        autoComplete="email"
        required
        error={errors?.email}
      />
      <Field
        label="Message"
        name="message"
        multiline
        placeholder="A web app for…"
        required
        error={errors?.message}
      />

      {state.status === "error" && !state.fieldErrors ? (
        <p className="text-sm text-aurora-1" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Sending…" : "Send message →"}
      </Button>
    </form>
  );
}
