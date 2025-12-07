import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Retention Marketing That Scales",
    description:
      "Email & SMS flows that nurture customers from first touch to loyal advocate. Automated sequences that generate 30-40% of total revenue.",
    image: "/picture---welcome-to-the-mud-fam-png.png",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Data-backed design improvements, A/B testing, and UX optimization that turn more visitors into buyers. Typically see 15-25% lift in 90 days.",
    image: "/picture---behaviorsegmentation-blog-articlecard-webp.png",
  },
  {
    title: "Strategic Design & Brand Positioning",
    description:
      "Store design that builds trust and converts. Clear messaging, optimized product pages, and a brand story that makes you unforgettable.",
    image: "/picture---clqo-ul4n4wdeae--edited-jpg.png",
  },
];

export const FeatureListSection = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <section ref={ref} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border-0 shadow-none bg-transparent group"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            transitionDelay: `${index * 150}ms`
          }}
        >
          <CardContent className="flex flex-col p-0">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#191818] text-center mb-2 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
