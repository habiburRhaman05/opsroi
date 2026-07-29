import { z } from "zod";
import { emailField, phoneField, requiredString } from "./shared";

export const contactSchema = z.object({
  name: requiredString("Name", 2),
  company: requiredString("Business name"),
  email: emailField(),
  phone: phoneField({ required: true }),
  message: requiredString("Message", 10),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const CONTACT_WEBHOOK_URL =
  "https://server.tainc.org/api/v1/webhooks/ingest/d494c47705952e6ae976361edfce0df71e2ca6bc7b53b16b";
