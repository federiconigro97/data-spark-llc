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

            <section className="relative w-full bg-gradient-to-b from-federiconigrowixstudiocomwild-sand to-white py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span 
                    className="inline-block px-4 py-2 rounded-full bg-[#fbb84b]/10 text-[#b8860b] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Proven Results
                  </span>
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Results you can expect
                  </h2>
                </div>
                <MainWrapperSection />
              </div>
            </section>

            <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <span 
                    className="inline-block px-4 py-2 rounded-full bg-[#3d3b8e]/10 text-[#3d3b8e] text-sm font-medium tracking-wide uppercase mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Our Services
                  </span>
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191818] leading-tight mb-4"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Your Complete Growth System
                  </h2>
                  <p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    Everything you need to scale profitably: strategy, design, retention, conversion optimization, and ongoing analytics.
                  </p>
                </div>

                <FeatureListSection />
              </div>
            </section>

            <section className="py-16 md:py-24 px-6 md:px-12 w-full bg-federiconigrowixstudiocomwild-sand">
              <div className="max-w-[1200px] mx-auto">
                <FeatureSection />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
                  <GenericListItemSection />
                  <ListItemWrapperSection />
                  <ComponentNodeSection />
                  <ListItem1Section />
                </div>
              </div>
            </section>

            <section className="py-16 md:py-20 w-full bg-gradient-to-b from-federiconigrowixstudiocomgallery to-federiconigrowixstudiocomwild-sand overflow-hidden">
              <div className="section-container">
                <p 
                  className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8"
                  style={{ fontFamily: "'Satoshi', Helvetica" }}
                >
                  Trusted by leading DTC brands
                </p>
                <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                  {logoImages.map((src, index) => (
                    <div
                      key={`logo-${index}`}
                      className="flex-shrink-0 h-8 md:h-10 flex items-center grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`Partner logo ${index + 1}`}
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
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

            <section className="py-20 md:py-28 px-6 md:px-12 w-full bg-gradient-to-b from-federiconigrowixstudiocomwild-sand to-white">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <StatsSection />
                  <div className="w-full">
                    <Card className="w-full bg-white rounded-3xl border border-black/5 shadow-xl overflow-hidden">
                      <CardContent className="p-8 md:p-10">
                        <div className="flex flex-col gap-6 w-full">
                          <div className="mb-2">
                            <span 
                              className="text-[#3d3b8e] text-sm font-medium tracking-wide uppercase"
                              style={{ fontFamily: "'Satoshi', Helvetica" }}
                            >
                              Get Started
                            </span>
                            <h2 
                              className="text-2xl md:text-3xl font-semibold text-[#191818] mt-1"
                              style={{ fontFamily: "'Satoshi', Helvetica" }}
                            >
                              Contact us
                            </h2>
                          </div>

                          <AboutUsSection />
                          <ServicesSection />
                          <TestimonialsSection />
                          <PortfolioSection />

                          <Button className="w-full bg-gradient-to-r from-[#3d3b8e] to-[#5c5aae] hover:from-[#4d4b9e] hover:to-[#6c6abe] text-white rounded-xl py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                            <span 
                              className="font-medium text-base"
                              style={{ fontFamily: "'Satoshi', Helvetica" }}
                            >
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

            <footer className="w-full bg-gradient-to-b from-white to-federiconigrowixstudiocomgallery py-16 md:py-20 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        className="w-12 h-auto"
                        alt="Data Spark Logo"
                        src="/group.png"
                      />
                      <h3 
                        className="font-semibold text-[#191818] text-xl"
                        style={{ fontFamily: "'Satoshi', Helvetica" }}
                      >
                        Data Spark LLC
                      </h3>
                    </div>
                    <p 
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Growth marketing for DTC brands
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <h4 
                      className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Our Mission
                    </h4>
                    <p 
                      className="text-gray-600 text-base leading-relaxed"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Help founders turn their origin stories into engines of sustainable growth. Every brand has a spark—our job is to ignite it and keep it burning bright.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <h4 
                      className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4"
                      style={{ fontFamily: "'Satoshi', Helvetica" }}
                    >
                      Connect
                    </h4>
                    <ContactSection />
                  </div>
                </div>

                <div className="section-divider mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <NewsletterSection />
                  <p 
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Satoshi', Helvetica" }}
                  >
                    © 2024 Data Spark LLC. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>



    </div>
  );
};
