import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center pt-[56.46px] pb-[57.01px] px-0 relative z-[2]">
      <div className="flex flex-col items-start pt-[89px] pb-[98.53px] px-[45px] relative w-full">
        <div className="flex flex-col max-w-[99999px] w-full items-start pt-0 pb-[19.61px] px-0 relative">
          <div className="flex-col items-start pt-0 pb-[0.8px] px-0 w-full flex relative">
            <h2 className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[31.5px] tracking-[0] leading-[37.8px]">
              The Growth Partner DTC Brands Trust
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start relative w-full mt-[-0.85px]">
          <div className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#191818] text-[20.3px] tracking-[0] leading-[24.3px]">
            We're the complete growth system for DTC brands doing $200K-$2M who want
            <br />
            predictable revenue without constant discounting or paid ad dependency.
          </div>
        </div>
      </div>
    </section>
  );
};
