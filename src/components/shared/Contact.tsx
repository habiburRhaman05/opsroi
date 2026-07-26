"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionLabel } from "../ui/SectionLabel";

const businessTypes = [
  "Marketing / Ad Agency",
  "Coaching & Consulting",
  "Creative / Design Studio",
  "Home Services",
  "Recruiting",
  "Tree Service",
  "Roofing",
  "HVAC",
  "Electrical",
  "Landscaping",
  "Restoration / Rebuild",
  "Pressure Washing",
  "General Contracting",
  "Other",
];

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  agency: z.string().min(1, "Business name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
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
      <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
            <span className="w-8 h-px bg-green"></span>
            <span className="text-green text-xs font-bold tracking-widest font-bebas uppercase">Message Sent</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-bebas text-navy">Thank you, {submitted.name}!</h2>
          <p className="mt-6 text-ink text-lg leading-relaxed mb-12">
            We&apos;ve received your message and will get back to you within one business day.
          </p>

          <div className="bg-white border border-line rounded-3xl p-8 sm:p-12 shadow-xl shadow-navy/5 max-w-xl mx-auto text-left relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green mb-6 mx-auto">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-6">We&apos;ll be in touch shortly</h3>
            
            <div className="bg-mist rounded-2xl p-6 text-ink mb-8">
               <p className="font-bold text-navy mb-1">{submitted.name}</p>
               <p className="text-sm mb-2">{submitted.agency} &middot; {submitted.email}</p>
               <p className="text-sm mb-4">{submitted.phone}</p>
               <p className="text-sm text-ink-soft italic border-l-2 border-green/30 pl-3">&ldquo;{submitted.message}&rdquo;</p>
            </div>
            
            <button type="button" onClick={() => { setSubmitted(null); reset(); }} className="w-full border-2 text-md border-line hover:border-navy text-navy font-bold rounded-xl py-3 transition-colors">
               Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  // --- Form view ---
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
            <SectionLabel className="justify-center">Contact With US</SectionLabel>
          </div>
          <h2 className="text-4xl sm:text-4xl font-bold uppercase tracking-tight font-bebas text-navy">Let&apos;s talk about your business.</h2>
          <p className="mt-6 text-ink text-lg leading-relaxed">
            Tell us a bit about your business and we&apos;ll get back to you
            within one business day &mdash; no niche is out of scope.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 border border-line overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="p-8 pb-12 sm:p-12 sm:pb-16 lg:w-3/5">
            <h3 className="text-2xl font-bold text-navy mb-8 font-bebas uppercase tracking-wide">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-navy">Full name</label>
                    <input type="text" id="name" placeholder="John Doe" {...register("name")} className={`bg-mist border rounded-xl px-4 py-3 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all ${errors.name ? 'border-red-500' : 'border-line'}`} />
                    {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>}
                 </div>
                 <div className="flex flex-col gap-2">
                    <label htmlFor="agency" className="text-sm font-semibold text-navy">Business name</label>
                    <input type="text" id="agency" placeholder="Acme Contractors" {...register("agency")} className={`bg-mist border rounded-xl px-4 py-3 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all ${errors.agency ? 'border-red-500' : 'border-line'}`} />
                    {errors.agency && <span className="text-red-500 text-xs font-medium">{errors.agency.message}</span>}
                 </div>
               </div>
               

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-navy">Email</label>
                    <input type="email" id="email" placeholder="john@acme.com" {...register("email")} className={`bg-mist border rounded-xl px-4 py-3 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all ${errors.email ? 'border-red-500' : 'border-line'}`} />
                    {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
                 </div>
                 <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-navy">Phone</label>
                    <input type="tel" id="phone" placeholder="(555) 123-4567" {...register("phone")} className={`bg-mist border rounded-xl px-4 py-3 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all ${errors.phone ? 'border-red-500' : 'border-line'}`} />
                    {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone.message}</span>}
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-navy">What are you looking to fix or set up?</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your current tool stack and bottlenecks..." {...register("message")} className={`bg-mist border rounded-xl px-4 py-3 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all resize-y ${errors.message ? 'border-red-500' : 'border-line'}`}></textarea>
                  {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message.message}</span>}
               </div>

               <button type="submit" disabled={submitting} className="w-full bg-green hover:bg-green-deep text-white font-bold text-lg font-bebas tracking-widest uppercase rounded-xl py-4 mt-4 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                 {submitting ? (
                   <>
                     <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.2"/><path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                     Sending...
                   </>
                 ) : "Send Message"}
               </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="bg-navy p-8 sm:p-12 lg:w-2/5 flex flex-col justify-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(125,194,67,0.15),transparent_60%)]"></div>
             {/* Watermark SVG */}
             <div 
               className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[200px] z-0" 
               style={{ transform: 'translate(20%, -20%)', opacity: 0.05 }}
             >
               <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
             </div>
             <div className="relative z-10 space-y-10">
               <div>
                 <h3 className="text-2xl font-bold font-bebas uppercase tracking-wide text-gold mb-4">Contact Information</h3>
                 <p className="text-white/80 leading-relaxed text-sm">Have a quick question? Reach out directly using the details below. We typically respond within hours.</p>
               </div>

               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-green">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>
                   </div>
                   <div>
                     <h4 className="font-bebas tracking-widest text-sm text-white/50 uppercase mb-1">Email</h4>
                     <p className="font-medium text-lg text-white">support@opsroi.com</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-green">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                   </div>
                   <div>
                     <h4 className="font-bebas tracking-widest text-sm text-white/50 uppercase mb-1">Phone</h4>
                     <p className="font-medium text-lg text-white">+19714490660</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-green">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/></svg>
                   </div>
                   <div>
                     <h4 className="font-bebas tracking-widest text-sm text-white/50 uppercase ">Location</h4>
                     <p className="font-medium text-lg leading-snug text-white"><br/>
                     7280 Boones Ferry Rd, Lake Oswego
                      </p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
