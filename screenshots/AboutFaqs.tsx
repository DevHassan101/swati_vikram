'use client';

import { useState, useRef } from "react";
import { motion, useInView } from 'framer-motion';

export default function AboutFaqs() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const leftBoxRef = useRef(null);
    const faqsRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
    const leftBoxInView = useInView(leftBoxRef, { once: true, margin: "-80px" });
    const faqsInView = useInView(faqsRef, { once: true, margin: "-50px" });

    const faqs = [
        {
            id: 1,
            question: "How do you ensure the scalability of your digital products?",
            answer: "We build with a 'growth-first' mindset, utilizing modern frameworks like Next.js and React to ensure your platform can handle increasing traffic without performance drops."
        },
        {
            id: 2,
            question: "What is your typical project timeline from start to finish?",
            answer: "Most custom projects range from 4 to 12 weeks. We use an agile approach, delivering functional milestones every two weeks so you see constant progress."
        },
        {
            id: 3,
            question: "Do you provide post-launch maintenance and support?",
            answer: "Absolutely. We offer dedicated support packages that include security updates, speed optimization, and feature scaling to keep your digital presence electrified."
        },
        {
            id: 4,
            question: "Can you integrate custom third-party APIs into our existing systems?",
            answer: "Yes, we specialize in seamless integrations—whether it's payment gateways, CRM systems, or custom internal tools—to ensure your workflow is fully automated."
        },
        {
            id: 5,
            question: "How do you handle UI/UX design for complex software?",
            answer: "Our design process focuses on user psychology. We create intuitive wireframes and high-fidelity prototypes to ensure the final product is as easy to use as it is beautiful."
        },
        {
            id: 6,
            question: "What makes your agency's development process different?",
            answer: "We don't just write code; we solve business problems. Our 'Electrify' method combines transparent communication with high-performance tech stacks to drive measurable ROI."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <>
            <section ref={sectionRef} className="main-faqs-section bg-black relative pt-14 pb-20 md:pt-25 md:pb-80 px-6 md:px-28 overflow-hidden">
                
                {/* Header Section - Animated */}
                <div ref={headerRef} className="faqs-header text-center relative">
                    {/* Top badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest"
                    >
                        <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                        <span className="font-semibold">Our Faq's</span>
                        <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Main title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative"
                    >
                        <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-1.5 md:mr-3">
                            Here's Your Top
                        </span>
                        <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Questions
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto"
                    >
                        <p className="text-[13px] md:text-[17px] text-white/80">
                            We combine technical expertise with bold design to build products that matter crafting seamless interactions that connect brands with people.
                        </p>
                    </motion.div>
                </div>

                {/* FAQs Section */}
                <div className="faqs-section mt-12 md:mt-14">
                    <div className="faqs-box flex flex-wrap justify-between items-start">

                        {/* Left Box - Animated */}
                        <motion.div
                            ref={leftBoxRef}
                            initial={{ opacity: 0, x: -60, rotateY: -15 }}
                            animate={leftBoxInView ? {
                                opacity: 1,
                                x: 0,
                                rotateY: 0
                            } : {}}
                            transition={{
                                duration: 1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="faqs-left-box basis-full lg:basis-[36%] relative overflow-hidden bg-linear-to-br from-[#0a0a0a] via-[#000000] to-[#0a0a0a] border md:border-2 border-[#3bbbfc] px-8 md:px-10 py-18 md:py-24 rounded-2xl md:rounded-[26px] 
                            shadow-[0_7px_20px_rgba(59,187,252,0.300)] transition-all duration-500 hover:border-[#3bbbfc]/60 hover:shadow-[0_0_80px_rgba(59,187,252,0.25)] group"
                        >
                            {/* Animated glow */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={leftBoxInView ? { scale: 1, opacity: 0.5 } : {}}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute -top-20 -right-5 w-40 h-50 bg-[#3bbbfc]/50 rounded-full blur-[80px] group-hover:bg-[#3bbbfc]/55 transition-all duration-700"
                            />

                            <div className="absolute inset-0 opacity-25" style={{
                                backgroundImage: 'linear-gradient(rgba(59,187,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(59,187,252,0.10) 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }} />

                            <div className="faqs-content relative z-10 flex flex-col h-full justify-between gap-12">
                                <div className="space-y-4">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={leftBoxInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                                        className="inline-flex items-center gap-2 px-5 md:px-4 py-1.5 md:py-2 bg-[#3bbbfc]/10 border border-[#3bbbfc]/30 rounded-full backdrop-blur-sm"
                                    >
                                        <span className="w-1.75 h-1.75 md:w-2 md:h-2 bg-[#3bbbfc] rounded-full animate-pulse" />
                                        <span className="text-[#3bbbfc] text-[11px] md:text-xs font-semibold uppercase tracking-wider">FAQ's</span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={leftBoxInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6, duration: 0.8 }}
                                        className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mt-5 md:mt-2"
                                    >
                                        <span className="text-white/95">How We Electrify</span>
                                        <br />
                                        <span className="text-[#3bbbfc]">Digital Presences </span>
                                        <br />
                                        <span className="text-white/95"> Your Questions Answered.</span>
                                    </motion.h2>
                                </div>

                                {/* Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={leftBoxInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="faqs-btn mt-4 md:mt-8 flex justify-start items-center"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group/btn relative inline-flex items-center gap-4 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] pl-1.5 pr-8 md:pr-10 py-1.5 rounded-full transition-all duration-700 shadow-[0_10px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_12px_rgba(1,168,252,0.3),0_0_12px_rgba(1,168,252,0.3)] cursor-pointer overflow-hidden"
                                    >
                                        <span className="absolute top-1/2 left-8 md:left-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full opacity-0 transition-all duration-700 ease-out group-hover/btn:w-125 group-hover/btn:h-125 group-hover/btn:opacity-100"></span>
                                        <div className="absolute inset-0 bg-linear-to-br from-[#01a8fc] to-[#0d7ac2] opacity-0 transition-opacity duration-700 group-hover/btn:opacity-100 rounded-full"></div>

                                        <span className="absolute bottom-0 left-0 h-full w-16 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-stretch" viewBox="0 0 487 487">
                                                <path fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
                                            </svg>
                                        </span>

                                        <span className="absolute top-0 right-0 h-full w-16 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover" viewBox="0 0 487 487">
                                                <path fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"></path>
                                            </svg>
                                        </span>

                                        <div className="relative z-10 flex items-center transition-all duration-700 group-hover/btn:gap-4 gap-3">
                                            <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-700 ease-out shadow-lg -rotate-40 group-hover/btn:rotate-0 ">
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 fill-[#01a8fc] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-white font-semibold tracking-wide text-sm md:text-[17px] whitespace-nowrap transition-all duration-700 drop-shadow-sm group-hover/btn:tracking-wider">
                                                Read More
                                            </span>
                                        </div>

                                        <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full"></span>
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={leftBoxInView ? { opacity: 0.5, scale: 1 } : {}}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="faqs-image absolute bottom-2 md:bottom-3 right-0 md:right-1 rounded-br-4xl group-hover:opacity-50 transition-opacity duration-500"
                            >
                                <img src="/images/about/faqsimage.webp" alt="faqsimage" className="w-35 md:w-55 grayscale contrast-125 brightness-90" />
                            </motion.div>
                        </motion.div>

                        {/* Right Box - FAQs List */}
                        <div ref={faqsRef} className="faqs-right-box basis-full lg:basis-[60%] mt-6 md:mt-0">
                            <div className="w-full flex flex-col gap-4">
                                {faqs.map((faq, index) => {
                                    const isOpen = activeIndex === faq.id;
                                    return (
                                        <motion.div
                                            key={faq.id}
                                            initial={{ opacity: 0, x: 60 }}
                                            animate={faqsInView ? {
                                                opacity: 1,
                                                x: 0
                                            } : {}}
                                            transition={{
                                                delay: 0.2 + (index * 0.1),
                                                duration: 0.6,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: { duration: 0.2 }
                                            }}
                                            className={`group overflow-hidden transition-all duration-500 rounded-xl md:rounded-2xl cursor-pointer border md:border-2
                                             ${isOpen ? 'border-[#3bbbfc] bg-white/5 shadow-[0_20px_40px_-15px_rgba(59,188,252,0.3)]'
                                                    : 'border-[#3bbbfc] bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0091df] shadow-[0_3px_10px_rgba(59,188,252,0.4)] hover:shadow-[0_10px_20px_rgba(59,188,252,0.4)]'}`}
                                            onClick={() => toggleAccordion(faq.id)}
                                        >
                                            <div className="flex items-center justify-between p-5 md:p-7 select-none">
                                                <div className="flex-1 pr-4">
                                                    <h3 className={`text-sm md:text-xl font-bold transition-colors duration-300 
                                                    ${isOpen ? 'text-[#3bbbfc]' : 'text-white'}`}>
                                                        {faq.question}
                                                    </h3>
                                                </div>

                                                {/* Icon with rotation */}
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                    className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex justify-center items-center transition-all duration-500 
                                                    ${isOpen ? 'bg-[#3bbbfc]/20' : 'bg-white/20'}`}
                                                >
                                                    <div className={`absolute w-2.5 md:w-4 h-0.5 transition-colors duration-300 
                                                    ${isOpen ? 'bg-[#3bbbfc]' : 'bg-white'}`} />
                                                    <motion.div
                                                        animate={{
                                                            scaleY: isOpen ? 0 : 1,
                                                            opacity: isOpen ? 0 : 1
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                        className={`absolute h-2.5 md:h-4 w-0.5 ${isOpen ? 'bg-[#3bbbfc]' : 'bg-white'}`}
                                                    />
                                                </motion.div>
                                            </div>

                                            {/* Answer - Animated */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? "auto" : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{
                                                    height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                                                    opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 }
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 md:px-6 pb-8 pt-2">
                                                    <motion.div
                                                        initial={{ scaleX: 0 }}
                                                        animate={{ scaleX: isOpen ? 1 : 0 }}
                                                        transition={{ duration: 0.5, delay: 0.1 }}
                                                        className="w-full h-px md:h-0.5 bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] opacity-60 mb-5 rounded-full shadow-[0_0_5px_rgba(59,188,252,0.5)] origin-left"
                                                    />
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{
                                                            opacity: isOpen ? 1 : 0,
                                                            y: isOpen ? 0 : -10
                                                        }}
                                                        transition={{ duration: 0.4, delay: 0.2 }}
                                                        className="text-white/80 text-[13px] md:text-lg leading-relaxed max-w-full md:max-w-[95%]"
                                                    >
                                                        {faq.answer}
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}