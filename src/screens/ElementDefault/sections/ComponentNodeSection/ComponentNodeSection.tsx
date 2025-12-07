import React from "react";

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3d3b8e] to-[#5c5aae] text-white min-h-[160px] sm:min-h-[180px] md:min-h-[200px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-default">
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      
      <span 
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 tracking-tight"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        +42%
      </span>
      <p 
        className="relative text-xs sm:text-sm md:text-base text-center text-white leading-relaxed"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        Average customer list growth through strategic optimization
      </p>
    </div>
  );
};
