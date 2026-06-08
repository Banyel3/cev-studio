"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash } from "node:crypto";

const COOKIE = "admin_session";

/** Cookie token = sha256(password), so plaintext never lands in the cookie. */
function token(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export type LoginState = { error?: string };

/** True when the request carries a valid admin session cookie. */
export async function isAuthed(): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const store = await cookies();
  return store.get(COOKIE)?.value === token(expected);
}

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return { error: "Admin password is not configured on the server." };
  }
  if (password !== expected) {
    return { error: "Incorrect password." };
  }

  const store = await cookies();
  store.set(COOKIE, token(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  redirect("/admin");
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
  redirect("/admin");
}
