import React from "react";

export const FeatureSection = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-12 mb-4">
      <div className="flex flex-col items-start gap-2 flex-1">
        <p 
          className="text-sm text-gray-500 uppercase tracking-widest"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Proven metrics from real client partnerships
        </p>
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#191818] leading-tight"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Results That Move The Needle
        </h2>
      </div>

      <div className="flex-shrink-0 max-w-md">
        <p 
          className="text-gray-600 text-base leading-relaxed"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          These aren't vanity metrics. Every improvement is tracked, tested, and optimized to maximize your ROI and sustainable growth trajectory.
        </p>
      </div>
    </div>
  );
};
