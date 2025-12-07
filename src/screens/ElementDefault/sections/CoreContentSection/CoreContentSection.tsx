import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export const CoreContentSection = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full pt-24 md:pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-[600px]">
            <div 
              className="mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                transitionDelay: '100ms'
              }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase">
                Growth Marketing Partner
              </span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-[#191818] mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                transitionDelay: '200ms'
              }}
            >
              Complete Growth System for DTC Brands That Want{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fbb84b] to-[#ff8a00]">Real, Sustainable Revenue</span>
            </h1>

            <p 
              className="text-body-lg text-gray-600 mb-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                transitionDelay: '400ms'
              }}
            >
              Strategy, Design, CRO, Retention & Optimization. Everything you need to scale from $200K to $1M+ without burning cash on ads.
            </p>

            <div 
              className="flex gap-4 items-center flex-wrap"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                transitionDelay: '600ms'
              }}
            >
              <a
                href="https://calendly.com/federiconigro-dataspark/growth"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl font-medium text-[#191818] text-body-lg shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Get Your Free Growth Audit
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="https://gamma.app/docs/How-to-Sell-More-Without-Discounts-dzlcaxc6z3k3n4k"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent rounded-xl font-medium text-[#191818] text-body-lg border-2 border-[#191818]/20 hover:border-[#191818]/40 hover:bg-[#191818]/5 transition-all duration-300"
              >
                Download Free Guide
              </a>
            </div>
          </div>

          <div 
            className="hidden lg:block relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.98)',
              transition: 'opacity 800ms ease-out, transform 800ms ease-out',
              transitionDelay: '400ms'
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src="/picture---img-7625-jpg.png"
                alt="Growth marketing results"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#fbb84b]/20 rounded-full blur-3xl animate-pulse-subtle" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#3d3b8e]/10 rounded-full blur-3xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};
