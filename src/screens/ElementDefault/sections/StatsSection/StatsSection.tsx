import React from "react";

export const StatsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <span 
        className="text-[#fbb84b] text-sm font-medium tracking-wide uppercase mb-4"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        Let's Talk Growth
      </span>

      <h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#191818] leading-tight mb-8"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        Ready to Scale
        <br />
        <span className="gradient-text">Profitably?</span>
      </h2>

      <div className="w-full max-w-[350px] rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="/picture---img-6754-edited-png.png"
          alt="Profile"
          className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};
