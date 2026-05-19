import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowRightIcon, ChevronDown } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { HeaderSection } from "../ElementDefault/sections/HeaderSection";
import { ContactSection } from "../ElementDefault/sections/ContactSection";
import { NewsletterSection } from "../ElementDefault/sections/NewsletterSection";

// ============================================================================
// CONTENT — Federico v2 positioning. Edit copy here to update the founders landing.
// ============================================================================

const proofMetrics = [
  {
    metric: "€200K → €450K",
    description: "Ofanto Italy. Revenue in 12 months. Zero ads.",
    bg: "bg-[#3d3b8e]",
    text: "text-white",
  },
  {
    metric: "+37% MoM",
    description: "Ippocra (healthtech). One positioning pivot. AI lead gen on autopilot.",
    bg: "bg-[#191818]",
    text: "text-white",
  },
  {
    metric: "+€850K",
    description: "Anonymized B2B. Revenue generated so far. Email + lifecycle, zero ad spend.",
    bg: "bg-[#3d3b8e]",
    text: "text-white",
  },
  {
    metric: "€9.30",
    description: "ESA BIC Brindisi. Cost per booking. First cohort filled, brand new website.",
    bg: "bg-[#191818]",
    text: "text-white",
  },
];

const services = [
  {
    tier: "Audit",
    price: "Free · 5 min",
    title: "Audit funnel",
    description:
      "Auto-qualifies fit in 5 minutes. If we're a fit, you book a discovery call. If we're not, you get the Founder Playbook and you move on with something useful.",
  },
  {
    tier: "Sprint",
    price: "6–10 weeks · productized",
    title: "Foundation Sprint",
    description:
      "Full-funnel install: positioning, tracking, funnel, paid ads launch, lifecycle base, analytics dashboard. Fixed scope, fixed outcome. Investment discussed after the audit.",
  },
  {
    tier: "Retainer",
    price: "Long-term partnership",
    title: "Growth Operator Retainer",
    description:
      "Long-term partnership built around the founder relationship. Strategy, ads optimization, lifecycle, retention, lead gen. Operator-led, senior team executes under the same direction.",
  },
  {
    tier: "Engines",
    price: "Modular · managed",
    title: "Deployable Growth Engines",
    description:
      "Productized systems: Lead Gen, Lifecycle, Ads Optimization, Content. Built once, deployed per client. Add-on to retainer or standalone.",
  },
];

const whyChoose = [
  {
    title: "Senior partnership, no agency overhead.",
    description:
      "Most agencies pitch you the founder and deliver a junior account. With us you stay close to the operator from pitch to delivery, with senior specialists executing under the same direction.",
  },
  {
    title: "Foundation before tactics.",
    description:
      "95% of growth folks jump to ads, SEO, posts. They skip positioning, tracking, lifecycle. Ads on a broken funnel is burn rate.",
  },
  {
    title: "Goals, not hours.",
    description:
      "Engagement is fixed, scope is on outcome. Whether the work needs 10 strategy hours a week or 40, the agreement is the same. Incentive aligned with your result.",
  },
  {
    title: "Long-term partnership.",
    description:
      "3 months minimum, default 6–12. We learn your business, your team, your market. Strategic decisions only matter inside that depth.",
  },
  {
    title: "Operator-led, team-supported.",
    description:
      "Founder background spans marketing operations, media buying, and ex content creator for Nike, Oppo, JD Sports, MyProtein. Engineering by training. Senior specialists execute the tactical under operator direction.",
  },
  {
    title: "Founder voice, contrarian POV.",
    description:
      "Recognizable voice, Italian rhythm, founder-first, contrarian on 6 fixed points. No corporate, no MBA, no LinkedIn platitudes.",
  },
];

const processPhases = [
  {
    phase: "Foundation",
    months: "Months 1–3",
    description:
      "Positioning + ICP verification. Tracking + analytics setup. Customer voice mining. Lifecycle base install. We don't launch ads until this is dialed in.",
  },
  {
    phase: "Scale",
    months: "Months 4–6",
    description:
      "Paid ads launch (foundation is solid now). Lead gen system (B2B) or acquisition expansion (Ecom). Lifecycle deep work. Monthly experiment cycles.",
  },
  {
    phase: "Long-term",
    months: "Months 7+",
    description:
      "System optimization + iteration. Team training + handoff prep. Case study material. Referral activation. Clean exit when your team can run it.",
  },
];

