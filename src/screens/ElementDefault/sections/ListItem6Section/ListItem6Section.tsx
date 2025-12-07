import React from "react";

export const ListItem6Section = (): JSX.Element => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-8 items-start">
        <h3 
          className="text-lg md:text-xl font-semibold text-[#191818]"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Performance Analytics & Optimization
        </h3>
        <p 
          className="text-gray-600 text-base leading-relaxed"
          style={{ fontFamily: "'Satoshi', Helvetica" }}
        >
          Monthly performance reviews, A/B testing, and continuous optimization to improve every metric that matters.
        </p>
      </div>
    </div>
  );
};
