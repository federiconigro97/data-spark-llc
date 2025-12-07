import React from "react";

export const StatsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-[45.72px] py-[43.96px] relative">
      <div className="relative w-full max-w-[563.06px]">
        <div className="flex flex-col items-start mb-[46px]">
          <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[31.5px] tracking-[0] leading-[37.8px] mb-[46px]">
            Let's Talk Growth
          </h3>

          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[54px] tracking-[0] leading-[59.4px]">
            Ready to Scale
            <br />
            Profitably?
          </h2>
        </div>

        <div className="mt-[160px] w-full max-w-[495.84px]">
          <div className="rounded-[13.5px] overflow-hidden">
            <img
              src="/picture---img-6754-edited-png.png"
              alt="Profile"
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
