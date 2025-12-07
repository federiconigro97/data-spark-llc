import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
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
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center w-full text-center">
      <h2 
        className="text-h1 mb-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        }}
      >
        Our Complete Growth Process
      </h2>

      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)',
          transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          transitionDelay: '200ms'
        }}
      >
        <Button
          asChild
          className="bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl px-8 py-4 h-auto shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] transition-all duration-300 hover:-translate-y-1"
        >
          <a
            href="https://calendly.com/federiconigro-dataspark/growth"
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-[#191818] text-body-lg"
          >
            Book Your Strategy Call
          </a>
        </Button>
      </div>
    </div>
  );
};
