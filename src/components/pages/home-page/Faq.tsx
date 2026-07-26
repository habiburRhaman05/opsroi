'use client';
import { useState } from 'react';
import { SectionLabel } from '../../ui/SectionLabel';

const faqs = [
  {
    question: "Why would I pay to build it instead of you funding it yourselves?",
    answer: "Because ownership follows investment. If we funded it, we'd own it and you'd be an employee of our platform. You put in the build so you come out owning the asset and keeping the majority of every sale. It's the difference between renting a truck and owning the fleet.",
  },
  {
    question: "What stops you from cutting me out and selling it yourselves?",
    answer: "We can't sell it the way you can, that's the entire point. We don't have your name, your reputation, or your industry's trust. The platform is only worth what it becomes in your market, and it only becomes that with you selling it. Our incentive is to keep you winning, because our share depends on it. It's all put in writing.",
  },
  {
    question: "Isn't this just a competitor to Jobber, ServiceTitan, or ArborGold?",
    answer: "Those are generalist tools built by people who've never run your business. Your platform is built around how your industry actually operates, sold by someone the industry already trusts. You're not competing on features, you're competing on being one of their own. That's a moat software can't copy.",
  },
  {
    question: "How much time does this take from me?",
    answer: "We run the platform, the fulfillment, and the technical work. Your job is the two things only you can do: run your company on it as proof, and open doors in your industry. If you want to be hands-on in sales, there's room. If you want to lend your name and network, that works too. We'll define the split on the call.",
  },
  {
    question: "What if my industry already has a platform in it?",
    answer: "One founder per industry. If your trade's seat is still open, you can be the one who owns it. Once it's taken, it's taken, we don't put two founders in the same market against each other. That's why the call matters: we find out fast whether your seat is available.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="pt-24 pb-6 sm:pt-32 sm:pb-2 bg-white relative">
      <div className="container px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
            <SectionLabel className="justify-center">FAQ</SectionLabel>
          </div>
          <h2 className="text-4xl sm:text-4xl font-bold uppercase tracking-tight font-bebas text-navy">Questions agencies ask before switching.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`bg-mist border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-green shadow-md shadow-navy/5' : 'border-line hover:border-navy/30'}`}>
                <button onClick={() => toggle(i)} className="w-full text-left px-6 py-2 sm:px-8 sm:py-6 flex items-center justify-between gap-6 focus:outline-none">
                  <h3 className={`font-bold text-lg sm:text-xl transition-colors pr-4 ${isOpen ? 'text-green' : 'text-navy'}`}>{faq.question}</h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-green/10 text-green rotate-45' : 'bg-white border border-line text-navy'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 1v12M1 7h12"/>
                    </svg>
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 sm:px-8 sm:pb-8 text-ink leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
