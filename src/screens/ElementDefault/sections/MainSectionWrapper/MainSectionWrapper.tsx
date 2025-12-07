import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const imageData = [
  {
    position: "top-9 left-[549px] w-[calc(100%_-_1117px)]",
    width: "w-[323.45px]",
    height: "h-[335.2px]",
    src: "/picture---tennis-ball-mir-lle-png.png",
    alt: "Tennis ball",
  },
  {
    position: "top-9 left-[891px] w-[calc(100%_-_937px)]",
    width: "w-[503.2px]",
    height: "h-[335.2px]",
    src: "/picture---cleanshot-2025-07-25-at-20-43-21-gif.png",
    alt: "Animation",
  },
  {
    position: "top-[389px] left-[549px] w-[calc(100%_-_937px)]",
    width: "w-[503.19px]",
    height: "h-[319.83px]",
    src: "/picture---gemini-generated-image-e9wer4e9wer4e9we-jpg.png",
    alt: "Generated image 1",
  },
  {
    position: "top-[389px] left-[1070px] w-[calc(100%_-_1117px)]",
    width: "w-[323.47px]",
    height: "h-[319.83px]",
    src: "/picture---gemini-generated-image-yrmbbryrmbbryrmb-jpg.png",
    alt: "Generated image 2",
  },
];

export const MainSectionWrapper = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative w-full">
      <div className="absolute w-full h-full top-0 left-0 bg-federiconigrowixstudiocomwild-sand" />

      <div className="relative w-full h-[745.03px]">
        <Card className="absolute w-[calc(100%_-_955px)] top-9 left-[46px] border-0 shadow-none">
          <CardContent className="flex flex-col items-start pt-[67.5px] pb-[127.32px] px-[45px] bg-federiconigrowixstudiocommillbrook rounded-xl">
            <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomgallery text-[54px] tracking-[0] leading-[70.2px]">
              We Walk Our
              <br />
              Talk
            </h2>
          </CardContent>
        </Card>

        {imageData.map((image, index) => (
          <div
            key={index}
            className={`absolute ${image.position} h-[335px] flex`}
          >
            <div
              className={`flex-1 ${image.width} flex rounded-xl overflow-hidden`}
            >
              <div
                className={`${image.width} ${image.height} flex relative flex-col items-start`}
              >
                <div
                  className={`relative self-stretch w-full ${image.height} bg-cover bg-[50%_50%]`}
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
              </div>
            </div>
          </div>
        ))}

        <Card className="absolute w-[calc(100%_-_955px)] top-[389px] left-[46px] border-0 shadow-none">
          <CardContent className="flex flex-col items-start pt-[43.89px] pb-[104.75px] px-[45px] bg-federiconigrowixstudiocomgallery rounded-xl">
            <div className="flex flex-col w-[395.13px] items-start">
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
                When we created Mirellewear.com, we had
                <br />
                one vision: reclaim modesty and elegance
                <br />
                in the fitness industry.
                <br />
                By uncovering the &quot;why&quot; we translated it
                <br />
                into every details, from photo shootings to
                <br />
                web design, making the brand
                <br />
                unforgettable.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
