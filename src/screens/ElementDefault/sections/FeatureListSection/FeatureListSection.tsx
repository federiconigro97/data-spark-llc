import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Retention Marketing\nThat Scales",
    description:
      "Email & SMS flows that nurture customers from first\ntouch to loyal advocate. Automated sequences that\ngenerate 30-40% of total revenue.",
    image: "/picture---welcome-to-the-mud-fam-png.png",
  },
  {
    title: "Conversion Rate\nOptimization",
    description:
      "Data-backed design improvements, A/B testing, and\nUX optimization that turn more visitors into buyers.\nTypically see 15-25% lift in 90 days.",
    image: "/picture---behaviorsegmentation-blog-articlecard-webp.png",
  },
  {
    title: "Strategic Design &\nBrand Positioning",
    description:
      "Store design that builds trust and converts. Clear\nmessaging, optimized product pages, and a brand\nstory that makes you unforgettable.",
    image: "/picture---clqo-ul4n4wdeae--edited-jpg.png",
  },
];

export const FeatureListSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center gap-5 mt-[-0.01px]">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="flex-1 max-w-[436.67px] border-0 shadow-none bg-transparent"
        >
          <CardContent className="flex flex-col items-start pt-10 pb-0 px-0">
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col max-w-[99999.5px] items-start pl-[0.5px] pr-0 pt-0 pb-[23.64px] w-full">
                <h3 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[33.8px] tracking-[0] leading-[37.1px] whitespace-pre-line">
                  {feature.title}
                </h3>
              </div>

              <div className="flex flex-col max-w-[99999px] w-[342.09px] items-start pt-0 pb-[48.04px] px-0">
                <p className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomblack text-sm tracking-[0] leading-[19.2px] whitespace-pre-line">
                  {feature.description}
                </p>
              </div>

              <div className="w-full h-[403.17px]">
                <div className="w-full h-full flex rounded-xl overflow-hidden">
                  <div className="flex w-full h-full relative flex-col items-start">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
