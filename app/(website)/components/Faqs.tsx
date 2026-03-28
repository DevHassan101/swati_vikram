"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We provide premium companion services across Noida and Ghaziabad, including all major sectors and nearby areas. For outstation or hotel visits, please contact us directly via WhatsApp or call for availability.",
  },
  {
    question: "How do I book a companion?",
    answer:
      "Booking is simple — browse our models, choose your preferred companion, then reach out via WhatsApp or phone call. Our team will confirm availability and arrange everything discreetly for you.",
  },
  {
    question: "Is your service 100% discreet and private?",
    answer:
      "Absolutely. Your privacy is our top priority. All bookings, conversations, and personal details are handled with complete confidentiality. We never share client information with any third party under any circumstances.",
  },
  {
    question: "Are all profiles verified and genuine?",
    answer:
      "Yes. Every profile on SwatiKaur is personally verified by our team. The photos are real and up to date. What you see is exactly what you get — no fake profiles, no surprises.",
  },
  {
    question: "What are the available service rates?",
    answer:
      "Rates vary depending on the companion, duration, and type of service. Please visit our Rates page or contact us directly on WhatsApp for a detailed and transparent price list tailored to your requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, UPI, and major digital payment methods. Payment details are discussed during the booking confirmation. A partial advance may be required for certain bookings.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative pt-16 pb-20 px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">

        {/* ── Header ── */}
        <div className="flex flex-col justify-center items-center mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-white/60 rounded-full" />
            FAQ
            <span className="w-8 h-[2px] bg-white/60 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Here&apos;s Your Top{" "}
            <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent mb-4" />
          <p className="text-white/70 text-base max-w-lg mx-auto leading-relaxed">
            Everything you need to know before making a booking. Can&apos;t find your answer? Reach us on WhatsApp anytime.
          </p>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* ── LEFT BOX ── */}
          <div className="relative w-full lg:basis-[36%] lg:shrink-0 overflow-hidden
            bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900
            border border-pink-400/30 rounded-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_rgba(236,72,153,0.12)]
            hover:border-pink-400/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_60px_rgba(236,72,153,0.2)]
            transition-all duration-500
            px-8 py-10">

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(244,114,182,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }} />

            {/* Glow blob */}
            <div className="absolute -top-16 -right-8 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

            <div className="relative z-10 flex flex-col gap-8">

              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5
                bg-pink-500/15 border border-pink-400/30 rounded-full w-fit">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-pink-300 text-xs font-semibold uppercase tracking-wider">FAQ&apos;s</span>
              </span>

              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                <span className="text-white/95">Your Questions,</span>
                <br />
                <span className="bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">
                  Honestly
                </span>
                <br />
                <span className="text-white/95">Answered.</span>
              </h3>

              {/* CTA Button */}
              <Link
                href="https://wa.me/923402690068"
                target="_blank"
                className="inline-flex items-center gap-3 w-fit
                  bg-gradient-to-r from-pink-500 to-rose-500
                  text-white font-semibold text-sm px-6 py-3 rounded-full
                  shadow-[0_4px_20px_rgba(236,72,153,0.4)]
                  hover:shadow-[0_6px_28px_rgba(236,72,153,0.55)]
                  hover:scale-105 transition-all duration-300"
              >
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </span>
                Chat on WhatsApp
              </Link>

            </div>

            {/* Decorative question mark */}
            <div className="absolute bottom-4 right-5 text-[120px] font-black leading-none
              text-pink-400/10 select-none pointer-events-none">
              ?
            </div>

          </div>

          {/* ── RIGHT BOX — Accordion ── */}
          <div className="w-full lg:flex-1 flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer
                    ${isOpen
                      ? "border-pink-300/40 bg-white/8 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
                      : "border-transparent bg-gradient-to-r from-pink-500 to-rose-500 shadow-[0_3px_12px_rgba(236,72,153,0.35)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.5)]"
                    }`}
                  onClick={() => toggle(i)}
                >
                  {/* Question row */}
                  <div className="flex items-center justify-between gap-4 px-6 py-5 select-none">
                    <h3 className={`text-sm md:text-base font-bold transition-colors duration-300 ${isOpen ? "text-pink-200" : "text-white"}`}>
                      {faq.question}
                    </h3>

                    {/* +/- icon */}
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300
                      ${isOpen
                        ? "bg-pink-400/20 border-pink-300/40"
                        : "bg-white/20 border-white/30"
                      }`}>
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${isOpen ? "text-pink-300 rotate-45" : "text-white rotate-0"}`}
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>

                  {/* Answer */}
                  <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.35s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-full h-px bg-gradient-to-r from-pink-400/50 to-rose-400/50 rounded-full mb-4" />
                        <p className="text-white/80 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
