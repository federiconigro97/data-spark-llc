import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[9.86px] w-full">
      <div className="flex flex-col items-center pt-[1.27px] pb-[43.86px]">
        <div className="flex flex-col max-w-[822.61px] items-start">
          <div className="pt-0 pb-[0.7px] flex flex-col items-start w-full">
            <h2 className="flex items-center justify-center w-full font-federiconigro-wixstudio-com-semantic-heading-3 font-[number:var(--federiconigro-wixstudio-com-semantic-heading-3-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-heading-3-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-heading-3-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-heading-3-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-heading-3-font-style)]">
              Our Complete Growth Process
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[280px] h-[50px] items-start justify-center">
        <Button
          asChild
          className="flex items-center justify-center min-w-2.5 min-h-2.5 w-full h-full bg-[#fbb84b] hover:bg-[#fbb84b]/90 rounded-lg shadow-lg hover:shadow-xl transition-all pt-0.5 pb-0 px-0"
        >
          <a
            href="https://calendly.com/federiconigro-dataspark/ecommerce"
            rel="noopener noreferrer"
            target="_blank"
            className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[17px] text-center leading-[22.4px] whitespace-nowrap tracking-[0] px-[46.21px]"
          >
            Book Your Strategy Call
          </a>
        </Button>
      </div>
    </section>
  );
};
