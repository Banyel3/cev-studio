"use server";

import { ContactSchema, type ContactField } from "@/lib/schema";
import { getSupabaseAdmin } from "@/lib/supabase";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
    };

/**
 * Handles the contact form submission: honeypot check → zod validation →
 * insert into Supabase via the service-role client. Used with useActionState.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field. Pretend success so
  // bots don't learn they were caught.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success" };
  }

  const parsed = ContactSchema.safeParse({
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "")
      .trim()
      .toLowerCase(),
    message: String(formData.get("message") ?? "").trim(),
  });

  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key as ContactField] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("submissions").insert(parsed.data);
    if (error) throw error;
    return { status: "success" };
  } catch (err) {
    console.error("Contact submission failed:", err);
    return {
      status: "error",
      message: "Something went wrong on our end. Try again, or email us.",
    };
  }
}
