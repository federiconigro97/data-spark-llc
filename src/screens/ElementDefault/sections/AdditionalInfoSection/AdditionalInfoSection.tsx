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
  },
  {
    id: "item-2",
    question: "Do I need a big audience list to benefit?",
  },
  {
    id: "item-3",
    question: "How soon can I see results?",
  },
  {
    id: "item-4",
    question: "Is this only for fashion/lifestyle brands?",
  },
];

export const AdditionalInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative w-full bg-federiconigrowixstudiocomwild-sand">
      <div className="flex flex-col w-full items-start gap-[0.01px] p-[45px]">
        <div className="flex flex-col items-start pt-0 pb-[9.14px] px-0 w-full">
          <div className="flex flex-col max-w-[690.03px] items-start">
            <div className="pt-0 pb-[0.59px] px-0 flex flex-col items-start w-full">
              <h2 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[40.5px] tracking-[0] leading-[48.6px]">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start pt-[38.48px] pb-[38.49px] px-0 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b-2 border-[#ececec] bg-federiconigrowixstudiocomwhite"
              >
                <AccordionTrigger className="flex items-center px-0 py-1.5 w-full bg-[#f5f4f5] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex flex-col items-start flex-1">
                    <span className="flex items-center justify-center w-full mt-[-1.00px] font-federiconigro-wixstudio-com-switzer-regular font-[number:var(--federiconigro-wixstudio-com-switzer-regular-font-weight)] text-federiconigrowixstudiocomblack text-[length:var(--federiconigro-wixstudio-com-switzer-regular-font-size)] tracking-[var(--federiconigro-wixstudio-com-switzer-regular-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-switzer-regular-line-height)] [font-style:var(--federiconigro-wixstudio-com-switzer-regular-font-style)]">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
