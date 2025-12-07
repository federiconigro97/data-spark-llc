import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const CoreContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-24 md:pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-[600px]">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase">
                Growth Marketing Partner
              </span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-[#191818] mb-6"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              Complete Growth System for DTC Brands That Want{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fbb84b] to-[#ff8a00]">Real, Sustainable Revenue</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              Strategy, Design, CRO, Retention & Optimization. Everything you need to scale from $200K to $1M+ without burning cash on ads.
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <a
                href="https://calendly.com/federiconigro-dataspark/growth"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fbb84b] hover:bg-[#f5a623] rounded-xl font-medium text-[#191818] text-lg transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(251,184,75,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(251,184,75,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Get Your Free Growth Audit
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="https://gamma.app/docs/How-to-Sell-More-Without-Discounts-dzlcaxc6z3k3n4k"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent rounded-xl font-medium text-[#191818] text-lg transition-all duration-300 border-2 border-[#191818]/20 hover:border-[#191818]/40 hover:bg-[#191818]/5"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Download Free Guide
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/picture---img-7625-jpg.png"
                alt="Growth marketing results"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#fbb84b]/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#3d3b8e]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
