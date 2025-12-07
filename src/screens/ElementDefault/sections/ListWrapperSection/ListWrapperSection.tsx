import React from "react";

const listItems = [
  {
    boldText: "Complete Growth Infrastructure:",
    regularText:
      " Strategy, design, retention marketing, CRO, and ongoing optimization all working together.",
  },
  {
    boldText: "Increase Revenue Per Customer:",
    regularText:
      " Higher AOV, better retention rates, and improved LTV through optimized customer journeys.",
  },
  {
    boldText: "Data-Driven Decisions:",
    regularText:
      " Monthly analytics reviews, A/B testing, and continuous optimization to maximize every dollar you invest.",
  },
];

export const ListWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start pl-0 pr-[45px] py-9 relative w-full">
      <div className="flex flex-col items-start gap-8 pt-0 pb-[34.43px] px-0 relative w-full">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start pt-[21.65px] pb-0 px-0 relative w-full"
          >
            <div className="flex flex-col items-start relative w-full">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[20.3px]">
                <span className="font-bold text-[#121212] leading-[24.3px]">
                  {item.boldText}
                </span>
                <span className="[font-family:'Satoshi-Regular',Helvetica] text-[#121212] leading-[24.3px]">
                  {item.regularText}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
