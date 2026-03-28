"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Deepak R.",
    role: "Hotel Guest",
    avatar: "DR",
    rating: 5,
    quote:
      "Made my stay in Ghaziabad unforgettable. SwatiKaur's companion service is truly the best I've experienced — classy, discreet, and worth every rupee.",
  },
  {
    id: 2,
    name: "Arjun S.",
    role: "Business Executive",
    avatar: "AS",
    rating: 5,
    quote:
      "Absolutely premium experience. The companion was elegant and professional, made the evening truly memorable. Discretion was handled perfectly.",
  },
  {
    id: 3,
    name: "Rahul M.",
    role: "Entrepreneur",
    avatar: "RM",
    rating: 5,
    quote:
      "Very genuine profiles, no fake photos. Booking was smooth and everything was exactly as described. Highly professional service in Noida.",
  },
  {
    id: 4,
    name: "Vikram K.",
    role: "Senior Manager",
    avatar: "VK",
    rating: 5,
    quote:
      "Top-class service with complete privacy. Everything exceeded my expectations. The team is responsive, trustworthy and very professional.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative pt-16 pb-20 px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -right-20 w-96 h-96 bg-rose-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-rose-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

          {/* ── LEFT IMAGE CARD ── */}
          <div className="w-full lg:w-[32%] lg:shrink-0 group">
            <div className="relative p-[2.5px] rounded-3xl rounded-br-[90px]
              bg-gradient-to-br from-pink-300 via-rose-400 to-pink-500
              shadow-[0_0_40px_rgba(244,114,182,0.4)]
              hover:shadow-[0_0_60px_rgba(244,114,182,0.6)]
              transition-all duration-500">
              <div className="relative bg-rose-950 rounded-[22px] rounded-br-[88px] overflow-hidden">
                <div className="relative h-[440px] lg:h-[600px] overflow-hidden rounded-br-[88px]">
                  <Image
                    src="/images/testi-pic.jpg"
                    alt="Our Companions"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/85 via-transparent to-rose-950/30" />

                  {/* Top badge */}
                  <div className="absolute top-6 left-4 right-4 flex justify-center z-20">
                    <div className="flex items-center gap-2 px-5 py-2.5
                      bg-black/30 backdrop-blur-xl border border-pink-300/40
                      rounded-xl shadow-xl">
                      <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,114,182,0.9)]" />
                      <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">Happy Clients</span>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-8 left-7 z-20">
                    <span className="text-white font-black text-2xl uppercase italic tracking-tight drop-shadow-lg">
                      500+ Reviews
                    </span>
                    <div className="w-16 h-[3px] bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mt-2
                      group-hover:w-32 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SECTION ── */}
          <div className="w-full lg:flex-1 min-w-0">

            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 tracking-[0.25em] uppercase mb-4">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
                Our Clients Reviews
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                <span className="text-white">What Our Clients </span>
                <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                  Say&apos;s
                </span>
              </h2>

              <p className="mt-3 text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
                We&apos;re more than just a service — we&apos;re your trusted companion. Here is some of the love we have received from the people who keep us going.
              </p>
            </div>

            {/* Nav buttons */}
            <div className="flex justify-end gap-3 mb-5">
              <button aria-label="Previous"
                className="testimonial-prev w-11 h-11 rounded-full flex items-center justify-center cursor-pointer
                  bg-white/15 border border-white/30 text-white
                  hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500
                  hover:border-transparent hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]
                  hover:scale-110 active:scale-95 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button aria-label="Next"
                className="testimonial-next w-11 h-11 rounded-full flex items-center justify-center cursor-pointer
                  bg-white/15 border border-white/30 text-white
                  hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500
                  hover:border-transparent hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]
                  hover:scale-110 active:scale-95 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              loop={true}
              navigation={{ nextEl: ".testimonial-next", prevEl: ".testimonial-prev" }}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="h-auto">

                  {/* DARK card — contrasts against bright pink bg */}
                  <div className="relative h-[300px] px-5 py-6 flex flex-col
                    rounded-2xl rounded-br-[60px] overflow-hidden cursor-pointer
                    bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900
                    border border-pink-400/25
                    shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(244,114,182,0.08)]
                    hover:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(236,72,153,0.25)]
                    hover:border-pink-400/50 hover:-translate-y-2
                    transition-all duration-400 group">

                    {/* Inner glow blobs */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Top glow line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

                    {/* Quote icon — top right */}
                    <div className="absolute top-4 right-5 z-20
                      p-2 bg-pink-500/20 backdrop-blur-sm rounded-xl border border-pink-400/30">
                      <svg className="w-5 h-5 fill-pink-300" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Avatar + name */}
                    <div className="relative z-10 flex items-center gap-3 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-full
                          bg-gradient-to-br from-pink-400 to-rose-500
                          flex items-center justify-center
                          text-white font-black text-sm
                          border-2 border-pink-300/40 shadow-lg">
                          {t.avatar}
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-rose-950 rounded-full" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm leading-tight">{t.name}</h4>
                        <span className="inline-block mt-0.5 bg-pink-500/25 border border-pink-400/30
                          px-2.5 py-0.5 rounded-full text-[10px] text-pink-200 uppercase tracking-widest font-semibold">
                          {t.role}
                        </span>
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="relative z-10 text-white/80 text-sm leading-relaxed flex-1 line-clamp-4">
                      {t.quote}
                    </p>

                    {/* Stars — bottom left */}
                    <div className="relative z-10 mt-4 flex items-center gap-1
                      bg-white/8 border border-white/15 w-fit
                      px-3 py-1.5 rounded-xl backdrop-blur-sm">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  );
}
