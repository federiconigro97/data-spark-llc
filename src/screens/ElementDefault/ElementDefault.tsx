import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AdditionalInfoSection } from "./sections/AdditionalInfoSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContactSection } from "./sections/ContactSection";
import { CoreContentSection } from "./sections/CoreContentSection";
import { FeatureListSection } from "./sections/FeatureListSection";
import { FeatureSection } from "./sections/FeatureSection";
import { GenericListItemSection } from "./sections/GenericListItemSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ListItem1Section } from "./sections/ListItem1Section";
import { ListItem2Section } from "./sections/ListItem2Section";
import { ListItem3Section } from "./sections/ListItem3Section";
import { ListItem4Section } from "./sections/ListItem4Section";
import { ListItem5Section } from "./sections/ListItem5Section";
import { ListItem6Section } from "./sections/ListItem6Section";
import { ListItem7Section } from "./sections/ListItem7Section";
import { ListItem8Section } from "./sections/ListItem8Section";
import { ListItem9Section } from "./sections/ListItem9Section";
import { ListItem10Section } from "./sections/ListItem10Section";
import { ListItemWrapperSection } from "./sections/ListItemWrapperSection";
import { ListWrapperSection } from "./sections/ListWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainFeatureSection } from "./sections/MainFeatureSection";
import { MainSectionWrapper } from "./sections/MainSectionWrapper";
import { MainWrapperSection } from "./sections/MainWrapperSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const logoData = [
  {
    width: "w-[78px]",
    marginLeft: "ml-[18.3px]",
    src: "/c837a6-a7345f501dc3422d945379f448084e05-mv2-jpg.png",
  },
  {
    width: "w-[97px]",
    marginLeft: "ml-[40.0px]",
    src: "/c837a6-1f447c24465a4ad0bafacb8d8c9e9674-mv2-jpg.png",
  },
  {
    width: "w-[104px]",
    marginLeft: "ml-[39.2px]",
    src: "/c837a6-a64e7be0a70c44bbbfdf0a7f4cdb71ce-mv2-jpg.png",
  },
  {
    width: "w-[103px]",
    marginLeft: "ml-10",
    src: "/c837a6-dd420a52f8a248feb220d6eb0abe7411-mv2-jpg.png",
  },
  {
    width: "w-[125px]",
    marginLeft: "ml-10",
    src: "/72bf97-2e6c89fafc834169a3c46e7f065e2892-mv2-png.png",
  },
  {
    width: "w-[205px]",
    marginLeft: "ml-[39.2px]",
    src: "/72bf97-87d83f2e091d472f8fdc153f27f5925b-mv2-png.png",
  },
  {
    width: "w-[38px]",
    marginLeft: "ml-10",
    src: "/72bf97-ea7526912b134b5d92e9aa197b254059-mv2-png.png",
  },
  {
    width: "w-[75px]",
    marginLeft: "ml-[40.0px]",
    src: "/72bf97-d2015d5c3efe4e76940b7b3bea0177a5-mv2-png.png",
  },
  {
    width: "w-[74px]",
    marginLeft: "ml-[39.2px]",
    src: "/72bf97-e1f6332232cc48159216cf0e68db15b5-mv2-png.png",
  },
  {
    width: "w-[78px]",
    marginLeft: "ml-10",
    src: "/c837a6-a7345f501dc3422d945379f448084e05-mv2-jpg-1.png",
  },
  {
    width: "w-[97px]",
    marginLeft: "ml-10",
    src: "/c837a6-1f447c24465a4ad0bafacb8d8c9e9674-mv2-jpg-1.png",
  },
  {
    width: "w-[104px]",
    marginLeft: "ml-[39.2px]",
    src: "/c837a6-a64e7be0a70c44bbbfdf0a7f4cdb71ce-mv2-jpg-1.png",
  },
  {
    width: "w-[103px]",
    marginLeft: "ml-10",
    src: "/c837a6-dd420a52f8a248feb220d6eb0abe7411-mv2-jpg-1.png",
  },
  {
    width: "w-[125px]",
    marginLeft: "ml-10",
    src: "/72bf97-2e6c89fafc834169a3c46e7f065e2892-mv2-png-1.png",
  },
  {
    width: "w-[205px]",
    marginLeft: "ml-10",
    src: "/72bf97-87d83f2e091d472f8fdc153f27f5925b-mv2-png-1.png",
  },
  {
    width: "w-[38px]",
    marginLeft: "ml-[40.0px]",
    src: "/72bf97-ea7526912b134b5d92e9aa197b254059-mv2-png-1.png",
  },
  {
    width: "w-[75px]",
    marginLeft: "ml-10",
    src: "/72bf97-d2015d5c3efe4e76940b7b3bea0177a5-mv2-png-1.png",
  },
  {
    width: "w-[74px]",
    marginLeft: "ml-[39.2px]",
    src: "/72bf97-e1f6332232cc48159216cf0e68db15b5-mv2-png-1.png",
  },
  {
    width: "w-[78px]",
    marginLeft: "ml-10",
    src: "/c837a6-a7345f501dc3422d945379f448084e05-mv2-jpg-2.png",
  },
  {
    width: "w-[97px]",
    marginLeft: "ml-10",
    src: "/c837a6-1f447c24465a4ad0bafacb8d8c9e9674-mv2-jpg-2.png",
  },
  {
    width: "w-[104px]",
    marginLeft: "ml-10",
    src: "/c837a6-a64e7be0a70c44bbbfdf0a7f4cdb71ce-mv2-jpg-2.png",
  },
  {
    width: "w-[103px]",
    marginLeft: "ml-10",
    src: "/c837a6-dd420a52f8a248feb220d6eb0abe7411-mv2-jpg-2.png",
  },
  {
    width: "w-[125px]",
    marginLeft: "ml-[39.2px]",
    src: "/72bf97-2e6c89fafc834169a3c46e7f065e2892-mv2-png-2.png",
  },
  {
    width: "w-[205px]",
    marginLeft: "ml-10",
    src: "/72bf97-87d83f2e091d472f8fdc153f27f5925b-mv2-png-2.png",
  },
  {
    width: "w-[38px]",
    marginLeft: "ml-10",
    src: "/72bf97-ea7526912b134b5d92e9aa197b254059-mv2-png-2.png",
  },
  {
    width: "w-[75px]",
    marginLeft: "ml-10",
    src: "/72bf97-d2015d5c3efe4e76940b7b3bea0177a5-mv2-png-2.png",
  },
  {
    width: "w-[74px]",
    marginLeft: "ml-10",
    src: "/72bf97-e1f6332232cc48159216cf0e68db15b5-mv2-png-2.png",
  },
  {
    width: "w-[78px]",
    marginLeft: "ml-10",
    src: "/c837a6-a7345f501dc3422d945379f448084e05-mv2-jpg-3.png",
  },
  {
    width: "w-[97px]",
    marginLeft: "ml-10",
    src: "/c837a6-1f447c24465a4ad0bafacb8d8c9e9674-mv2-jpg-3.png",
  },
  {
    width: "w-[104px]",
    marginLeft: "ml-[39.2px]",
    src: "/c837a6-a64e7be0a70c44bbbfdf0a7f4cdb71ce-mv2-jpg-3.png",
  },
  {
    width: "w-[103px]",
    marginLeft: "ml-10",
    src: "/c837a6-dd420a52f8a248feb220d6eb0abe7411-mv2-jpg-3.png",
  },
  {
    width: "w-[125px]",
    marginLeft: "ml-10",
    src: "/72bf97-2e6c89fafc834169a3c46e7f065e2892-mv2-png-3.png",
  },
  {
    width: "w-[205px]",
    marginLeft: "ml-10",
    src: "/72bf97-87d83f2e091d472f8fdc153f27f5925b-mv2-png-3.png",
  },
  {
    width: "w-[38px]",
    marginLeft: "ml-10",
    src: "/72bf97-ea7526912b134b5d92e9aa197b254059-mv2-png-3.png",
  },
  {
    width: "w-[75px]",
    marginLeft: "ml-10",
    src: "/72bf97-d2015d5c3efe4e76940b7b3bea0177a5-mv2-png-3.png",
  },
  {
    width: "w-[74px]",
    marginLeft: "ml-[39.2px]",
    src: "/72bf97-e1f6332232cc48159216cf0e68db15b5-mv2-png-3.png",
  },
];

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="relative w-full bg-federiconigrowixstudiocomwhite">
      <div className="flex flex-col w-full items-start">
        <div className="flex flex-col items-start relative w-full">
          <div className="w-full bg-federiconigrowixstudiocomwild-sand">
            <HeaderSection />
            <CoreContentSection />

            <img
              className="w-full h-auto"
              alt="Main section"
              src="/main---section.svg"
            />

            <section className="relative w-full bg-federiconigrowixstudiocomwild-sand">
              <div className="flex items-start justify-center w-full px-[46.08px]">
                <MainContentSection />
                <ListWrapperSection />
              </div>
            </section>

            <MainSectionWrapper />
            <ImageGallerySection />

            <section className="relative w-full bg-federiconigrowixstudiocomwild-sand px-[46.08px]">
              <div className="flex w-full items-start">
                <div className="flex flex-col w-[673.92px] items-center pl-[56.76px] pr-[166.44px] pt-[261.04px] pb-[271.07px]">
                  <div className="flex flex-col w-[450.72px] items-start gap-[0.01px]">
                    <div className="flex flex-col w-full items-start pt-0 pb-3 px-0">
                      <div className="pt-0 pb-[0.59px] px-0 flex flex-col items-start w-full">
                        <h2 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[40.5px] tracking-[0] leading-[48.6px]">
                          Results you can expect
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-col w-[131.33px] items-center pl-[14.52px] pr-[70.89px] pt-[12.06px] pb-[12.07px] relative">
                      <div className="absolute w-full h-full top-0 left-0 bg-federiconigrowixstudiocomcasablanca rounded-[1123.88px]" />
                      <div className="relative w-[45.92px] h-[45.92px] bg-[url(/component-1.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>

                <MainWrapperSection />
              </div>
            </section>

            <section className="flex flex-col items-start px-[45px] py-[45px] relative w-full bg-federiconigrowixstudiocomgallery">
              <div className="flex flex-col items-start px-0 py-[31.5px] w-full mt-[-0.01px]">
                <div className="flex flex-col w-full max-w-[1200px] mx-auto items-center">
                  <div className="flex-col items-center pt-0 pb-[0.8px] px-0 w-full flex">
                    <h2 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[40.5px] tracking-[0] leading-[48.6px] text-center">
                      Your Complete Growth System
                    </h2>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[28.3px] text-center mt-4 max-w-[800px]">
                      Everything you need to scale profitably: strategy, design, retention, conversion optimization, and ongoing analytics.
                    </p>
                  </div>
                </div>
              </div>

              <FeatureListSection />
            </section>

            <section className="flex flex-col items-start gap-[67.5px] pt-[14.4px] pb-[60px] px-[46.08px] relative w-full bg-federiconigrowixstudiocomwild-sand">
              <FeatureSection />
              <div className="flex flex-wrap gap-[0px_14.6px] w-full items-start">
                <GenericListItemSection />
                <ListItemWrapperSection />
                <ComponentNodeSection />
                <ListItem1Section />
              </div>
            </section>

            <section className="flex flex-col items-center px-0 py-[48.62px] relative w-full bg-federiconigrowixstudiocomgallery">
              <div className="flex flex-col w-full items-start justify-center">
                <div className="relative w-full">
                  <div className="flex flex-col w-full items-start justify-center">
                    <div className="relative w-full overflow-hidden">
                      <div className="flex flex-col w-full items-start">
                        <div className="relative w-full overflow-hidden overflow-x-scroll">
                          <div className="relative w-full flex">
                            {logoData.map((logo, index) => (
                              <div
                                key={`logo-${index}`}
                                className={`${logo.width} ${logo.marginLeft} flex mt-5 h-[21px] flex-col items-start`}
                              >
                                <div className="flex flex-col items-start w-full">
                                  <div
                                    className={`relative ${logo.width} h-[21px] bg-cover bg-[50%_50%]`}
                                    style={{
                                      backgroundImage: `url(${logo.src})`,
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <MainFeatureSection />

            <section className="flex flex-col items-start gap-[0.01px] px-[46.08px] py-[87px] relative w-full bg-federiconigrowixstudiocomwild-sand">
              <HeroSection />
              <div className="flex flex-col items-start pt-[33.78px] pb-[33.58px] px-0 w-full">
                <div className="flex-col w-full flex items-start">
                  <ListItem2Section />
                  <ListItem3Section />
                  <ListItem4Section />
                  <ListItem5Section />
                  <ListItem6Section />
                </div>
              </div>
            </section>

            <section className="flex flex-col items-start relative w-full">
              <div className="flex flex-col items-center pl-[47.92px] pr-[45.45px] pt-[57.15px] pb-[56.88px] w-full">
                <div className="flex flex-col w-[1346.63px] items-start">
                  <div className="flex justify-center gap-6 w-full items-start">
                    <ListItem7Section />
                    <ListItem8Section />
                    <ListItem9Section />
                    <ListItem10Section />
                  </div>
                </div>
              </div>
            </section>

            <AdditionalInfoSection />

            <section className="flex flex-col items-start relative w-full bg-federiconigrowixstudiocomwild-sand">
              <div className="flex items-start justify-center px-0 py-[46.08px] w-full">
                <StatsSection />
                <div className="flex flex-col w-[720px] items-center pt-[83.99px] pb-[84px] px-0">
                  <div className="flex flex-col w-[666px] items-start">
                    <Card className="w-full bg-federiconigrowixstudiocomgallery rounded-2xl border-0">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-start gap-6 w-full">
                          <div className="flex flex-col items-start w-full">
                            <h2 className="flex items-center justify-center w-full mt-[-1.00px] font-federiconigro-wixstudio-com-semantic-heading-1 font-[number:var(--federiconigro-wixstudio-com-semantic-heading-1-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-heading-1-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-heading-1-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-heading-1-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-heading-1-font-style)]">
                              Contact us
                            </h2>
                          </div>

                          <AboutUsSection />
                          <ServicesSection />
                          <TestimonialsSection />
                          <PortfolioSection />

                          <div className="flex flex-col items-start pl-[321px] pr-0 py-0 w-full">
                            <Button className="w-full bg-[#3d3b8e] hover:bg-[#3d3b8e]/90 text-federiconigrowixstudiocomwild-sand rounded pt-2.5 pb-[11px] px-[14.84px]">
                              <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-base text-center leading-[19.2px] whitespace-nowrap">
                                Submit
                              </span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <footer className="flex flex-col h-[450px] items-start justify-center relative w-full bg-federiconigrowixstudiocomgallery">
              <div className="w-full h-[450px]">
                <div className="flex flex-col items-start absolute top-[45px] left-[45px]">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col w-[79.25px] h-[60.47px] items-start pt-0 pb-2 px-0">
                      <div className="w-[79.25px] h-[52.47px]">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="mt-0 h-[52.47px] w-[79.25px] relative">
                            <img
                              className="absolute w-[80.78%] h-[112.35%] top-[-6.17%] left-[9.40%]"
                              alt="Group"
                              src="/group.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-0 pb-[0.8px] px-0 -mt-px flex flex-col items-start w-full">
                      <h3 className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-[31.5px] tracking-[0] leading-[37.8px]">
                        Data Spark LLC
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start absolute top-[45px] left-[730px]">
                  <div className="flex flex-col w-[559.7px] items-start">
                    <div className="flex flex-col items-start pt-0 pb-[0.6px] px-0 w-full">
                      <p className="flex items-center justify-center w-full mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-[20.3px] tracking-[0] leading-[24.3px]">
                        Our mission is to help founders turn their origin
                        stories into
                        <br />
                        engines of sustainable growth. We believe every brand
                        has a<br />
                        spark—our job is to ignite it and keep it burning
                        bright.
                      </p>
                    </div>
                  </div>
                </div>

                <ContactSection />
                <NewsletterSection />
              </div>
            </footer>
          </div>
        </div>
      </div>



    </div>
  );
};
