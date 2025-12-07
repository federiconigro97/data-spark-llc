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
    <section className="w-full bg-federiconigrowixstudiocomwild-sand py-16 px-12">
      <div className="max-w-[900px]">
        <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[40.5px] tracking-[0] leading-[48.6px] text-left mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-[#ececec]"
            >
              <AccordionTrigger className="flex items-center py-5 w-full hover:no-underline text-left">
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-lg text-left">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-federiconigrowixstudiocomcod-gray text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
