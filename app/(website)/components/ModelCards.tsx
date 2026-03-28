"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsHearts } from "react-icons/bs";

interface Model {
  model_image: string;
  model_name: string;
  model_location: string;
  model_age: number;
  slug: string;
  badge?: string;
}

export default function ModelCards() {
  const [models, setModels] = useState<Model[]>([]);
  const [openCard, setOpenCard] = useState<number | null>(null);

  async function fetchModels() {
    const response = await fetch("/api/website/models", { method: "GET" });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error || data.message || "Failed to fetch models");
      return;
    }
    setModels(data.models);
  }

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <section className="profile-section pt-16 pb-20 px-8 md:px-12 lg:px-20">

      {/* ── Section Header ── */}
      <div className="flex flex-col justify-center items-center mb-10 text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-pink-300 tracking-[0.2em] uppercase mb-2">
          <span className="w-8 h-[2px] bg-pink-400 rounded-full inline-block"></span>
          Meet Our Girls
          <span className="w-8 h-[2px] bg-pink-400 rounded-full inline-block"></span>
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl inline-flex items-center gap-3 text-white font-semibold mb-3">
          Our Models Profiles <span className="text-pink-300"><BsHearts size={38} /></span>
        </h1>
        <p className="w-full lg:w-200 text-sm md:text-base text-center text-pink-100/80 leading-relaxed">
          In a city where luxury often comes with a hefty price tag, SwatiKaur stands as a beacon of
          affordability — redefining what it means to enjoy premium companionship without the
          gatekeeping of exorbitant fees.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model, index) => {
          const isOpen = openCard === index;
          return (
            <div
              key={index}
              className="profile-card relative rounded-2xl overflow-hidden cursor-pointer group
                border border-white/30
                shadow-[0_8px_32px_rgba(0,0,0,0.45)]
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(236,72,153,0.25)]
                hover:border-white/50
                hover:-translate-y-1.5
                transition-all duration-400"
              onClick={() => setOpenCard(isOpen ? null : index)}
            >
              {/* Image */}
              <div className="relative w-full aspect-2/3">
                <Image
                  src={model.model_image}
                  alt={model.model_name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  priority={false}
                />

                {/* Base gradient — always on */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/50 to-transparent" />

                {/* Hover overlay — fades in smoothly */}
                <div className={`absolute inset-0 bg-rose-950/70 backdrop-blur-[1px] transition-opacity duration-400 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
              </div>

              {/* Content — always at bottom, shifts up on hover */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">

                {/* Basic info */}
                <div className={`transition-all duration-400 ease-out ${isOpen ? "-translate-y-1" : "group-hover:-translate-y-1"}`}>
                  <h3 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg mb-1.5">
                    {model.model_name}
                  </h3>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-yellow-400 text-lg leading-none drop-shadow">★★★★★</span>
                    <span className="text-yellow-300/70 text-xs font-medium">(5.0)</span>
                  </div>
                  <p className="text-sm font-medium text-pink-200 flex items-center gap-1.5">
                    <span className="text-pink-300 text-base">📍</span> {model.model_location}
                  </p>
                </div>

                {/* Expanded details */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-72 opacity-100 mt-4" : "max-h-0 opacity-0 group-hover:max-h-72 group-hover:opacity-100 group-hover:mt-4"}`}>
                  <div className="border-t border-white/20 pt-3.5">

                    {/* Age pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Age {model.model_age}
                      </span>
                      <span className="bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-semibold px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>

                    <p className="text-sm text-white/75 leading-relaxed mb-4">
                      Professional and friendly service. Available for outcall appointments.
                      Providing premium companionship experience.
                    </p>

                    <div className="flex gap-2.5">
                      <Link
                        href={`/models/${model.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full py-2 text-sm font-bold shadow-lg shadow-pink-900/50 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-200"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="tel:+923402690068"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center bg-white/15 backdrop-blur-sm text-white border border-white/30 rounded-full py-2 text-sm font-bold hover:bg-white/25 hover:border-white/50 transition-all duration-200"
                      >
                        Call Now
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* Badge */}
              {model.badge && (
                <div className="absolute top-3 right-3 bg-white text-pink-600 px-3 py-0.5 border border-pink-300 rounded-full text-xs font-bold z-10 shadow-md">
                  {model.badge}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
