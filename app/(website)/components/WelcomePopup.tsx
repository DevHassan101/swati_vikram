"use client";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs"
import Link from "next/link";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setAnimate(true), 50);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setAnimate(false);
    setTimeout(() => setVisible(false), 200);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm transition-opacity duration-300
        ${animate ? "opacity-100" : "opacity-0"}`}
      onClick={closePopup}
    >
      <div
        className={`relative w-[92vw] max-w-sm bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900
          border border-pink-300/20 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_40px_rgba(236,72,153,0.15)]
          overflow-hidden transform transition-all duration-300
          ${animate ? "scale-100 translate-y-0" : "scale-90 translate-y-4"}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Top glow bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl" />
        </div>

        {/* Close button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg
            bg-gradient-to-br from-pink-500 to-rose-500 text-white hover:scale-110
            transition-transform duration-200 shadow-md z-10"
          onClick={closePopup}
        >
          <IoMdClose size={16} />
        </button>

        {/* Content */}
        <div className="relative px-7 pt-8 pb-7 text-center">

          {/* Logo */}
          <h1 className="text-3xl font-black tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
              Swati
            </span>
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              Kaur
            </span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <span className="w-10 h-px bg-pink-400/40 rounded-full" />
            <span className="text-pink-300/60 text-xs tracking-[0.2em] uppercase font-semibold">
              Premium Companion
            </span>
            <span className="w-10 h-px bg-pink-400/40 rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-lg font-semibold text-white leading-snug">
            Welcome — Your Exclusive Experience Awaits
          </h2>

          {/* Para */}
          <p className="mt-2 text-pink-100/70 text-sm leading-relaxed">
            Discreet, elegant, and professional companion services in Noida &amp; Ghaziabad.
            Personalized just for you.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="tel:+923402690068"
              className="w-full inline-flex justify-center items-center gap-2
                bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold
                py-2.5 rounded-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/40
                transition-all duration-200 text-sm"
            >
              <FiPhoneCall size={15} />
              Call Now
            </Link>
            <Link
              href="https://wa.me/923402690068"
              target="_blank"
              className="w-full inline-flex justify-center items-center gap-2
                bg-green-600/90 hover:bg-green-600 text-white font-semibold
                py-2.5 rounded-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/30
                transition-all duration-200 text-sm border border-green-500/30"
            >
              <BsWhatsapp size={15} />
              Chat on WhatsApp
            </Link>
          </div>

        </div>

        {/* Bottom glow bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
      </div>
    </div>
  );
}
