import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-3 sm:mx-4 md:mx-8 mt-3 sm:mt-4">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-[0_4px_30px_-5px_rgba(0,0,0,0.1)] border border-white/40">
          <div className="flex items-center">
            <a
              href="/"
              className="font-medium italic text-[#191818] text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight transition-opacity hover:opacity-80"
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
                className="px-5 py-2.5 rounded-lg text-[#191818]/80 text-sm font-medium leading-normal tracking-wide hover:text-[#191818] hover:bg-black/5 transition-all duration-200"
                style={{ fontFamily: "'Satoshi', Helvetica" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://calendly.com/federiconigro-dataspark/growth"
              rel="noopener noreferrer"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#fbb84b] hover:bg-[#f5a623] text-[#191818] rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(251,184,75,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(251,184,75,0.6)] hover:-translate-y-0.5"
              style={{ fontFamily: "'Satoshi', Helvetica" }}
            >
              Free Strategy Call
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#191818]" />
              ) : (
                <Menu className="w-5 h-5 text-[#191818]" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-1 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-white/40 overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col p-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-[#191818] text-base font-medium hover:bg-black/5 transition-colors"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <a
                  href="https://calendly.com/federiconigro-dataspark/growth"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center mx-2 px-4 py-3 bg-[#fbb84b] hover:bg-[#f5a623] text-[#191818] rounded-xl font-medium text-base transition-all"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Free Strategy Call
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
