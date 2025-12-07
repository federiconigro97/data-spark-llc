import React, { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-gradient-to-br ${metric.gradient} text-white min-h-[160px] md:min-h-[200px] overflow-hidden hover:scale-[1.02] hover:shadow-2xl cursor-default`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transition: 'opacity 600ms ease-out, transform 600ms ease-out',
            transitionDelay: `${index * 100}ms`
          }}
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          
          <span className="relative text-caption text-white mb-1 md:mb-2 tracking-wide uppercase">
            {metric.description}
          </span>
          <span className="relative text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tight">
            {metric.value}
          </span>
          <span className="relative text-body-sm font-medium text-white">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
};
