import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ListItem3Section = (): JSX.Element => {
  return (
    <section className="relative w-full py-3.5">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-0">
        <div className="flex-shrink-0">
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[27px] tracking-[0] leading-[29.7px]">
            Retention Marketing System
          </h3>
        </div>

        <div className="flex-1 md:ml-auto md:max-w-[513.86px]">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[15.8px] tracking-[0] leading-[18.9px]">
            Email & SMS automation that drives 30-40% of revenue through strategic customer nurture and retention.
          </p>
        </div>
      </div>

      <Separator className="mt-[15px] border-t-2 border-[#ececec]" />
    </section>
  );
};
