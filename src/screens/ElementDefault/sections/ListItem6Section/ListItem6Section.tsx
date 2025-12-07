import React from "react";

export const ListItem6Section = (): JSX.Element => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-8 items-start">
        <h4 className="text-h4">
          Performance Analytics & Optimization
        </h4>
        <p className="text-body text-gray-600">
          Monthly performance reviews, A/B testing, and continuous optimization to improve every metric that matters.
        </p>
      </div>
    </div>
  );
};
