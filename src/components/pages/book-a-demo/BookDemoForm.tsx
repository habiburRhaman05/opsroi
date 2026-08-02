"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import FormField from "@/src/components/ui/FormField";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import PhoneInput from "@/src/components/ui/PhoneInput";
import Select from "@/src/components/ui/Select";
import { useForm } from "@/src/lib/useForm";
import {
  BOOK_DEMO_WEBHOOK_URL,
  TEAM_SIZES,
  bookDemoSchema,
  type BookDemoFormData,
} from "@/src/lib/validations/bookDemo";
import { toE164US } from "@/src/lib/validations/shared";

export default function BookDemoForm() {
  const router = useRouter();

  const {
    isSubmitting,
    submitError,
    handleSubmit,
    handleChange,
    handleBlur,
    getFieldError,
    hasError,
  } = useForm<BookDemoFormData>({
    schema: bookDemoSchema,
    onSubmit: async (data) => {
      const payload = {
        name: data.name,
        email: data.email,
        phone: toE164US(data.phone),
        company: data.company,
        message: data.message,
        type_of_business: data.businessType,
        team_size: data.teamSize,
      };
      const res = await fetch(BOOK_DEMO_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("We couldn't send your request. Please try again.");
      }
      router.push("/welcome");
    },
  });

  return (
    <div className="rounded-3xl border border-line bg-white shadow-xl overflow-hidden">
      <div className="p-8 pb-10 sm:p-12">
        <div className="mb-8 flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green-deep">
            <Sparkles className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy font-display uppercase tracking-tight">
              Tell Us About Your Business
            </h3>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Every business runs a little differently, so pricing does too.
              Share a few details and we&apos;ll come back with a plan that
              actually fits.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              label="Full Name"
              htmlFor="name"
              required
              error={getFieldError("name")}
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                autoComplete="name"
                error={hasError("name")}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>

            <FormField
              label="Business Name"
              htmlFor="company"
              required
              error={getFieldError("company")}
            >
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Contractors"
                autoComplete="organization"
                error={hasError("company")}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              label="Email"
              htmlFor="email"
              required
              error={getFieldError("email")}
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@acme.com"
                autoComplete="email"
                error={hasError("email")}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>

            <FormField
              label="Phone"
              htmlFor="phone"
              required
              error={getFieldError("phone")}
            >
              <PhoneInput
                id="phone"
                name="phone"
                error={hasError("phone")}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              label="Type Of Business"
              htmlFor="businessType"
              required
              error={getFieldError("businessType")}
            >
              <Input
                id="businessType"
                name="businessType"
                type="text"
                placeholder="e.g. Roofing, Landscaping"
                error={hasError("businessType")}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>

            <FormField
              label="Team Size"
              htmlFor="teamSize"
              required
              error={getFieldError("teamSize")}
            >
              <Select
                id="teamSize"
                name="teamSize"
                defaultValue=""
                error={hasError("teamSize")}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  Select team size
                </option>
                {TEAM_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField
            label="What Are You Looking To Solve?"
            htmlFor="message"
            required
            error={getFieldError("message")}
          >
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your current stack, bottlenecks, and what a successful outcome looks like..."
              error={hasError("message")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormField>

          {submitError && (
            <p className="text-red-500 text-sm font-semibold">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-green hover:bg-green-deep text-navy-deep font-bold text-base font-display tracking-[0.14em] uppercase rounded-xl py-4 mt-2 transition-all shadow-[0_0_25px_rgba(125,194,67,0.35)] hover:shadow-[0_0_40px_rgba(125,194,67,0.55)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    opacity="0.2"
                  />
                  <path
                    d="M12 2a10 10 0 019.95 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Request My Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="mt-2 text-center text-xs text-ink-soft">
            No credit card. No long contracts. Usually a reply within hours.
          </p>
        </form>
      </div>
    </div>
  );
}
