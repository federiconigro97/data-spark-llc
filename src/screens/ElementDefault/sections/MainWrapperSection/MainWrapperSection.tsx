import React from "react";

const metricsData = [
  {
    label: "Open rates on email & SMS",
    value: "+20-30%",
    bgColor: "bg-federiconigrowixstudiocomcasablanca",
    textColor: "text-federiconigrowixstudiocomwhite",
    labelFont: "[font-family:'Satoshi-Regular',Helvetica]",
    valueFont: "[font-family:'Satoshi-Medium',Helvetica]",
    width: "w-[33.35%]",
    top: "top-[81px]",
    left: "left-[5.19%]",
    pt: "pt-[104.39px]",
    pb: "pb-[51.71px]",
    labelWidth: "w-[163.17px]",
    labelMinWidth: "min-w-[95.49px]",
    labelPl: "pl-[0.65px]",
    labelMl: "ml-[-5.24px]",
    labelMr: "mr-[-5.24px]",
    valueMl: "",
    valueMr: "",
  },
  {
    label: "Conversion rate",
    value: "+18%",
    bgColor: "bg-federiconigrowixstudiocomkillarney",
    textColor: "text-federiconigrowixstudiocomgallery",
    labelFont: "[font-family:'Switzer-Regular',Helvetica]",
    valueFont: "[font-family:'Satoshi-Medium',Helvetica]",
    width: "w-[24.94%]",
    top: "top-[345px]",
    left: "left-[12.74%]",
    pt: "pt-[69.55px]",
    pb: "pb-[30.35px]",
    labelWidth: "w-[66.02px]",
    labelMinWidth: "",
    labelPl: "",
    labelMl: "ml-[-18.99px]",
    labelMr: "mr-[-18.99px]",
    valueMl: "ml-[-11.49px]",
    valueMr: "mr-[-11.49px]",
  },
  {
    label: "Brand voice",
    value: "Memorable",
    bgColor: "bg-federiconigrowixstudiocommillbrook",
    textColor: "text-federiconigrowixstudiocomgallery",
    labelFont: "font-federiconigro-wixstudio-com-satoshi-medium",
    valueFont: "[font-family:'Satoshi-Medium',Helvetica]",
    width: "w-[53.18%]",
    top: "top-36",
    left: "left-[40.52%]",
    pt: "pt-[171.97px]",
    pb: "pb-[120.24px]",
    labelWidth: "w-[66.08px]",
    labelMinWidth: "",
    labelPl: "",
    labelMl: "ml-[-15.96px]",
    labelMr: "mr-[-15.96px]",
    valueMl: "ml-[-54.46px]",
    valueMr: "mr-[-54.46px]",
  },
];

export const MainWrapperSection = (): JSX.Element => {
  return (
    <section className="relative self-stretch w-full">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`flex flex-col max-w-[89999.1px] ${metric.width} max-h-[89999.1px] items-center ${metric.pt} ${metric.pb} px-0 absolute ${metric.top} ${metric.left}`}
        >
          <div
            className={`absolute w-full h-full top-0 left-0 ${metric.bgColor} rounded-[1123.88px]`}
          />

          <div
            className={`flex flex-col ${metric.labelWidth} items-center pt-0 pb-[10.12px] px-0 relative flex-[0_0_auto]`}
          >
            {index === 0 ? (
              <div
                className={`inline-flex flex-col ${metric.labelMinWidth} max-w-[89999.69px] max-h-[89999.1px] items-start ${metric.labelPl} pr-0 py-0 relative flex-[0_0_auto] ${metric.labelMl} ${metric.labelMr}`}
              >
                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <p
                    className={`relative [display:-webkit-box] items-center justify-center w-fit mt-[-1.00px] ${metric.labelFont} font-normal ${metric.textColor} text-[14.4px] text-center tracking-[0] leading-[23px] whitespace-nowrap overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical]`}
                  >
                    {metric.label}
                  </p>
                </div>
              </div>
            ) : (
              <p
                className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${metric.labelMl} ${metric.labelMr} ${metric.labelFont} font-normal ${metric.textColor} text-[14.4px] tracking-[0] leading-[23px] whitespace-nowrap ${index === 2 ? "font-[number:var(--federiconigro-wixstudio-com-satoshi-medium-font-weight)] text-[length:var(--federiconigro-wixstudio-com-satoshi-medium-font-size)] tracking-[var(--federiconigro-wixstudio-com-satoshi-medium-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-satoshi-medium-line-height)] [font-style:var(--federiconigro-wixstudio-com-satoshi-medium-font-style)]" : ""}`}
              >
                {metric.label}
              </p>
            )}

            <div
              className={`inline-flex flex-col items-center relative flex-[0_0_auto] ${metric.valueMl} ${metric.valueMr} ${index === 0 ? "mt-[-0.85px]" : "mt-[-0.61px]"} ${index === 2 ? "mt-[-0.79px]" : ""} opacity-0`}
            >
              <span
                className={`${index === 2 ? "relative flex" : "w-fit"} ${metric.valueFont} font-medium ${metric.textColor} text-[34.2px] text-center leading-[34.2px] whitespace-nowrap ${index === 2 ? "items-center justify-center" : "relative flex items-center justify-center"} mt-[-1.00px] tracking-[0]`}
              >
                {metric.value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
