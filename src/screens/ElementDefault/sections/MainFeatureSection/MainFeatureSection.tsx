import React from "react";

export const MainFeatureSection = (): JSX.Element => {
  return (
    <section className="w-full bg-federiconigrowixstudiocomwild-sand py-20 md:py-28 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="relative bg-gradient-to-br from-[#3d3b8e] to-[#2a2960] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fbb84b]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col gap-8">
              <h2 
                className="text-4xl md:text-5xl font-semibold text-white leading-tight"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Why Brands
                <br />
                Choose Us
              </h2>

              <div className="flex flex-col gap-6 text-white/90">
                <p 
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Most agencies offer pieces of the puzzle. We bring the complete system:
                  strategy, design, retention marketing, conversion optimization, and analytics.
                </p>

                <p 
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  One partner. One vision. Measurable growth. We combine brand storytelling
                  with data-driven optimization to create sustainable revenue machines that
                  scale without burning cash on ads or constant discounts.
                </p>
              </div>

              <a
                href="https://calendly.com/federiconigro-dataspark/ecommerce"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/30"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                Learn More About Our Approach
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Team working"
                src="/container.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full min-h-[500px] lg:min-h-full relative">
              <div className="w-full h-full bg-[url(/picture---img-7625-jpg.png)] bg-cover bg-center transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
