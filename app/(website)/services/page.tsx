import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

export default function Services() {

  const services = [
    {
      name: "Blonde Escorts",
      desc: "Stunning companions featuring a variety of golden hues, from platinum to honey-toned, paired with vibrant personalities.",
      image: "/images/service1.webp",
    },
    {
      name: "Dinner Date Escorts",
      desc: "Sophisticated, eloquent companions perfect for high-end galas, business dinners, or intimate evenings at the city's finest restaurants.",
      image: "/images/service2.webp",
    },
    {
      name: "RolePlay Escorts",
      desc: "Creative and immersive companions who bring your favorite scenarios and fantasies to life through dedicated performance.",
      image: "/images/service1.webp",
    },
    {
      name: "Russian Escorts",
      desc: "Striking Eastern European beauty characterized by elegance, poise, and a captivating cultural charm.",
      image: "/images/service2.webp",
    },
    {
      name: "Milf Escorts",
      desc: "Experienced, mature, and confident companions who offer a refined level of conversation and worldly allure.",
      image: "/images/service1.webp",
    },
    {
      name: "Latina Escorts",
      desc: "High-energy socialites ready to light up any event, from VIP club nights to lively private celebrations.",
      image: "/images/service2.webp",
    },
    {
      name: "Asian Escorts",
      desc: "Charming and dainty companions known for their graceful stature and playful, captivating energy.",
      image: "/images/service1.webp",
    },
    {
      name: "Travel Escorts",
      desc: "Skilled practitioners focusing on the art of touch, providing a sensory journey designed for deep relaxation and connection.",
      image: "/images/service2.webp",
    },
  ]

  return (
    <section className="main-service-section pt-12 pb-15 px-7 md:px-10 lg:px-20">
      <div className="service-box mt-20">
        <div className="services-head text-center flex flex-col justify-center items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 tracking-[0.2em] uppercase">
            <span className="w-8 h-[2px] bg-white/60 rounded-full" />
            Our Services
            <span className="w-8 h-[2px] bg-white/60 rounded-full" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent pb-1">
            Explore Our Premium Services
          </h2>
          <p className="text-white/70 text-sm lg:text-base pb-2 w-auto lg:w-185">
            Welcome to our Services page, where each offering is a gateway to unparalleled relaxation and rejuvenation. From the transformative touch of Tantric Massage to the synchronised harmony of 4 Hands Massage, our curated selection promises a journey that caters to your deepest desires for connection, exploration, and tranquility.
          </p>
        </div>
        <div className="service-cards grid gap-5 md:gap-4 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative w-full h-72 rounded-2xl overflow-hidden border border-pink-300/30 shadow-lg shadow-pink-950/50 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-all duration-400 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Base gradient — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/85 via-rose-950/30 to-transparent transition-all duration-400 group-hover:from-rose-950/97 group-hover:via-rose-950/75 group-hover:to-rose-950/20" />

              {/* Top-left: service number badge */}
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-md shadow-pink-900/50 text-white text-xs font-bold tracking-wide">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Top-right: Premium badge */}
              <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-pink-300/30 rounded-full px-2.5 py-0.5 text-[10px] text-pink-200 font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-4px] group-hover:translate-y-0">
                Premium
              </div>

              {/* Bottom content — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center px-4 pb-5 pt-8 transition-all duration-400">

                {/* Title — always visible, moves up on hover */}
                <h2 className="text-white text-lg font-bold tracking-wide transition-all duration-400 group-hover:-translate-y-1">
                  {service.name}
                </h2>

                {/* Divider — appears on hover */}
                <div className="w-10 h-[2px] bg-gradient-to-r from-pink-400 to-rose-400 rounded-full my-2 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-400" />

                {/* Description — hidden by default, reveals on hover */}
                <p className="text-sm text-pink-100/80 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out pb-0 group-hover:pb-3">
                  {service.desc}
                </p>

                {/* Button — slides up on hover */}
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <button className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full py-1.5 px-5 text-white text-sm font-semibold shadow-lg shadow-pink-900/50 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-200">
                    Explore Now <LuArrowUpRight size={15} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
