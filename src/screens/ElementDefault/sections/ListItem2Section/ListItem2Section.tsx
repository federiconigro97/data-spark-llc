import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ListItem2Section = (): JSX.Element => {
  return (
    <section className="relative w-full py-3.5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <div className="flex-shrink-0 md:w-[calc(100%-600px)] min-w-[200px]">
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[27px] tracking-[0] leading-[29.7px]">
            Growth Audit & Strategy
          </h3>
        </div>

        <div className="flex-1 md:max-w-[514px]">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[15.8px] tracking-[0] leading-[18.9px]">
            Complete analysis of your current funnel, identifying quick wins and long-term optimization opportunities.
          </p>
        </div>
      </div>

      <Separator className="mt-[54px] bg-[#ececec] h-0.5" />
    </section>
  );
};
