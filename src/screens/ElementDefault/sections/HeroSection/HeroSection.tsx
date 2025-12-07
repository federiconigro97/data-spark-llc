import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <h2 
        className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#191818] leading-tight mb-8"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        Our Complete Growth Process
      </h2>

      <Button
        asChild
        className="bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl px-8 py-4 h-auto shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] transition-all duration-300 hover:-translate-y-0.5"
      >
        <a
          href="https://calendly.com/federiconigro-dataspark/ecommerce"
          rel="noopener noreferrer"
          target="_blank"
          className="font-medium text-[#191818] text-base md:text-lg"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Book Your Strategy Call
        </a>
      </Button>
    </div>
  );
};
