import { z } from "zod";
import { emailField, phoneField, requiredString } from "./shared";

export const TEAM_SIZES = [
  "Just me",
  "2 to 5",
  "6 to 20",
  "21 to 50",
  "50+",
] as const;

export const bookDemoSchema = z.object({
  name: requiredString("Full name", 2),
  company: requiredString("Business name"),
  email: emailField(),
  phone: phoneField({ required: true }),
  businessType: requiredString("Type of business", 2),
  teamSize: z.enum(TEAM_SIZES, {
    error: "Please select your team size",
  }),
  message: requiredString("Message", 10),
});

export type BookDemoFormData = z.infer<typeof bookDemoSchema>;

export const BOOK_DEMO_WEBHOOK_URL =
  "https://server.tainc.org/api/v1/webhooks/ingest/77b9af6d1bc2dc0e851b6ff15ea34b2f793bd103609de6c5";
