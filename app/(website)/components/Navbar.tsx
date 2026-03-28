"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const menu = [
  { name: "Home", path: "/" },
  { name: "Models", path: "/models" },
  { name: "Services", path: "/services" },
  // { name: "Rates", path: "/rates" },
  { name: "Blogs", path: "/blogs" },
  { name: "Privacy & Policy", path: "/privacy-policy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseLight = "relative px-3 py-2 font-medium text-white transition-colors duration-300 hover:text-pink-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:w-0 after:h-[2px] after:bg-pink-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-6";

  const linkBaseDark = "relative px-3 py-2 font-medium text-white transition-colors duration-300 hover:text-pink-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:w-0 after:h-[2px] after:bg-pink-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-6";

  const isActive = (path: string, isDark: boolean) => {
    const linkBase = isDark ? linkBaseDark : linkBaseLight;
    return pathname === path ? `${linkBase} after:w-6` : linkBase;
  };

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-pink-500 backdrop-blur-md shadow-lg shadow-pink-950/40 px-6" : isHome ? "bg-header" : "bg-pink-500/90 backdrop-blur-sm"}`}>
        <nav className="flex justify-between items-center px-5 py-6 md:px-10">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white pb-1 tracking-wide drop-shadow-md">
            Swati<span className="text-pink-300">Kaur</span>
          </h1>
          {/* Desktop-Menu */}
          <ul className="hidden text-md lg:flex items-center gap-5 pb-1">
            {menu.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={isActive(item.path, scrolled || isHome)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden md:flex items-center gap-2 bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-pink-700/40 hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-pink-500">
                <FaPhone size={11} />
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-3xl text-white transition-all duration-300"
            >
              {isOpen ? <IoMdClose /> : <FiMenu />}
            </button>
          </div>
        </nav>
        {/* Mobile-Menu */}
        {isOpen && (
          <div className="lg:hidden p-5 border-t border-pink-300/20 bg-rose-950/95 backdrop-blur-md transition-all duration-300">
            <ul className="flex flex-col items-center gap-4">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition-colors duration-300 ${
                      pathname === item.path ? "text-pink-300" : "text-white hover:text-pink-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}