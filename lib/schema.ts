import { z } from "zod";

/** Validation for a contact submission. Inputs are trimmed before parsing. */
export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, "Your name is required")
    .max(100, "That name is a little long"),
  email: z.email("Enter a valid email").max(200, "That email is too long"),
  message: z
    .string()
    .min(10, "Tell us a bit more — at least 10 characters")
    .max(2000, "Please keep it under 2000 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
export type ContactField = keyof ContactInput;
