import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[40.5px] tracking-[0] leading-[48.6px] text-center mb-8">
        Our Complete Growth Process
      </h2>

      <Button
        asChild
        className="bg-[#fbb84b] hover:bg-[#fbb84b]/90 rounded-lg px-8 py-3 h-auto"
      >
        <a
          href="https://calendly.com/federiconigro-dataspark/ecommerce"
          rel="noopener noreferrer"
          target="_blank"
          className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[17px] text-center"
        >
          Book Your Strategy Call
        </a>
      </Button>
    </div>
  );
};
