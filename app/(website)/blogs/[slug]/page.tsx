import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "../../../lib/db";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.blog_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="main-blog-section w-full min-h-screen pt-24 pb-20">

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-pink-200/80 hover:text-white text-sm font-medium
            mb-6 group transition-colors duration-200"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" size={12} />
          Back to Blogs
        </Link>

        {/* Unified card: image on top + content below */}
        <div className="rounded-2xl overflow-hidden border border-pink-300/20
          shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_32px_rgba(236,72,153,0.1)]">

          {/* ── Hero Image ── */}
          <div className="relative w-full h-64 sm:h-80 md:h-[420px]">
            <Image
              src={blog.blog_image || "/images/blog-placeholder.jpg"}
              alt={blog.blog_name}
              fill
              priority
              className="object-cover"
            />
            {/* Gradient overlay — heavier at bottom for seamless blend into card */}
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/20 to-transparent" />

            {/* Date badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white
                bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                <FaRegCalendarAlt size={11} />
                {formattedDate}
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="bg-white/8 backdrop-blur-sm px-6 sm:px-10 pt-6 pb-10">

            {/* Title */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-5">
              {blog.blog_name}
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <span className="w-1 h-5 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full" />
              <span className="text-xs font-semibold text-white/40 tracking-[0.2em] uppercase">Article</span>
            </div>

            {/* Blog content */}
            <div
              className="prose prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-pink-200 prose-strong:font-semibold
                prose-em:text-pink-100/80
                prose-a:text-pink-300 prose-a:underline hover:prose-a:text-pink-200
                prose-li:text-white/80 prose-li:leading-relaxed
                prose-ul:my-4 prose-ol:my-4
                prose-blockquote:border-l-pink-400 prose-blockquote:text-white/70
                prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1
                prose-code:text-pink-200 prose-code:bg-white/10 prose-code:rounded prose-code:px-1
                break-words overflow-hidden"
              dangerouslySetInnerHTML={{ __html: blog.blog_desc }}
            />

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                <FaRegCalendarAlt size={11} />
                Published {formattedDate}
              </span>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white
                  bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2 rounded-xl
                  hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40
                  transition-all duration-200"
              >
                <FaArrowLeft size={12} />
                All Blogs
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
