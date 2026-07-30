import { z } from "zod";

const US_PHONE_DIGITS = 10;
const INVALID_US_PHONE_MSG = "Please enter a valid 10-digit US phone number";

export function extractUSDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidUSPhone(value: string): boolean {
  const digits = extractUSDigits(value);
  if (digits.length === US_PHONE_DIGITS) return true;
  if (digits.length === US_PHONE_DIGITS + 1 && digits.startsWith("1")) return true;
  return false;
}

export function formatUSPhone(input: string): string {
  let digits = extractUSDigits(input);
  if (digits.length === US_PHONE_DIGITS + 1 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, US_PHONE_DIGITS);
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

export function toE164US(input: string): string {
  const digits = extractUSDigits(input);
  const normalized =
    digits.length === US_PHONE_DIGITS + 1 && digits.startsWith("1")
      ? digits
      : `1${digits}`;
  return `+${normalized}`;
}

// Normalize undefined/null form values to empty strings so Zod's friendly
// .min() / .email() messages fire instead of the raw "expected string,
// received undefined" default.
const toStringInput = (val: unknown) => (typeof val === "string" ? val : "");

export function requiredString(label: string, min = 1) {
  const schema = z
    .string()
    .trim()
    .min(1, `${label} is required`);
  return z.preprocess(
    toStringInput,
    min > 1
      ? schema.min(min, `${label} must be at least ${min} characters`)
      : schema,
  );
}

export function emailField() {
  return z.preprocess(
    toStringInput,
    z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
  );
}

const requiredPhone = () =>
  z.preprocess(
    toStringInput,
    z
      .string()
      .trim()
      .min(1, "Phone number is required")
      .refine(isValidUSPhone, INVALID_US_PHONE_MSG),
  );

const optionalPhone = () =>
  z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || isValidUSPhone(val), {
      message: INVALID_US_PHONE_MSG,
    });

export function phoneField(options: { required: true }): ReturnType<typeof requiredPhone>;
export function phoneField(options?: { required?: false }): ReturnType<typeof optionalPhone>;
export function phoneField(options: { required?: boolean } = {}) {
  return options.required ? requiredPhone() : optionalPhone();
}
