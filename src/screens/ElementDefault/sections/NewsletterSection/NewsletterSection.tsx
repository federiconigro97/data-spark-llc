import React from "react";

const footerData = {
  address: "30 North Gould Street, Sheridan WY 82801",
  ein: "EIN: 38-4298308",
  copyright: "Copyright © 2024, Data Spark LLC. All right reserved.",
};

export const NewsletterSection = (): JSX.Element => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-0">
          <p className="font-federiconigro-wixstudio-com-satoshi-regular font-[number:var(--federiconigro-wixstudio-com-satoshi-regular-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-satoshi-regular-font-size)] tracking-[var(--federiconigro-wixstudio-com-satoshi-regular-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-satoshi-regular-line-height)] [font-style:var(--federiconigro-wixstudio-com-satoshi-regular-font-style)]">
            {footerData.address}
          </p>
          <p className="font-federiconigro-wixstudio-com-satoshi-regular font-[number:var(--federiconigro-wixstudio-com-satoshi-regular-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-satoshi-regular-font-size)] tracking-[var(--federiconigro-wixstudio-com-satoshi-regular-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-satoshi-regular-line-height)] [font-style:var(--federiconigro-wixstudio-com-satoshi-regular-font-style)]">
            {footerData.ein}
          </p>
        </div>

        <div className="flex-shrink-0">
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
