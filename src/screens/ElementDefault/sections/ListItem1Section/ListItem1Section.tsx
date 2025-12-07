import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ListItem1Section = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[325.98px] bg-federiconigrowixstudiocomcasablanca rounded-[13.5px] border-0">
      <CardContent className="flex flex-col items-start gap-[132.95px] px-[23.04px] py-[37.44px]">
        <div className="flex flex-col w-full">
          <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[67.5px] leading-[81px] tracking-[0] text-center">
            -28%
          </h2>
        </div>

        <div className="flex flex-col w-full">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px] text-center">
            Reduction in CAC through
            <br />
            retention marketing, referral
            <br />
            programs, and organic growth
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
