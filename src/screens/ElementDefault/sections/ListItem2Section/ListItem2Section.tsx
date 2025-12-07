import React from "react";

export const ListItem2Section = (): JSX.Element => {
  return (
    <div className="py-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-8 items-start">
        <h4 className="text-h4">
          Growth Audit & Strategy
        </h4>
        <p className="text-body text-gray-600">
          Complete analysis of your current funnel, identifying quick wins and long-term optimization opportunities.
        </p>
      </div>
    </div>
  );
};
