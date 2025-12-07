import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const CoreContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-24 md:pt-32 pb-16 px-6 md:px-12">
      <div className="section-container">
        <div className="max-w-[900px]">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase">
              Growth Marketing Agency
            </span>
          </div>

          <h1 
            className="heading-xl text-[#191818] mb-6"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            Complete Growth System
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>for DTC Brands That Want
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span className="gradient-text">Real, Sustainable Revenue</span>
          </h1>

          <p 
            className="body-lg max-w-[700px] mb-10"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            Strategy, Design, CRO, Retention & Optimization. Everything you need to scale from $200K to $1M+ without burning cash on ads.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <a
              href="https://calendly.com/federiconigro-dataspark/ecommerce"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              Get Your Free Growth Audit
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="https://gamma.app/docs/How-to-Sell-More-Without-Discounts-dzlcaxc6z3k3n4k"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-secondary"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              Download Free Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
