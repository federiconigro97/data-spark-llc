import React from "react";

const metricsData = [
  {
    label: "Open Rates",
    value: "+20-30%",
    description: "Email & SMS",
    gradient: "from-[#f5a623] to-[#ff8f00]",
  },
  {
    label: "Conversion Rate",
    value: "+18%",
    description: "Website visitors",
    gradient: "from-[#2d5a4a] to-[#3d7a5a]",
  },
  {
    label: "Revenue Growth",
    value: "+40%",
    description: "Average increase",
    gradient: "from-[#3d3b8e] to-[#5c5aae]",
  },
  {
    label: "Customer LTV",
    value: "2.5x",
    description: "Lifetime value",
    gradient: "from-[#5a4a3d] to-[#7a6a5d]",
  },
];

export const MainWrapperSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-gradient-to-br ${metric.gradient} text-white min-h-[160px] md:min-h-[200px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-default`}
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          
          <span 
            className="relative text-xs md:text-sm opacity-90 mb-1 md:mb-2 tracking-wide uppercase"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            {metric.description}
          </span>
          <span 
            className="relative text-3xl md:text-5xl font-bold mb-1 md:mb-2 tracking-tight"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            {metric.value}
          </span>
          <span 
            className="relative text-sm md:text-base font-medium opacity-90"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
};
