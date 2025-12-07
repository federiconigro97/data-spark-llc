import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const CoreContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start pt-[135px] pb-0 px-[46.08px] w-full">
      <div className="flex flex-col items-start pl-[33.11px] pr-[325.2px] pt-0 pb-[17.75px] w-full">
        <div className="flex flex-col w-full max-w-[1100px] items-start pt-0 pb-2.5 px-0">
          <div className="flex flex-col items-start pt-0 pb-6 px-0 w-full">
            <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#191818] text-[63px] tracking-[0] leading-[69.3px] w-full">
              Complete Growth System
              <br />
              for DTC Brands That Want
              <br />
              Real, Sustainable Revenue
            </h1>
          </div>

          <div className="flex flex-col items-start pb-10 px-0 w-full">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#191818] text-[24px] tracking-[0] leading-[32px] max-w-[900px]">
              Strategy, Design, CRO, Retention & Optimization. Everything you need to scale from $200K to $1M+ without burning cash on ads.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            <a
              href="https://calendly.com/federiconigro-dataspark/ecommerce"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fbb84b] hover:bg-[#fbb84b]/90 rounded-lg [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[18px] tracking-[0] leading-[24px] transition-all shadow-lg hover:shadow-xl"
            >
              Get Your Free Growth Audit
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="https://gamma.app/docs/How-to-Sell-More-Without-Discounts-dzlcaxc6z3k3n4k"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#191818]/5 rounded-lg border-2 border-[#191818] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[18px] tracking-[0] leading-[24px] transition-all"
            >
              Download Free Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
