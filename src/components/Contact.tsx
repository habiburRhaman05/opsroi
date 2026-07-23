"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  agency: z.string().min(1, "Agency name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  clients: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState<ContactFormData | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      agency: "",
      email: "",
      phone: "",
      clients: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(data);
    setSubmitting(false);
  };

  // --- Success view ---
  if (submitted) {
    return (
      <section id="contact" className="section-alt">
        <div className="container">
          <div className="section-head center" style={{ margin: "0 auto 52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Message Sent
            </div>
            <h2>Thank you, {submitted.name}!</h2>
            <p>
              We&apos;ve received your message and will get back to you
              within one business day.
            </p>
          </div>

          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div
              className="contact-form-premium"
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(125,194,67,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "var(--green-deep)" }}
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 style={{ marginBottom: 20, color: "var(--navy)", fontSize: "1.4rem" }}>
                We&apos;ll be in touch shortly
              </h3>
              <div
                style={{
                  background: "var(--mist)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  textAlign: "left",
                  fontSize: "0.9rem",
                  color: "var(--ink)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                <strong style={{ color: "var(--navy)" }}>{submitted.name}</strong>
                <br />
                {submitted.agency} &middot; {submitted.email}
                <br />
                {submitted.phone}
                <br />
                <span style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  {submitted.clients === "marketing" && "Marketing / Ad Agency"}
                  {submitted.clients === "coaching" && "Coaching & Consulting"}
                  {submitted.clients === "creative" && "Creative / Design Studio"}
                  {submitted.clients === "home" && "Home Services"}
                  {submitted.clients === "recruiting" && "Recruiting"}
                  {submitted.clients === "other" && "Other"}
                </span>
                <br />
                <em style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  &ldquo;{submitted.message}&rdquo;
                </em>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(null);
                  reset();
                }}
                className="btn btn-ghost"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Form view ---
  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="section-head center" style={{ margin: "0 auto 52px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h2>Let&apos;s talk about your agency&apos;s ops.</h2>
          <p>
            Tell us a bit about your agency and we&apos;ll get back to you
            within one business day - no niche is out of scope.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-premium">
            <h3 style={{ marginBottom: "28px", color: "var(--navy)", fontSize: "1.6rem" }}>
              Send us a message
            </h3>
            <form className="premium-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="two-col">
                <div className="form-float">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  <label htmlFor="name">Full name</label>
                  {errors.name && (
                    <span className="form-error">{errors.name.message}</span>
                  )}
                </div>
                <div className="form-float">
                  <input
                    type="text"
                    id="agency"
                    placeholder=" "
                    {...register("agency")}
                    aria-invalid={errors.agency ? "true" : "false"}
                  />
                  <label htmlFor="agency">Agency name</label>
                  {errors.agency && (
                    <span className="form-error">{errors.agency.message}</span>
                  )}
                </div>
              </div>
              <div className="two-col">
                <div className="form-float">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <label htmlFor="email">Email</label>
                  {errors.email && (
                    <span className="form-error">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-float">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  <label htmlFor="phone">Phone</label>
                  {errors.phone && (
                    <span className="form-error">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="form-float select-float" style={{ position: "relative" }}>
                <select
                  id="clients"
                  {...register("clients")}
                  aria-invalid={errors.clients ? "true" : "false"}
                  style={{ appearance: "none", paddingRight: "2.5rem" }}
                >
                  <option value="" disabled hidden></option>
                  <option value="marketing">Marketing / Ad Agency</option>
                  <option value="coaching">Coaching &amp; Consulting</option>
                  <option value="creative">Creative / Design Studio</option>
                  <option value="home">Home Services</option>
                  <option value="recruiting">Recruiting</option>
                  <option value="other">Other - any niche welcome</option>
                </select>
                <label htmlFor="clients">What does your agency serve?</label>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "22px",
                    color: "var(--ink-soft)",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                {errors.clients && (
                  <span className="form-error">{errors.clients.message}</span>
                )}
              </div>
              <div className="form-float">
                <textarea
                  id="message"
                  rows={4}
                  placeholder=" "
                  data-lenis-prevent
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                <label htmlFor="message">What are you looking to fix or set up?</label>
                {errors.message && (
                  <span className="form-error">{errors.message.message}</span>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "1.05rem",
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-spin">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" opacity="0.25" />
                      <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-panel">
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@opsroi.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>(800) 555-0199</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>
                  Fully Remote
                  <br />
                  Austin, TX &amp; Global
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
