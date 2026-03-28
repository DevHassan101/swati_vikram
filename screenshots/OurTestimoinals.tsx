'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Michael G. Ware",
        role: "Managing Director",
        quote: "Outstanding service and attention to detail. The team exceeded all my expectations and delivered a project that truly stands out.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        id: 2,
        name: "Cameron Williams",
        role: "Web Designer",
        quote: "I recently worked with onicx for my home renovation project, and I couldn't be happier with the results. From the moment I walked into their showroom",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Product Manager",
        quote: "Outstanding service and attention to detail. The team exceeded all my expectations and delivered a project that truly stands out.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        id: 4,
        name: "David Chen",
        role: "CEO & Founder",
        quote: "Professional, creative, and efficient. Working with this team was a game-changer for our business. Highly recommended!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5
    }
];

export default function OurTestimonials() {
    const sectionRef = useRef(null);
    const leftCardRef = useRef(null);
    const titleRef = useRef(null);
    
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const leftCardInView = useInView(leftCardRef, { once: true, margin: "-50px" });
    const titleInView = useInView(titleRef, { once: true });

    // Parallax effect for background glows
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const glowY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.15]);

    return (
        <>
            <section ref={sectionRef} className="our-testimonials-section bg-black relative pt-14 pb-20 md:pt-25 md:pb-80 px-6 md:px-26 overflow-hidden">
                {/* Animated glows with parallax */}
                <motion.div 
                    style={{ y: glowY, opacity: glowOpacity }}
                    className="absolute top-10 -right-20 w-125 h-125 bg-[#3bbbfc] blur-[120px] rounded-full"
                />
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity: glowOpacity }}
                    className="absolute bottom-5 -left-20 w-125 h-125 bg-[#3bbbfc] blur-[120px] rounded-full"
                />

                <div className="testimonial-section">
                    <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-10">
                        {/* Left card with entrance animation */}
                        <motion.div 
                            ref={leftCardRef}
                            initial={{ opacity: 0, x: -100, rotateY: -15 }}
                            animate={leftCardInView ? { 
                                opacity: 1, 
                                x: 0, 
                                rotateY: 0,
                            } : {}}
                            transition={{ 
                                duration: 1, 
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2 
                            }}
                            className="testimonial-left w-full relative lg:w-[33%] group"
                        >
                            <div className="group relative p-0.75 rounded-3xl md:rounded-[2.4rem] cursor-pointer rounded-br-[70px] md:rounded-br-[100px] transition-all duration-700 hover:shadow-[0_0_50px_rgba(59,187,252,0.4)] overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{ background: `linear-gradient(145deg, #3bbbfc 0%, #0188fc 100%)` }} />
                                <div className="relative bg-white rounded-[22px] md:rounded-[2.3rem] rounded-br-[68px] md:rounded-br-[100px] overflow-hidden h-full w-full">
                                    <div className="relative h-140 md:h-125 lg:h-150 overflow-hidden rounded-br-[68px] md:rounded-br-[100px]">
                                        <motion.img 
                                            initial={{ scale: 1.2 }}
                                            animate={leftCardInView ? { scale: 1 } : {}}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            src="/images/about/testiimage.webp" 
                                            alt="Team collaboration"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                        />
                                        <div className="absolute w-full right-0 h-50 bottom-0 bg-linear-to-t from-[#3bbcfcd6] to-transparent"></div>
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
                                    </div>
                                    
                                    {/* Animated badge */}
                                    <motion.div 
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={leftCardInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                                        className="absolute top-10 left-0 right-0 flex justify-center px-6 z-20"
                                    >
                                        <div className="w-full py-3.5 md:py-4.5 bg-white/10 backdrop-blur-xl border border-white/50 rounded-lg md:rounded-2xl shadow-2xl flex items-center justify-center 
                                             cursor-pointer gap-3 transform group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="w-1.75 h-1.75 md:w-2 md:h-2 bg-[#3bbbfc] rounded-full animate-pulse shadow-[0_0_10px_#3bbbfc]" />
                                            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Global Success</span>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Animated bottom label */}
                                    <motion.div 
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={leftCardInView ? { x: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        className="absolute bottom-10 left-8 z-20"
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase italic opacity-90">Our Achievements</span>
                                            <div className="w-18 h-0.75 md:h-1 bg-[#3bbbfc] rounded-full group-hover:w-28 transition-all duration-500" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right section with staggered animations */}
                        <div className="testimonial-right w-full relative lg:w-[66%]">
                            {/* Title section */}
                            <motion.div 
                                ref={titleRef}
                                initial={{ opacity: 0, y: 30 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="testi-title mt-4 md:mt-1 mb-6"
                            >
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={titleInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white uppercase tracking-widest"
                                >
                                    <span className="w-1.75 h-1.75 md:w-2 md:h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                    <span className="font-semibold">Our Clients Reviews</span>
                                    <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="mt-5 md:mt-6 text-[27px] md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight relative"
                                >
                                    <span className="text-white inline-block hover:text-white transition-colors duration-300 mr-3">
                                        What There Client
                                    </span>
                                    <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                                        Say's
                                    </span>
                                </motion.div>
                                
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={titleInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="max-w-xl mt-3 md:mt-4 ml-0 md:ml-1 text-sm md:text-[17px] text-white/80"
                                >
                                    We're more than just a service were a partner. Here is some of the love we have received from the people who keep us going.
                                </motion.p>
                            </motion.div>

                            {/* Navigation buttons */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="testi-content relative mt-2"
                            >
                                <div className="w-full flex justify-end items-center mb-4 md:mb-6 gap-3 md:gap-4">
                                    <motion.button 
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Previous testimonial" 
                                        className="testimonial-prev group relative flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-full border border-white/60 overflow-hidden transition-all duration-500 shadow-[0_10px_25px_rgba(59,187,252,0.3)] cursor-pointer"
                                        style={{ background: `linear-gradient(145deg, #3bbbfc 0%, #0188fc 100%)` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                                        <ChevronLeft className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 w-5 h-5 md:w-6.5 md:h-6.5" />
                                    </motion.button>
                                    
                                    <motion.button 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Next testimonial" 
                                        className="testimonial-next group relative flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-full border border-white/60 overflow-hidden transition-all duration-500 shadow-[0_10px_25px_rgba(59,187,252,0.3)] cursor-pointer"
                                        style={{ background: `linear-gradient(145deg, #3bbbfc 0%, #0188fc 100%)` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                                        <ChevronRight className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 w-5 h-5 md:w-6.5 md:h-6.5" />
                                    </motion.button>
                                </div>

                                {/* Swiper with animated cards */}
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={18}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.testimonial-next',
                                        prevEl: '.testimonial-prev',
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                    }}
                                    className="pb-5"
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={testimonial.id}>
                                            <motion.div 
                                                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                                animate={isInView ? { 
                                                    opacity: 1, 
                                                    y: 0, 
                                                    rotateX: 0 
                                                } : {}}
                                                transition={{ 
                                                    delay: 1 + (index * 0.15), 
                                                    duration: 0.8,
                                                    ease: [0.25, 0.46, 0.45, 0.94]
                                                }}
                                                className="h-75 md:h-80 group"
                                            >
                                                <motion.div 
                                                    whileHover={{ 
                                                        y: -10, 
                                                        boxShadow: "0 25px 50px -12px rgba(59, 187, 252, 0.5)" 
                                                    }}
                                                    className="testimonial-card relative h-full px-5 py-6 md:p-8 rounded-[20px] md:rounded-3xl rounded-br-[55px] md:rounded-br-[65px] overflow-hidden transition-all duration-500 border border-white/40 cursor-pointer shadow-2xl"
                                                    style={{ background: `linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)` }}
                                                >
                                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-700 pointer-events-none" />
                                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

                                                    <motion.div 
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        className="absolute top-4 md:top-5 right-4.5 md:right-6 p-2.5 bg-white/20 backdrop-blur-md rounded-[10px] md:rounded-xl border border-white/30 transition-transform z-20"
                                                    >
                                                        <img src="/images/about/testiquotes.webp" alt="testiquotes" className="w-5.5 h-5.5 md:w-8 md:h-8 invert brightness-0" />
                                                    </motion.div>
                                                    
                                                    <div className="relative z-10 flex items-center gap-3 mb-8">
                                                        <motion.div 
                                                            whileHover={{ scale: 1.1 }}
                                                            className="relative p-px md:p-1 rounded-full border border-white/55 group-hover:border-white transition-colors"
                                                        >
                                                            <img src="/images/about/aboutceo.webp" alt="CEO"
                                                                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-fit shadow-2xl border-2 border-white/30" />
                                                            <motion.div 
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ repeat: Infinity, duration: 2 }}
                                                                className="absolute bottom-1 right-0.5 md:right-1 w-2.75 h-2.75 md:w-3.5 md:h-3.5 bg-green-400 border border-white rounded-full" 
                                                            />
                                                        </motion.div>
                                                        <div>
                                                            <h4 className="text-white text-md md:text-xl font-bold tracking-wide drop-shadow-sm">{testimonial.name}</h4>
                                                            <span className="bg-black/20 px-3 py-1 rounded-full text-[8.5px] md:text-[10px] text-white/90 uppercase tracking-widest font-bold ">
                                                                {testimonial.role}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="relative z-10">
                                                        <p className="text-white md:line-clamp-3 max-w-2xl md:max-w-md text-justify md:text-left tracking-tight md:tracking-normal text-sm md:text-lg leading-relaxed font-medium drop-shadow-sm">
                                                            {testimonial.quote}
                                                        </p>
                                                    </div>
                                                    
                                                    <motion.div 
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 1.5 + (index * 0.15), type: "spring" }}
                                                        className="absolute bottom-7 left-8 flex bg-white/10 backdrop-blur-md p-1.75 md:p-2 rounded-lg md:rounded-xl border border-white/20"
                                                    >
                                                        {[...Array(5)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ 
                                                                    delay: 1.7 + (index * 0.15) + (i * 0.1),
                                                                    type: "spring",
                                                                    stiffness: 200
                                                                }}
                                                            >
                                                                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white ml-0.5 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                    
                                                    <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-linear-to-r from-transparent via-white/30 to-transparent rounded-4xl rounded-b-[80px]" />
                                                </motion.div>
                                            </motion.div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}