import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import { getPostBySlug } from "../../lib/blog";
import { HeaderSection } from "../ElementDefault/sections/HeaderSection";
import { ContactSection } from "../ElementDefault/sections/ContactSection";
import { NewsletterSection } from "../ElementDefault/sections/NewsletterSection";

export const BlogPost = (): JSX.Element => {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const slug =
    params.slug ||
    location.pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="relative w-full bg-federiconigrowixstudiocomwhite min-h-screen">
        <Head>
          <title>Post not found | Data Spark Blog</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="w-full bg-federiconigrowixstudiocomwild-sand">
          <HeaderSection />
          <div className="max-w-[800px] mx-auto px-6 py-32 text-center">
            <h1 className="text-3xl font-semibold mb-4 text-[#191818]" style={{ fontFamily: "'Satoshi', Helvetica" }}>
              Post not found
            </h1>
            <p className="text-gray-500 mb-6" style={{ fontFamily: "'Satoshi', Helvetica" }}>
              This post may have been moved or doesn't exist yet.
            </p>
            <Link to="/blog" className="text-[#3d3b8e] underline" style={{ fontFamily: "'Satoshi', Helvetica" }}>
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const postUrl = `https://www.datasparkgrowth.com/blog/${post.meta.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    url: postUrl,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    author: {
      "@type": "Person",
      name: post.meta.author,
      url: "https://www.datasparkgrowth.com/founders",
    },
    publisher: {
      "@type": "Organization",
      name: "Data Spark LLC",
      url: "https://www.datasparkgrowth.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.datasparkgrowth.com/group.png",
      },
    },
    keywords: post.meta.keywords?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <div className="relative w-full bg-white">
      <Head>
        <title>{post.meta.title} | Data Spark Blog</title>
        <meta name="description" content={post.meta.description} />
        {post.meta.keywords && (
          <meta name="keywords" content={post.meta.keywords.join(", ")} />
        )}
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.meta.date} />
        <meta property="article:author" content={post.meta.author} />
        <meta name="twitter:title" content={post.meta.title} />
        <meta name="twitter:description" content={post.meta.description} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className="w-full bg-federiconigrowixstudiocomwild-sand">
        <HeaderSection />

        <article className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-[760px] mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#191818] mb-6 transition-colors"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              <ArrowLeft className="w-4 h-4" /> All posts
            </Link>

            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {post.meta.pillar && (
                  <span
                    className="text-[11px] font-semibold text-[#b8860b] uppercase tracking-wide bg-[#fbb84b]/15 px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Pillar
                  </span>
                )}
                <span className="text-xs text-gray-400" style={{ fontFamily: "'Satoshi', Helvetica" }}>
                  {post.meta.date}
                </span>
                {post.meta.readingTime && (
                  <span className="text-xs text-gray-400" style={{ fontFamily: "'Satoshi', Helvetica" }}>
                    · {post.meta.readingTime} min read
                  </span>
                )}
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-[1.15] tracking-tight text-[#191818] mb-4"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                {post.meta.title}
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                {post.meta.description}
              </p>
            </div>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-14 sm:mt-16 pt-8 border-t border-gray-200">
              <p
                className="text-base sm:text-lg text-gray-600 mb-5 leading-relaxed"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                If this resonated, the 5-min audit auto-qualifies whether we're a fit. If we're a fit, we talk. If we're not, you get the Founder Playbook.
              </p>
              <a
                href="https://tally.so/r/448WWA"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl font-medium text-[#191818] text-base sm:text-lg shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Take the 5-min Audit
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            <div className="mt-12 mb-6 text-sm text-gray-500">
              <Link
                to="/blog"
                className="hover:text-[#191818] transition-colors"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                ← More posts
              </Link>
              <span className="mx-3">·</span>
              <Link
                to="/founders"
                className="hover:text-[#191818] transition-colors"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                See how I work with founders →
              </Link>
            </div>
          </div>
        </article>

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
                <Link to="/" className="text-gray-600 hover:text-[#191818] text-sm sm:text-base mb-2 transition-colors" style={{ fontFamily: "'Satoshi', Helvetica" }}>Ecom & DTC</Link>
                <Link to="/founders" className="text-gray-600 hover:text-[#191818] text-sm sm:text-base mb-2 transition-colors" style={{ fontFamily: "'Satoshi', Helvetica" }}>Founders & SaaS</Link>
                <Link to="/blog" className="text-gray-600 hover:text-[#191818] text-sm sm:text-base transition-colors" style={{ fontFamily: "'Satoshi', Helvetica" }}>Blog</Link>
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
