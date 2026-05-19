import React from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What makes DataSpark different from other agencies?",
    answer:
      "We combine brand storytelling with data-driven optimization to create sustainable revenue machines that scale without burning cash on ads or constant discounts.",
  },
  {
    id: "item-2",
    question: "Do I need a big audience list to benefit?",
    answer:
      "No, we work with brands at all stages. Our strategies are designed to grow your audience while maximizing the value of your existing customers.",
  },
  {
    id: "item-3",
    question: "How soon can I see results?",
    answer:
      "Most clients see measurable improvements within 30-60 days. Our data-driven approach allows us to identify quick wins while building long-term growth systems.",
  },
  {
    id: "item-4",
    question: "Is this only for fashion/lifestyle brands?",
    answer:
      "While we have deep expertise in fashion and lifestyle, our growth systems work for any DTC brand looking to scale profitably.",
  },
];

// FAQPage JSON-LD schema for SEO + LLM citation (all Q&A pairs structured)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export const AdditionalInfoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-28 px-4 sm:px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">
            Got Questions?
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#191818] leading-tight"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="w-full space-y-2 sm:space-y-3">
          {faqData.map((faq) => (
            <details
              key={faq.id}
              className="group border border-black/5 rounded-lg sm:rounded-xl px-4 sm:px-6 bg-gray-50/50 hover:bg-gray-50 transition-colors open:bg-gray-50 open:shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between py-4 sm:py-5 w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span
                  className="font-medium text-[#191818] text-sm sm:text-base md:text-lg text-left pr-3"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-5 h-5 text-[#191818]/60 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="pb-4 sm:pb-5">
                <p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed text-left"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
