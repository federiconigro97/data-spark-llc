import React from "react";
import { Button } from "../../../../components/ui/button";

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative w-full bg-federiconigrowixstudiocomwild-sand">
      <div className="flex items-start justify-center px-[46.08px] py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-[1347.84px]">
          <div className="flex flex-col items-start justify-center relative">
            <div className="relative w-full rounded-xl overflow-hidden">
              <div className="w-full flex relative flex-col items-start">
                <div className="aspect-[674/423] bg-[url(/picture---90shots-so-png.png)] relative w-full bg-cover bg-center" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center px-0 py-[60px] justify-center">
            <div className="flex flex-col max-w-[471.73px] gap-[74px]">
              <div className="flex flex-col gap-0">
                <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomgigas text-[27px] tracking-[0] leading-[32.4px] mb-[9.99px]">
                  Stop Guessing. Start Growing.
                </h3>

                <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[31.5px] tracking-[0] leading-[37.8px] mb-[11.25px]">
                  The All-In-One Growth System
                  <br />
                  DTC Brands Actually Need
                </h2>

                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
                  Strategy + Design + Retention + CRO + Analytics.
                  <br />
                  Everything working together to scale your revenue
                  <br />
                  predictably and profitably.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Button
                  variant="outline"
                  className="w-[307.23px] h-12 bg-federiconigrowixstudiocomcasablanca rounded border border-solid border-[#fbb84b] hover:bg-federiconigrowixstudiocomcasablanca-70"
                  asChild
                >
                  <a
                    href="https://gamma.app/docs/How-to-Sell-More-Without-Discounts-dzlcaxc6z3k3n4k"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-federiconigro-wixstudio-com-semantic-link font-[number:var(--federiconigro-wixstudio-com-semantic-link-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-link-font-size)] text-center tracking-[var(--federiconigro-wixstudio-com-semantic-link-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-link-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-link-font-style)]"
                  >
                    Get our Free 60-Pages Guide to Scale
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
