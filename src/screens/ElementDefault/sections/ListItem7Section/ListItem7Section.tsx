import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ListItem7Section = (): JSX.Element => {
  return (
    <Card className="flex-1 self-stretch bg-federiconigrowixstudiocommillbrook rounded-[13.5px] border-0">
      <CardContent className="flex flex-col items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-6 max-w-[267px]">
          <div className="w-8 h-8 flex items-center justify-center rotate-180">
            <img
              className="w-8 h-8"
              alt="Quote icon"
              src="/component-1-2.svg"
            />
          </div>

          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-[20.3px] text-center tracking-[0] leading-[24.3px]">
            Working with Data Spark
            <br />
            allowed us to define the
            <br />
            voice of Nativo through the
            <br />
            whole structure and growth
            <br />
            our community.
          </p>

          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-base text-center tracking-[0] leading-[19.2px]">
            Giorgio L.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