const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "Engagements are goal-based, not hourly. Investment is discussed after the audit, once we know whether we're a fit and what scope makes sense for your business. We're not the cheapest option and we're not trying to be.",
  },
  {
    question: "We just want help on ads, not positioning work.",
    answer:
      "Ads on a broken funnel is burn rate. We work foundation-first, or we're probably not the right partner. This is non-negotiable.",
  },
  {
    question: "How many hours per month do we get?",
    answer:
      "We work on goals, not hours. Whether the engagement needs 10 strategy hours a week or 40, the output is what matters. The agreement is fixed.",
  },
  {
    question: "We already have an in-house growth person.",
    answer:
      "Perfect. We work alongside your team. We don't replace execution. We bring strategy, roadmap, and senior pattern recognition. Your team becomes faster and clearer with us in the loop.",
  },
  {
    question: "How long until we hit our growth target?",
    answer:
      "We don't promise timelines. We promise systems. Three months of foundation. Six months before measurable results. Anyone promising 30-day results is selling fiction.",
  },
  {
    question: "Can we see public case studies?",
    answer:
      "Yes. Ofanto Italy €200K → €450K in 12 months. Ippocra / dPulses +37% MoM. ESA BIC Brindisi €9.30 per booking. An anonymized B2B +€850K through email and lifecycle, available on request under NDA.",
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export const ElementFounders = (): JSX.Element => {
  // Hero visible by default — was previously gated by useEffect(setIsLoaded)
  // which baked opacity:0 into SSR HTML and could leave hero blank if JS
  // hydration was slow or partial. SSR-safe constant now.
  const isLoaded = true;
  // FAQ uses native <details>/<summary> — no state needed. Click works
  // without JS, content always present in HTML (SEO + LLM citation safe).

  // JSON-LD schemas — load ONLY on /founders route (FAQPage + Service)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Growth marketing consulting",
    name: "Boutique Growth Operator Services",
    provider: {
      "@type": "Organization",
      name: "Data Spark LLC",
      url: "https://www.datasparkgrowth.com",
      founder: {
        "@type": "Person",
        name: "Federico Nigro",
      },
    },
    areaServed: "Worldwide",
    description:
      "Boutique growth operator for founders with traction (€30K–€500K MRR). Foundation before tactics. Full-funnel systems including positioning, tracking, lifecycle, ads optimization, retention, and deployable AI engines.",
    offers: services.map((s) => ({
      "@type": "Offer",
      name: s.title,
      description: s.description,
    })),
  };

  return (
    <div className="relative w-full bg-federiconigrowixstudiocomwhite">
      <Head>
        <title>
          Data Spark LLC | Boutique Growth Operator for Founders with Traction
        </title>
        <meta
          name="description"
          content="Boutique growth operator for founders with traction (€30K–€500K MRR). Foundation before tactics. Full-funnel systems that run without you. No junior, no agency overhead."
        />
        <meta
          name="keywords"
          content="boutique growth consultant, growth operator, fractional CMO, B2B SaaS growth, founder growth strategy, scaling consultant, foundation-first marketing, AI growth systems"
        />
        <meta
          property="og:title"
          content="Data Spark LLC | Boutique Growth Operator for Founders"
        />
        <meta
          property="og:description"
          content="Helping founders escape the scaling ceiling. Foundation before tactics. Boutique senior, no junior, no agency overhead."
        />
        <meta
          property="og:url"
          content="https://www.datasparkgrowth.com/founders"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Data Spark LLC | Boutique Growth Operator for Founders"
        />
        <meta
          name="twitter:description"
          content="Helping founders escape the scaling ceiling. Foundation before tactics. Boutique senior."
        />
        <link
          rel="canonical"
          href="https://www.datasparkgrowth.com/founders"
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="flex flex-col w-full items-start">
        <div className="flex flex-col items-start relative w-full">
          <div className="w-full bg-federiconigrowixstudiocomwild-sand">
            <HeaderSection />

            {/* ========== HERO ========== */}
            <section className="relative w-full pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                  <div className="max-w-[600px] order-2 lg:order-1">
                    <div
                      className="mb-4 sm:mb-6"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 600ms ease-out, transform 600ms ease-out",
                        transitionDelay: "100ms",
                      }}
                    >
                      <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-xs sm:text-sm font-medium tracking-wide uppercase">
                        Boutique Growth Operator
                      </span>
                    </div>

                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] sm:leading-[1.1] tracking-tight text-[#191818] mb-4 sm:mb-6"
                      style={{
                        fontFamily: "'Satoshi', Helvetica",
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                        transition: "opacity 700ms ease-out, transform 700ms ease-out",
                        transitionDelay: "200ms",
                      }}
                    >
                      Helping Founders Escape the{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3d3b8e] via-[#4f46e5] to-[#2563eb]">
                        Scaling Ceiling
                      </span>
                    </h1>

                    <p
                      className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
                      style={{
                        fontFamily: "'Satoshi', Helvetica",
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 600ms ease-out, transform 600ms ease-out",
                        transitionDelay: "400ms",
                      }}
                    >
                      Foundation before tactics. Systems that run without you. Built for founders with traction.
                    </p>

                    <div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 600ms ease-out, transform 600ms ease-out",
                        transitionDelay: "600ms",
                      }}
                    >
                      <a
                        href="https://tally.so/r/448WWA"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl font-medium text-[#191818] text-base sm:text-lg shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                      >
                        Take the 5-min Audit
                        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a
                        href="#case-studies"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent rounded-xl font-medium text-[#191818] text-base sm:text-lg border-2 border-[#191818]/20 hover:border-[#191818]/40 hover:bg-[#191818]/5 transition-all duration-300"
                      >
                        See case studies
                      </a>
                    </div>
                  </div>

                  <div
                    className="relative order-1 lg:order-2"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                      transition: "opacity 800ms ease-out, transform 800ms ease-out",
                      transitionDelay: "300ms",
                    }}
                  >
                    {/* TODO Federico: swap this image with a founders-specific one (working session / whiteboard / strategy call vibe). Current is placeholder different from ecom. */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                      <img
                        src="/picture---img-6754-edited-png.png"
                        alt="Federico Nigro, boutique growth operator working with founders with traction"
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-[#3d3b8e]/20 rounded-full blur-3xl animate-pulse-subtle" />
                    <div className="hidden sm:block absolute -top-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 bg-[#fbb84b]/20 rounded-full blur-3xl animate-float" />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== TRUST ========== */}
            <section className="flex flex-col w-full items-center py-12 px-4 sm:px-6 md:px-12 relative z-[2]">
              <div className="max-w-[900px] mx-auto text-center">
                <h2
                  className="font-medium text-[#191818] text-2xl sm:text-3xl md:text-[31.5px] tracking-tight leading-tight mb-3"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  The Growth Partner Founders Choose Over Agencies
                </h2>
                <p
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Boutique senior partnership for founders with traction. Four to six founders served per year. Operator-led, senior team executes under the same direction.
                </p>
              </div>
            </section>

            {/* ========== METRICS ========== */}
            <section
              id="case-studies"
              className="relative w-full bg-gradient-to-b from-federiconigrowixstudiocomwild-sand to-white py-20 md:py-28 px-6 md:px-12"
            >
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span
                    className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Real Numbers, Real Clients
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Results you can expect
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {proofMetrics.map((m, i) => (
                    <div
                      key={i}
                      className={`relative ${m.bg} ${m.text} rounded-2xl p-6 sm:p-7 overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <div className="relative z-10">
                        <div
                          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {m.metric}
                        </div>
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {m.description}
                        </p>
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== SERVICES (4-TIER LADDER) ========== */}
            <section id="services" className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span
                    className="inline-block px-4 py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    The Ladder
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Four tiers. One operator.
                  </h2>
                  <p
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    From a 5-min audit to long-term partnership. Pick the right entry point for where you are.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {services.map((s, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-white to-[#fafaf8] rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-baseline justify-between mb-4">
                        <span
                          className="text-xs font-semibold text-[#3d3b8e] uppercase tracking-wide"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {s.tier}
                        </span>
                        <span
                          className="text-base font-semibold text-[#191818]"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {s.price}
                        </span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-semibold text-[#191818] mb-3 leading-tight"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== WHY CHOOSE US (6 USPs) ========== */}
            <section className="relative w-full bg-federiconigrowixstudiocomwild-sand py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span
                    className="inline-block px-4 py-2 rounded-full bg-[#191818]/10 text-[#191818] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Why Founders Choose Us
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Six things we do differently
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {whyChoose.map((w, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="text-2xl font-bold text-[#3d3b8e] mb-3"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-semibold text-[#191818] mb-3 leading-tight"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {w.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {w.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== PROCESS (3-PHASE) ========== */}
            <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span
                    className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    The Process
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Foundation → Scale → Long-term
                  </h2>
                  <p
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Three months of foundation. Six months for compounding results. Twelve+ months for category-defining work.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                  {processPhases.map((p, i) => (
                    <div
                      key={i}
                      className="relative bg-gradient-to-br from-[#fafaf8] to-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="text-sm font-medium text-[#3d3b8e] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {p.months}
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-semibold text-[#191818] mb-4 leading-tight"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {p.phase}
                      </h3>
                      <p
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="relative w-full bg-federiconigrowixstudiocomwild-sand py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-10 md:mb-12">
                  <span
                    className="inline-block px-4 py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Common Objections
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    What founders ask me
                  </h2>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                  {faqs.map((f, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <h3
                          className="text-base sm:text-lg font-semibold text-[#191818] pr-4"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {f.question}
                        </h3>
                        <ChevronDown
                          className="w-5 h-5 text-[#191818]/60 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <p
                          className="text-sm sm:text-base text-gray-600 leading-relaxed"
                          style={{ fontFamily: "'Satoshi', Helvetica" }}
                        >
                          {f.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== READY TO SCALE + CONTACT ========== */}
            <section
              id="contact"
              className="py-12 sm:py-16 md:py-28 px-4 sm:px-6 md:px-12 w-full bg-gradient-to-b from-federiconigrowixstudiocomwild-sand to-white"
            >
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-start">
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <span
                      className="text-[#3d3b8e] text-xs sm:text-sm font-medium tracking-wide uppercase"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Ready to Scale
                    </span>
                    <h2
                      className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#191818] leading-tight"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Build a system that runs without you.
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-600 leading-relaxed"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Four to six founders served per year. Boutique partnership. If you have traction and you're tired of trick-of-the-month, take the 5-minute audit.
                    </p>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      If we're a fit, we talk. If we're not, you get the Founder Playbook and you move on with something useful.
                    </p>
                    <a
                      href="https://tally.so/r/448WWA"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl font-medium text-[#191818] text-base sm:text-lg shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-fit"
                    >
                      Take the 5-min Audit
                      <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>

                  <div className="w-full">
                    <Card className="w-full bg-white rounded-2xl sm:rounded-3xl border border-black/5 shadow-lg sm:shadow-xl overflow-hidden">
                      <CardContent className="p-5 sm:p-6 md:p-10">
                        <div className="flex flex-col gap-4 sm:gap-6 w-full">
                          <div className="mb-2 sm:mb-4">
                            <span className="text-[#3d3b8e] text-xs sm:text-sm font-medium tracking-wide uppercase">
                              Get Started
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#191818] mt-1">
                              Or, drop me a note.
                            </h2>
                          </div>

                          <ContactForm />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== FOOTER ========== */}
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
                      Mission
                    </h4>
                    <p
                      className="text-gray-600 text-sm sm:text-base leading-relaxed"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Help founders escape the scaling ceiling by building growth systems that run without them. Foundation before tactics. Boutique, senior, no junior.
                    </p>
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
      </div>
    </div>
  );
};
