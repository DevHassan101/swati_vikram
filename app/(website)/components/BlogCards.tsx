"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import DOMPurify from "isomorphic-dompurify";

type Blog = {
  id: number;
  blog_name: string;
  slug: string;
  blog_desc: string;
  blog_image: string | null;
  blog_date: string;
};

type BlogCardsProps = {
  limit?: number;
};

export default function BlogCards({ limit }: BlogCardsProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const url = limit ? `/api/website/blogs?limit=${limit}` : "/api/website/blogs";
        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) return;
        setBlogs(data.blogs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [limit]);

  const stripHtml = (html: string) => {
    if (!html) return "";
    const cleanHtml = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
    const txt = document.createElement("textarea");
    txt.innerHTML = cleanHtml;
    return txt.value.replace(/\s+/g, " ").trim();
  };

  const readTime = (html: string) => {
    const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  if (loading) {
    return (
      <section className="blogs-section w-full pt-16 pb-20 px-8 md:px-12 lg:px-20">
        <div className="flex justify-center items-center gap-2 py-10">
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </section>
    );
  }

  if (!blogs.length) return null;

  return (
    <section className="blogs-section w-full pt-16 pb-20 px-8 md:px-12 lg:px-20">

      {/* ── Section Header ── */}
      <div className="flex flex-col justify-center items-center mb-10 text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 tracking-[0.2em] uppercase mb-3">
          <span className="w-8 h-[2px] bg-white/60 rounded-full" />
          Latest Updates
          <span className="w-8 h-[2px] bg-white/60 rounded-full" />
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
          Our Latest{" "}
          <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent inline-flex items-center gap-3">
            Blogs <IoNewspaper size={36} className="text-white" />
          </span>
        </h2>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="group flex flex-col rounded-2xl overflow-hidden
              bg-white/10 backdrop-blur-sm border border-white/20
              shadow-[0_4px_24px_rgba(0,0,0,0.25)]
              hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(236,72,153,0.15)]
              hover:-translate-y-1.5 hover:border-white/35
              transition-all duration-300"
          >
            {/* ── Image ── */}
            <div className="relative w-full h-60 shrink-0 overflow-hidden">
              <Image
                src={blog.blog_image || "/images/blog-placeholder.jpg"}
                alt={blog.blog_name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Date badge — top right */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5
                bg-gradient-to-r from-pink-500 to-rose-500
                text-white text-xs font-semibold px-3 py-1.5 rounded-full
                shadow-md">
                <FaRegCalendarAlt size={10} />
                {new Date(blog.blog_date).toLocaleDateString("en-US", {
                  day: "numeric", month: "short", year: "numeric"
                })}
              </div>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 px-5 pt-4 pb-0">
              <h3 className="text-base font-bold text-white group-hover:text-pink-100
                transition-colors duration-300 line-clamp-2 leading-snug mb-2">
                {blog.blog_name}
              </h3>
              <p className="text-sm text-white/65 leading-normal line-clamp-5 text-justify flex-1">
                {stripHtml(blog.blog_desc)}
              </p>
            </div>

            {/* ── Bottom bar ── */}
            <div className="mt-4 bg-gradient-to-r from-pink-600 to-rose-500
              flex items-center justify-between px-5 py-3">
              <span className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                <FaRegClock size={11} />
                {readTime(blog.blog_desc)} min read
              </span>
              <span className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                <MdOutlineModeComment size={13} />
                0 Comments
              </span>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
