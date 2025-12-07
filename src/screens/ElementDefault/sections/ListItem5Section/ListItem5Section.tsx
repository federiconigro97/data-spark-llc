import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ListItem5Section = (): JSX.Element => {
  return (
    <section className="relative w-full py-6">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
        <div className="flex flex-col">
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[27px] tracking-[0] leading-[29.7px]">
            Strategic Design & UX
          </h3>
        </div>

        <div className="flex flex-col">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[15.8px] tracking-[0] leading-[18.9px]">
            Brand positioning, site design, and user experience that builds trust and converts visitors into customers.
          </p>
        </div>
      </div>

      <Separator className="mt-6 bg-[#ececec]" />
    </section>
  );
};
