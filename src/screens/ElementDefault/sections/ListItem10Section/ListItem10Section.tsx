import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ListItem10Section = (): JSX.Element => {
  return (
    <Card className="flex-1 self-stretch bg-federiconigrowixstudiocommillbrook rounded-[13.5px] border-0">
      <CardContent className="flex flex-col items-center justify-center px-6 py-[60px]">
        <div className="flex flex-col items-center gap-[42px] w-full max-w-[267px]">
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              className="w-8 h-8 rotate-180"
              alt="Quote icon"
              src="/component-1-2.svg"
            />
          </div>

          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-[20.3px] text-center tracking-[0] leading-[24.3px]">
            Federico completly changed
            <br />
            our perspective on all that
            <br />
            we were working in Enter,
            <br />
            and reached better results
          </p>

          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-base text-center tracking-[0] leading-[19.2px]">
            Gianmarco M.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
