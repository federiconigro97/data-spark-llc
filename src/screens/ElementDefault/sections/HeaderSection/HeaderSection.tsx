import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Work", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Services", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Results", href: "https://federiconigro.wixstudio.com/my-site" },
  { label: "Contact", href: "https://federiconigro.wixstudio.com/my-site" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-[46.08px] py-[28.13px] bg-federiconigrowixstudiocomgallery rounded-xl backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
        <div className="flex items-center">
          <a
            href="https://federiconigro.wixstudio.com/my-site"
            rel="noopener noreferrer"
            target="_blank"
            className="[font-family:'Satoshi-MediumItalic',Helvetica] font-medium italic text-[#191818] text-[40.5px] leading-[48.6px] tracking-[0]"
          >
            dataspark
          </a>
        </div>

        <nav className="flex items-center gap-0">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="px-[33px] py-2.5 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#191818] text-base leading-[22.4px] tracking-[0] hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          className="bg-[#fbb84b] hover:bg-[#fbb84b]/90 text-federiconigrowixstudiocomcod-gray px-6 py-[18px] h-auto rounded [font-family:'Satoshi-Medium',Helvetica] font-medium text-base leading-[22.4px] tracking-[0]"
        >
          <a
            href="https://calendly.com/federiconigro-dataspark/ecommerce"
            rel="noopener noreferrer"
            target="_blank"
          >
            Claim Your Free Strategy Call
          </a>
        </Button>
      </div>
    </header>
  );
};
