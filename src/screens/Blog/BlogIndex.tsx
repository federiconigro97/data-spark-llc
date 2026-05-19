import React from "react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { getAllPosts } from "../../lib/blog";
import { HeaderSection } from "../ElementDefault/sections/HeaderSection";
import { ContactSection } from "../ElementDefault/sections/ContactSection";
import { NewsletterSection } from "../ElementDefault/sections/NewsletterSection";

export const BlogIndex = (): JSX.Element => {
  const posts = getAllPosts();

  return (
    <div className="relative w-full bg-federiconigrowixstudiocomwhite min-h-screen">
      <Head>
        <title>
          Blog | Data Spark LLC — Growth systems for founders with traction
        </title>
        <meta
          name="description"
          content="Long-form essays on building growth systems that scale without the founder. Foundation-first marketing for B2B SaaS, ecom, and service business founders."
        />
        <meta
          name="keywords"
          content="growth blog, boutique growth consultant, founder marketing, scaling systems, foundation first marketing"
        />
        <link rel="canonical" href="https://www.datasparkgrowth.com/blog" />
        <meta
          property="og:title"
          content="Data Spark Blog | Growth systems for founders"
        />
        <meta
          property="og:description"
          content="Long-form essays on building growth systems that scale without the founder."
        />
        <meta
          property="og:url"
          content="https://www.datasparkgrowth.com/blog"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full bg-federiconigrowixstudiocomwild-sand">
        <HeaderSection />

        <section className="relative w-full pt-12 sm:pt-16 md:pt-24 pb-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span
                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Field Notes
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#191818] mb-4"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                The Growth Systems Blog
              </h1>
              <p
                className="text-lg text-gray-600 leading-relaxed max-w-[680px]"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Long-form essays on building growth systems that scale without the
                founder. Real cases. Real numbers. No fluff.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
              {posts.map((post) => (
                <Link
                  key={post.meta.slug}
                  to={`/blog/${post.meta.slug}`}
                  className="group block bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    {post.meta.pillar && (
                      <span
                        className="text-[10px] sm:text-xs font-semibold text-[#b8860b] uppercase tracking-wide bg-[#fbb84b]/15 px-2 py-0.5 rounded-full"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        Pillar
                      </span>
                    )}
                    <span className="text-[11px] sm:text-xs text-gray-400" style={{ fontFamily: "'Satoshi', Helvetica" }}>
                      {post.meta.date}
                    </span>
                    {post.meta.readingTime && (
                      <span className="text-[11px] sm:text-xs text-gray-400" style={{ fontFamily: "'Satoshi', Helvetica" }}>
                        · {post.meta.readingTime} min read
                      </span>
                    )}
                  </div>
                  <h2
                    className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#191818] mb-3 leading-tight group-hover:text-[#3d3b8e] transition-colors"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    {post.meta.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    {post.meta.description}
                  </p>
                </Link>
              ))}

              {posts.length === 0 && (
                <p
                  className="text-center text-gray-500 py-12"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  No posts yet. Stay tuned.
                </p>
              )}
            </div>
          </div>
        </section>

        <footer className="w-full bg-gradient-to-b from-white to-federiconigrowixstudiocomgallery py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <img className="w-10 sm:w-12 h-auto" alt="Data Spark Logo" src="/group.png" />
                  <h3
                    className="font-semibold text-[#191818] text-lg sm:text-xl"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Data Spark LLC
                  </h3>
                </div>
                <p
                  className="text-gray-500 text-xs sm:text-sm"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Boutique growth operator for founders with traction.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4
                  className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wide mb-3 sm:mb-4"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Explore
                </h4>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#191818] text-sm sm:text-base mb-2 transition-colors"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Ecom & DTC
                </Link>
                <Link
                  to="/founders"
                  className="text-gray-600 hover:text-[#191818] text-sm sm:text-base mb-2 transition-colors"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Founders & SaaS
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-[#191818] text-sm sm:text-base transition-colors"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4
                  className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wide mb-3 sm:mb-4"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Connect
                </h4>
                <ContactSection />
              </div>
            </div>
            <div className="section-divider mb-6 sm:mb-8" />
            <NewsletterSection />
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/privacy-policy"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
