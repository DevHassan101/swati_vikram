import Link from "next/link";
import { FaWhatsapp, FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const quickLinks = [
  { name: "Home",           path: "/" },
  { name: "Models",         path: "/models" },
  { name: "Services",       path: "/services" },
  { name: "Blogs",          path: "/blogs" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const socials = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaXTwitter,  href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaWhatsapp,  href: "#", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="footer-section relative overflow-hidden">

      {/* ── Top divider line ── */}
      <div className="relative h-[3px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
      </div>

      {/* Subtle background blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-pink-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative px-8 md:px-12 lg:px-20 pt-14 pb-6">

        {/* ── Main grid ── */}
        <div className="grid gap-10 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow mb-3">
              Swati<span className="text-pink-300">Kaur</span>
            </h2>
            <p className="text-sm text-pink-100/70 leading-relaxed max-w-xs">
              Premium companionship services in Noida &amp; Ghaziabad. Discreet, verified, and always available for you.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-pink-300/10 border border-pink-300/25 flex items-center justify-center text-pink-200
                    hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:border-transparent hover:text-white
                    transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-pink-300 tracking-[0.15em] uppercase mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-pink-100/70 hover:text-pink-200 hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    <span className="mr-1.5 text-pink-400">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-pink-300 tracking-[0.15em] uppercase mb-4">
              Contact Us
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/913356162418" className="flex items-center gap-2.5 text-sm text-pink-100/70 hover:text-pink-200 transition-colors duration-200">
                <span className="w-8 h-8 rounded-full bg-pink-300/10 border border-pink-300/20 flex items-center justify-center shrink-0">
                  <FaWhatsapp size={13} className="text-pink-300" />
                </span>
                +91 3356162418
              </a>
              <a href="tel:+913356162418" className="flex items-center gap-2.5 text-sm text-pink-100/70 hover:text-pink-200 transition-colors duration-200">
                <span className="w-8 h-8 rounded-full bg-pink-300/10 border border-pink-300/20 flex items-center justify-center shrink-0">
                  <FaPhone size={11} className="text-pink-300" />
                </span>
                +91 3356162418
              </a>
              <a href="mailto:contact@swatikaur.com" className="flex items-center gap-2.5 text-sm text-pink-100/70 hover:text-pink-200 transition-colors duration-200">
                <span className="w-8 h-8 rounded-full bg-pink-300/10 border border-pink-300/20 flex items-center justify-center shrink-0">
                  <MdOutlineEmail size={14} className="text-pink-300" />
                </span>
                contact@swatikaur.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-pink-300 tracking-[0.15em] uppercase mb-4">
              Newsletter
            </p>
            <p className="text-sm text-pink-100/65 mb-4 leading-relaxed">
              Subscribe for exclusive updates and offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-pink-300/25 text-white placeholder-pink-300/40 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-pink-400/60 focus:bg-white/15 transition-all duration-200 w-full"
              />
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/40 hover:scale-[1.02] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-pink-300/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-pink-100/50 text-center sm:text-left">
            © 2025 SwatiKaur. All rights reserved.
          </p>
          <p className="text-xs text-pink-100/40">
            Designed with ♥ by ByteCloude
          </p>
        </div>

      </div>
    </footer>
  );
}
