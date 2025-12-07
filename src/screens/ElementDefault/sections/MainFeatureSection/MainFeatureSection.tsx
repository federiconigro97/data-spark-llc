import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainFeatureSection = (): JSX.Element => {
  return (
    <section className="w-full bg-federiconigrowixstudiocomwild-sand py-16 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-6">
          <Card className="bg-federiconigrowixstudiocomgigas rounded-[13.5px] border-0">
            <CardContent className="p-8 lg:p-[42px_34px_80px_34px]">
              <div className="flex flex-col gap-11">
                <h2 className="font-federiconigro-wixstudio-com-semantic-heading-2 font-[number:var(--federiconigro-wixstudio-com-semantic-heading-2-font-weight)] text-federiconigrowixstudiocomwild-sand text-[length:var(--federiconigro-wixstudio-com-semantic-heading-2-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-heading-2-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-heading-2-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-heading-2-font-style)]">
                  Why Brands
                  <br />
                  Choose Us
                </h2>

                <div className="flex flex-col gap-0">
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-[20.3px] tracking-[0] leading-[24.3px]">
                    Most agencies offer pieces of the puzzle. We bring the complete system:
                    <br />
                    strategy, design, retention marketing, conversion optimization, and analytics.
                  </p>

                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomwild-sand text-[20.3px] tracking-[0] leading-[24.3px] mt-4">
                    One partner. One vision. Measurable growth. We combine brand storytelling
                    <br />
                    with data-driven optimization to create sustainable revenue machines that
                    <br />
                    scale without burning cash on ads or constant discounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full h-[371px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                alt="Team working"
                src="/container.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 rounded-[13.5px] overflow-hidden">
            <div className="w-full h-[796px] relative">
              <div className="w-full h-full bg-[url(/picture---img-7625-jpg.png)] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
