"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import FormField from "../ui/FormField";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import PhoneInput from "../ui/PhoneInput";
import { useForm } from "@/src/lib/useForm";
import {
  contactSchema,
  type ContactFormData,
  CONTACT_WEBHOOK_URL,
} from "@/src/lib/validations/contact";
import { toE164US } from "@/src/lib/validations/shared";

export default function Contact() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const {
    isSubmitted,
    isSubmitting,
    submitError,
    handleSubmit,
    handleChange,
    handleBlur,
    getFieldError,
    hasError,
  } = useForm<ContactFormData>({
    schema: contactSchema,
    onSubmit: async (data) => {
      const payload = {
        name: data.name,
        email: data.email,
        phone: toE164US(data.phone),
        company: data.company,
        message: data.message,
      };
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("We couldn't send your message. Please try again.");
      }
      setSubmittedName(data.name);
    },
  });

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-green" />
            <span className="text-green text-xs font-bold tracking-widest font-display uppercase">
              Message Sent
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-display text-navy">
            Thank You{submittedName ? `, ${submittedName}` : ""}!
          </h2>
          <p className="mt-6 text-ink text-lg leading-relaxed mb-12">
            We&apos;ve received your message and will get back to you within one
            business day.
          </p>

          <div className="bg-white border border-line rounded-3xl p-8 sm:p-12 shadow-xl shadow-navy/5 max-w-xl mx-auto text-left relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green mb-6 mx-auto">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-6">
              We&apos;ll Be In Touch Shortly
            </h3>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full border-2 text-md border-line hover:border-navy text-navy font-bold rounded-xl py-3 transition-colors uppercase tracking-[0.14em] font-display"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
            <SectionLabel className="justify-center">Contact Us</SectionLabel>
          </div>
          <h2 className="text-4xl sm:text-4xl font-bold uppercase tracking-tight font-display text-navy">
            Let&apos;s Talk About Your Business.
          </h2>
          <p className="mt-6 text-ink text-lg leading-relaxed">
            Tell us a bit about your business and we&apos;ll get back to you
            within one business day. No niche is out of scope.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 border border-line overflow-hidden flex flex-col lg:flex-row">
          {/* Form side */}
          <div className="p-8 pb-12 sm:p-12 sm:pb-16 lg:w-3/5">
            <h3 className="text-2xl font-bold text-navy mb-8 font-display uppercase tracking-wide">
              Send Us A Message
            </h3>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
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
                    placeholder="John Doe"
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
                    placeholder="john@acme.com"
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

              <FormField
                label="What Are You Looking To Fix Or Set Up?"
                htmlFor="message"
                required
                error={getFieldError("message")}
              >
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your current tool stack and bottlenecks..."
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
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info side - dark, glowing, matching site language */}
          <div className="relative overflow-hidden bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-8 sm:p-12 lg:w-2/5 text-white ring-1 ring-green/20">
            {/* Ambient animated glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green/25 blur-3xl animate-opsroi-glow"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-green/12 blur-3xl animate-opsroi-glow-slow"
            />
            {/* Top accent bar */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green/60 to-transparent"
            />
            {/* Watermark - subtler */}
            <div
              className="pointer-events-none absolute top-0 right-0 w-40 md:w-56 opacity-[0.04]"
              style={{ transform: "translate(20%, -10%)" }}
              aria-hidden="true"
            >
              <img src="/watermark.svg" alt="" className="w-full h-auto" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Contact Info
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white leading-tight mb-3">
                  Reach Us Directly.
                </h3>
                <p className="text-white/70 leading-relaxed text-[14px]">
                  Have a quick question? Reach out using the details below.
                </p>
              </div>

              {/* Contact chips */}
              <div className="space-y-3">
                <a
                  href="mailto:support@opsroi.com"
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-green/40 hover:bg-white/8 transition-all"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/15 border border-green/30 text-green group-hover:bg-green/25 transition-colors">
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display tracking-[0.16em] text-[10px] text-white/50 uppercase mb-1">
                      Email
                    </h4>
                    <p className="font-bold text-[15px] text-white group-hover:text-green transition-colors truncate">
                      support@opsroi.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+19714490660"
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-green/40 hover:bg-white/8 transition-all"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/15 border border-green/30 text-green group-hover:bg-green/25 transition-colors">
                    <Phone className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display tracking-[0.16em] text-[10px] text-white/50 uppercase mb-1">
                      Phone
                    </h4>
                    <p className="font-bold text-[15px] text-white group-hover:text-green transition-colors">
                      +1 (971) 449-0660
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/15 border border-green/30 text-green">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="font-display tracking-[0.16em] text-[10px] text-white/50 uppercase mb-1">
                      Location
                    </h4>
                    <p className="font-bold text-[14px] text-white leading-snug">
                      17280 Boones Ferry Rd
                      <br />
                      Lake Oswego, OR 97035
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time chip */}
              <div className="mt-auto pt-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-3.5 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-75" />
                    <span className="relative rounded-full bg-green h-2 w-2" />
                  </span>
                  <Clock className="h-3.5 w-3.5 text-green" strokeWidth={2.2} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 font-display">
                    Typically responds within hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
