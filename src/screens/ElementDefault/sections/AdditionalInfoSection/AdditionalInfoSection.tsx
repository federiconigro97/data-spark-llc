import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What makes DataSpark different from other agencies?",
    answer: "We combine brand storytelling with data-driven optimization to create sustainable revenue machines that scale without burning cash on ads or constant discounts."
  },
  {
    id: "item-2",
    question: "Do I need a big audience list to benefit?",
    answer: "No, we work with brands at all stages. Our strategies are designed to grow your audience while maximizing the value of your existing customers."
  },
  {
    id: "item-3",
    question: "How soon can I see results?",
    answer: "Most clients see measurable improvements within 30-60 days. Our data-driven approach allows us to identify quick wins while building long-term growth systems."
  },
  {
    id: "item-4",
    question: "Is this only for fashion/lifestyle brands?",
    answer: "While we have deep expertise in fashion and lifestyle, our growth systems work for any DTC brand looking to scale profitably."
  },
];

export const AdditionalInfoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-sm font-medium tracking-wide uppercase mb-4">
            Got Questions?
          </span>
          <h2 
            className="text-3xl md:text-4xl font-semibold text-[#191818] leading-tight"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-black/5 rounded-xl px-6 bg-gray-50/50 hover:bg-gray-50 transition-colors data-[state=open]:bg-gray-50 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="flex items-center py-5 w-full hover:no-underline text-left">
                <span 
                  className="font-medium text-[#191818] text-base md:text-lg text-left"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent 
                className="pb-5 text-gray-600 text-base leading-relaxed text-left"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
