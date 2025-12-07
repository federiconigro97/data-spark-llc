import React from "react";

const navigationItems = [
  { label: "Work", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Services", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Results", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Contact", href: "https://federiconigro.wixstudio.com/my-site" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-4 md:mx-8 mt-4">
        <div className="flex items-center justify-between px-6 md:px-10 py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_4px_30px_-5px_rgba(0,0,0,0.1)] border border-white/40">
          <div className="flex items-center">
            <a
              href="https://federiconigro.wixstudio.com/my-site"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium italic text-[#191818] text-2xl md:text-3xl leading-tight tracking-tight transition-opacity hover:opacity-80"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              dataspark
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                className="px-5 py-2.5 rounded-lg text-[#191818]/80 text-sm font-medium leading-normal tracking-wide hover:text-[#191818] hover:bg-black/5 transition-all duration-200"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://calendly.com/federiconigro-dataspark/ecommerce"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#fbb84b] hover:bg-[#f5a623] text-[#191818] rounded-xl font-medium text-sm transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(251,184,75,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(251,184,75,0.6)] hover:-translate-y-0.5"
            style={{ fontFamily: "'Satoshi', Helvetica" }}
          >
            Free Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
};
