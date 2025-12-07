import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ListItem8Section = (): JSX.Element => {
  const testimonialData = {
    quote:
      "Has been an incredible\njourney, doubling the\nrevenue in one year felt\nimpossible before. We went\nfrom 200k to 452k without\nrelying anymore on\ndisocunts",
    author: "Luca G.",
  };

  return (
    <Card className="flex-1 self-stretch bg-federiconigrowixstudiocommillbrook rounded-[13.5px] border-0">
      <CardContent className="flex flex-col items-center px-[24.98px] py-6">
        <div className="w-full max-w-[266.63px]">
          <div className="flex justify-center mb-[10px]">
            <div className="w-8 h-8 flex items-center justify-center rotate-180">
              <img
                className="w-8 h-8"
                alt="Quote icon"
                src="/component-1-2.svg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-[15.85px]">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-[20.3px] text-center tracking-[0] leading-[24.3px] whitespace-pre-line">
              {testimonialData.quote}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-base text-center tracking-[0] leading-[19.2px]">
              {testimonialData.author}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
