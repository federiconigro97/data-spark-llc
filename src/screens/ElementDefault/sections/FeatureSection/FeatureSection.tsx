import React from "react";

export const FeatureSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full py-[115.6px] px-8">
      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-[1318px] w-full">
        <div className="flex flex-col items-start gap-[4.41px] flex-1 max-w-[819.67px]">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-base tracking-[0] leading-[19.2px]">
            Proven metrics from real client partnerships
          </p>
          <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[33.8px] tracking-[0] leading-[40.5px]">
            Results That Move The Needle
          </h2>
        </div>

        <div className="flex flex-col items-start pt-0 lg:pt-[54.1px] max-w-[295.94px]">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#191818] text-base tracking-[0] leading-[19.2px]">
            These aren't vanity metrics. Every
            <br />
            improvement is tracked, tested, and
            <br />
            optimized to maximize your ROI and
            <br />
            sustainable growth trajectory.
          </p>
        </div>
      </div>
    </section>
  );
};
