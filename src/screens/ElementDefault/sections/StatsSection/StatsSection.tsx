import React from "react";

export const StatsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[31.5px] tracking-[0] leading-[37.8px] mb-6">
        Let's Talk Growth
      </h3>

      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-federiconigrowixstudiocomcod-gray text-[54px] tracking-[0] leading-[59.4px] mb-12">
        Ready to Scale
        <br />
        Profitably?
      </h2>

      <div className="w-full max-w-[400px] rounded-xl overflow-hidden">
        <img
          src="/picture---img-6754-edited-png.png"
          alt="Profile"
          className="w-full h-auto aspect-square object-cover"
        />
      </div>
    </div>
  );
};
