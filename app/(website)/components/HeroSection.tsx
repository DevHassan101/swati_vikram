import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="hero-section relative w-full h-180 lg:h-screen pt-30">
      <div className="model-section flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center w-full h-full relative z-10">
        {/* Mobile & Tablet Full Background Image */}
        <div className="block lg:hidden absolute inset-0 z-0">
          <Image src="/images/model1.png" alt="model" fill className="object-cover object-top" priority />
        </div>

        {/* Left Image */}
        <div className="img-box hero-img-glow static lg:relative basis-[30%] shrink-0 h-auto lg:h-full">
          <Image src="/images/model1.png" alt="model" fill className="object-contain" priority />
        </div>

        {/* Text Section */}
        <div className="text-box basis-[38%] backdrop-blur-sm bg-pink-950/40 border-t border-x border-pink-300/20 rounded-t-3xl py-6 lg:bg-white/5 lg:backdrop-blur-sm lg:rounded-3xl lg:border lg:border-pink-300/20 absolute z-10 bottom-0 lg:relative px-6 text-center">
          {/* Decorative line */}
          <div className="block lg:hidden w-10 h-1 bg-pink-300/60 rounded-full mx-auto mb-4" />
          <div className="text-head -rotate-1" style={{fontFamily: 'var(--font-cinzel)'}}>
            <h1 className="hero-glow-text text-5xl lg:text-7xl font-black m-0 p-0 text-white tracking-widest">LET&apos;S</h1>
            <h1 className="text-5xl lg:text-7xl font-black m-0 p-0 text-pink-100 opacity-60 relative tracking-widest">PARTY</h1>
            <h1 className="text-5xl lg:text-7xl font-black m-0 p-0 text-white absolute bottom-8 lg:absolute lg:bottom-10 left-0 right-0 tracking-widest" style={{textShadow: '0 0 20px rgba(236,72,153,1), 0 0 40px rgba(236,72,153,0.7)'}}>PARTY</h1>
            <h5 className="text-2xl lg:text-4xl font-bold m-0 p-0 text-pink-100 tracking-wide" style={{fontFamily: 'var(--font-dancing)'}}>Tonight</h5>
          </div>
          <div className="text-para text-sm w-full flex flex-wrap justify-center items-center mt-4">
            <p className="mb-5 text-pink-100/90 leading-relaxed tracking-wide">
              Your ultimate destination for premium companionship &amp; unforgettable nights. Glamour, elegance &amp; pure entertainment await you.
            </p>
            <button className="hero-btn-glow group flex items-center gap-3 bg-linear-to-r from-pink-500 to-rose-500 text-white font-bold px-6 py-3 lg:px-8 lg:py-3 rounded-full shadow-lg hover:from-pink-400 hover:to-rose-400 transition-all duration-300">
              DISCOVER NOW
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <FaPlay className="text-xs" />
              </span>
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="img-box hero-img-glow static hidden lg:relative lg:block basis-[30%] shrink-0 h-auto lg:h-full">
          <Image
            src="/images/model2.png"
            alt="model"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
