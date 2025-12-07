import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <Card className="w-full border-0 shadow-none">
        <CardContent className="bg-federiconigrowixstudiocomcasablanca rounded-[13.5px] p-0">
          <div className="flex flex-col items-start gap-[108.31px] px-[23.04px] py-[37.44px]">
            <div className="flex flex-col w-full items-start">
              <h2 className="w-full [font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[67.5px] leading-[81px] tracking-[0] text-center">
                +42%
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
                Average customer list growth
                <br />
                through strategic opt-in forms,
                <br />
                lead magnets, and conversion-
                <br />
                optimized touchpoints
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
