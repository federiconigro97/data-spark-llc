import React from "react";

export const ListItem1Section = (): JSX.Element => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#5a4a3d] to-[#7a6a5d] text-white min-h-[160px] sm:min-h-[180px] md:min-h-[200px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-default">
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      
      <span 
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 tracking-tight"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        -28%
      </span>
      <p 
        className="relative text-xs sm:text-sm md:text-base text-center text-white leading-relaxed"
        style={{ fontFamily: "'Satoshi', Helvetica" }}
      >
        Reduction in CAC through retention marketing and referrals
      </p>
    </div>
  );
};
