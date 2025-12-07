import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ListItem6Section = (): JSX.Element => {
  return (
    <section className="relative w-full py-3.5">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
        <div className="flex-shrink-0">
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[27px] tracking-[0] leading-[29.7px]">
            Performance Analytics & Optimization
          </h3>
        </div>

        <div className="flex-1 lg:max-w-[514px]">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[15.8px] tracking-[0] leading-[18.9px]">
            Monthly performance reviews, A/B testing, and continuous optimization to improve every metric that matters.
          </p>
        </div>
      </div>

      <Separator className="mt-[54px] border-t-2 border-[#ececec]" />
    </section>
  );
};
