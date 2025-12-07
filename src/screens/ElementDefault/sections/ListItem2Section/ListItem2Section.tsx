import React from "react";

export const ListItem2Section = (): JSX.Element => {
  return (
    <div className="py-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-8 items-start">
        <h3 
          className="text-lg md:text-xl font-semibold text-[#191818]"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Growth Audit & Strategy
        </h3>
        <p 
          className="text-gray-600 text-base leading-relaxed"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Complete analysis of your current funnel, identifying quick wins and long-term optimization opportunities.
        </p>
      </div>
    </div>
  );
};
