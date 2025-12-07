import React from "react";

const metricsData = [
  {
    label: "Open Rates",
    value: "+20-30%",
    description: "Email & SMS",
    bgColor: "bg-[#f5a623]",
  },
  {
    label: "Conversion Rate",
    value: "+18%",
    description: "Website visitors",
    bgColor: "bg-[#2d5a4a]",
  },
  {
    label: "Revenue Growth",
    value: "+40%",
    description: "Average increase",
    bgColor: "bg-[#3d3b8e]",
  },
  {
    label: "Customer LTV",
    value: "2.5x",
    description: "Lifetime value",
    bgColor: "bg-[#5a4a3d]",
  },
];

export const MainWrapperSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-8 rounded-2xl ${metric.bgColor} text-white min-h-[180px]`}
        >
          <span className="text-sm opacity-80 mb-2">{metric.description}</span>
          <span className="text-4xl font-bold mb-2">{metric.value}</span>
          <span className="text-base font-medium">{metric.label}</span>
        </div>
      ))}
    </div>
  );
};
