import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GenericListItemSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <Card className="w-full bg-federiconigrowixstudiocomcasablanca border-0 rounded-[13.5px]">
        <CardContent className="flex flex-col items-start gap-[108.31px] px-[23.04px] py-[37.44px]">
          <div className="flex flex-col items-start w-full">
            <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[67.5px] tracking-[0] leading-[81px]">
              850K+
            </h2>
          </div>

          <div className="flex flex-col items-start w-full">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
              In tracked revenue generated
              <br />
              through our complete growth
              <br />
              system: CRO, retention, and
              <br />
              strategic optimization
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
