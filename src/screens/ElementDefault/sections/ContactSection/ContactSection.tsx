import React from "react";

const contactLinks = [
  {
    label: "Instagram",
    href: null,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/103605819/admin/dashboard/",
  },
  {
    label: "Free Resources",
    href: "https://theprofitloop.com/profile/products",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col items-start gap-[0.6px]">
      {contactLinks.map((link, index) => (
        <div key={index} className="flex flex-col items-start">
          {link.href ? (
            <a
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="[font-family:'Satoshi-Regular',Helvetica] text-federiconigrowixstudiocomcod-gray text-[20.3px] leading-[24.3px] font-normal tracking-[0] hover:underline"
            >
              {link.label}
            </a>
          ) : (
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-federiconigrowixstudiocomcod-gray text-[20.3px] leading-[24.3px] font-normal tracking-[0]">
              {link.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};
