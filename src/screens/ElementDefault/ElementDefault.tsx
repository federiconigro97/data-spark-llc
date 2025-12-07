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

const logoImages = [
  "/c837a6-a7345f501dc3422d945379f448084e05-mv2-jpg.png",
  "/c837a6-1f447c24465a4ad0bafacb8d8c9e9674-mv2-jpg.png",
  "/c837a6-a64e7be0a70c44bbbfdf0a7f4cdb71ce-mv2-jpg.png",
  "/c837a6-dd420a52f8a248feb220d6eb0abe7411-mv2-jpg.png",
  "/72bf97-2e6c89fafc834169a3c46e7f065e2892-mv2-png.png",
  "/72bf97-87d83f2e091d472f8fdc153f27f5925b-mv2-png.png",
  "/72bf97-ea7526912b134b5d92e9aa197b254059-mv2-png.png",
  "/72bf97-d2015d5c3efe4e76940b7b3bea0177a5-mv2-png.png",
  "/72bf97-e1f6332232cc48159216cf0e68db15b5-mv2-png.png",
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

            <section className="relative w-full bg-federiconigrowixstudiocomwild-sand py-20 px-12">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#191818] text-[40.5px] tracking-[0] leading-[48.6px] text-center mb-12">
                  Results you can expect
                </h2>
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

            <section className="py-12 w-full bg-federiconigrowixstudiocomgallery overflow-hidden">
              <div className="flex items-center justify-center gap-12 flex-wrap px-12">
                {logoImages.map((src, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 h-8 flex items-center"
                  >
                    <img
                      src={src}
                      alt={`Partner logo ${index + 1}`}
                      className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </section>

            <MainFeatureSection />

            <section className="py-20 px-12 w-full bg-federiconigrowixstudiocomwild-sand">
              <div className="max-w-[1200px] mx-auto">
                <HeroSection />
                <div className="mt-12 w-full">
                  <ListItem2Section />
                  <ListItem3Section />
                  <ListItem4Section />
                  <ListItem5Section />
                  <ListItem6Section />
                </div>
              </div>
            </section>

            <section className="py-16 px-12 w-full bg-white">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ListItem7Section />
                  <ListItem8Section />
                  <ListItem9Section />
                  <ListItem10Section />
                </div>
              </div>
            </section>

            <AdditionalInfoSection />

            <section className="py-20 px-12 w-full bg-federiconigrowixstudiocomwild-sand">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <StatsSection />
                  <div className="w-full">
                    <Card className="w-full bg-federiconigrowixstudiocomgallery rounded-2xl border-0">
                      <CardContent className="p-8">
                        <div className="flex flex-col gap-6 w-full">
                          <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-3xl">
                            Contact us
                          </h2>

                          <AboutUsSection />
                          <ServicesSection />
                          <TestimonialsSection />
                          <PortfolioSection />

                          <Button className="w-full bg-[#3d3b8e] hover:bg-[#3d3b8e]/90 text-white rounded-lg py-3">
                            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-base">
                              Submit
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <footer className="w-full bg-federiconigrowixstudiocomgallery py-12 px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  <div className="flex flex-col items-start">
                    <img
                      className="w-16 h-auto mb-4"
                      alt="Data Spark Logo"
                      src="/group.png"
                    />
                    <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-federiconigrowixstudiocomcod-gray text-2xl">
                      Data Spark LLC
                    </h3>
                  </div>

                  <div className="flex flex-col items-start">
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-federiconigrowixstudiocomcod-gray text-lg leading-relaxed">
                      Our mission is to help founders turn their origin stories into engines of sustainable growth. We believe every brand has a spark—our job is to ignite it and keep it burning bright.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <ContactSection />
                  </div>
                </div>

                <NewsletterSection />
              </div>
            </footer>
          </div>
        </div>
      </div>



    </div>
  );
};
