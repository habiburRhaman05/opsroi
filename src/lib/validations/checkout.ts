import { z } from "zod";
import { emailField, phoneField, requiredString } from "./shared";

export const checkoutSchema = z.object({
  businessName: requiredString("Business name", 2),
  workEmail: emailField(),
  phone: phoneField({ required: true }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
