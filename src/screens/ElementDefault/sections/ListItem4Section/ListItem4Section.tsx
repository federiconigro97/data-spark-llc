import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ListItem4Section = (): JSX.Element => {
  return (
    <section className="relative w-full py-6">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
        <div className="flex items-center">
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[27px] tracking-[0] leading-[29.7px]">
            Conversion Rate Optimization
          </h3>
        </div>

        <div className="flex items-start">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[15.8px] tracking-[0] leading-[18.9px]">
            Data-driven testing and optimization of landing pages, product pages, and checkout flows to maximize revenue.
          </p>
        </div>
      </div>

      <Separator className="mt-[69.67px] border-t-2 border-[#ececec]" />
    </section>
  );
};
