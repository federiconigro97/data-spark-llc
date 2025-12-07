import React from "react";

export const MainSectionWrapper = (): JSX.Element => {
  return (
    <section className="w-full bg-federiconigrowixstudiocomwild-sand py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
            <div className="bg-[#5d4a3d] rounded-2xl p-8 md:p-12 flex items-center min-h-[200px]">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                We Walk Our
                <br />
                Talk
              </h2>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                When we created Mirellewear.com, we had one vision: reclaim modesty and elegance in the fitness industry. By uncovering the "why" we translated it into every detail, from photo shootings to web design, making the brand unforgettable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/picture---tennis-ball-mir-lle-png.png"
                alt="Tennis ball branding"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/picture---cleanshot-2025-07-25-at-20-43-21-gif.png"
                alt="Website showcase"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/picture---gemini-generated-image-e9wer4e9wer4e9we-jpg.png"
                alt="Product photography"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/picture---gemini-generated-image-yrmbbryrmbbryrmb-jpg.png"
                alt="Landscape photography"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
