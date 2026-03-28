import Image from "next/image"
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GrUserFemale } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";

const features = [
  {
    Icon: GrUserFemale,
    title: "Verified Profiles",
    desc: "We craft smart, scalable solutions that address real business challenges.",
  },
  {
    Icon: RiCustomerService2Line,
    title: "Quick Replies 24/7",
    desc: "Our mission is to drive growth with innovation, and our vision is to be a trusted global digital partner.",
  },
  {
    Icon: MdOutlinePrivacyTip,
    title: "Your Privacy Our Priority",
    desc: "Our mission is to drive growth with innovation, and our vision is to be a trusted global digital partner.",
  },
];

export default function AboutUs() {
  return (
    <section className="about-section flex flex-col lg:flex-row gap-8 justify-between items-center pt-16 pb-20 px-8 md:px-12 lg:px-20">

      {/* ── Left: Content ── */}
      <div className="mainabout-content w-full lg:w-auto basis-[54%]">
        <div className="about-head pl-0 lg:pl-5">

          {/* Sub-heading */}
          <h5 className="text-sm font-semibold text-pink-300 mb-3 inline-flex items-center gap-2 tracking-[0.2em] uppercase">
            <span className="w-8 h-[2px] bg-pink-400 rounded-full"></span>
            About Us
            <span className="w-8 h-[2px] bg-pink-400 rounded-full"></span>
          </h5>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
            A Genuine Spot Of Call Girl Services<br />
            Noida &amp; Ghaziabad{" "}
            <span className="text-pink-200 inline-flex items-center gap-1">
              SwatiKaur <FaHandHoldingHeart />
            </span>
          </h1>

          <p className="text-sm md:text-sm mb-5 max-w-lg text-pink-100/80 leading-relaxed">
            Looking for a smooth, private way to meet a trusted companion? We connect you with
            verified profiles across Noida and Ghaziabad — prompt replies, clear options, zero drama.
            Adults only, fully discreet, and always within legal limits.
          </p>

          {/* Feature icons */}
          <div className="flex flex-col gap-2 mb-6">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
              >
                <span className="shrink-0 bg-white/10 backdrop-blur-sm text-pink-300 w-10 h-10 border-2 border-pink-300/40 flex justify-center items-center rounded-full">
                  <Icon size={16} />
                </span>
                <span>
                  <h5 className="text-pink-200 font-semibold text-sm">{title}</h5>
                  <p className="text-xs text-pink-100/70 leading-snug">{desc}</p>
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105 cursor-pointer py-2.5 px-7 rounded-full text-white text-sm font-semibold transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>

      {/* ── Right: Images ── */}
      <div className="mainabout-image w-full lg:w-auto basis-[42%] shrink-0">
        <div className="relative w-full h-[480px] max-w-[420px] mx-auto">

          {/* ── Main image (top-right) ── */}
          <div className="absolute top-0 right-0 w-[78%] h-[90%] rounded-2xl overflow-hidden border-4 border-pink-300/30 shadow-2xl shadow-pink-950/60 z-10">
            <Image
              src="/images/about1.jpg"
              alt="about"
              fill
              className="object-cover object-top"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* ── Second image (bottom-left overlap) ── */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[46%] rounded-2xl overflow-hidden border-4 border-pink-400/50 shadow-2xl shadow-pink-900/70 z-20">
            <Image
              src="/images/about2.png"
              alt="about"
              fill
              className="object-cover object-center"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* ── Badge: Available Now ── */}
          <div className="absolute top-3 left-2 flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 rounded-full px-3 py-1.5 shadow-lg shadow-pink-700/40 z-30">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse shrink-0" />
            <span className="text-white text-xs font-bold tracking-wide">Available Now</span>
          </div>

          {/* ── Badge: Top Rated ── */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-yellow-300/40 rounded-full px-3 py-1 z-30 shadow-md">
            <span className="text-yellow-400 text-sm leading-none">★</span>
            <span className="text-white text-xs font-semibold">Top Rated</span>
          </div>

          {/* ── Stats card: Happy Clients ── */}
          <div className="absolute top-[44%] left-[8%] bg-white/10 backdrop-blur-md border border-pink-300/30 rounded-2xl px-4 py-3 z-30 text-center shadow-xl">
            <p className="text-2xl font-extrabold text-white leading-none">500+</p>
            <p className="text-[11px] text-pink-200 mt-1 font-medium">Happy Clients</p>
          </div>

          {/* ── Badge: 100% Discreet ── */}
          <div className="absolute bottom-4 right-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-pink-300/30 rounded-xl px-3 py-2 z-30 shadow-md">
            <MdOutlinePrivacyTip className="text-pink-300 shrink-0" size={14} />
            <span className="text-white text-xs font-semibold">100% Discreet</span>
          </div>

        </div>
      </div>

    </section>
  );
}
