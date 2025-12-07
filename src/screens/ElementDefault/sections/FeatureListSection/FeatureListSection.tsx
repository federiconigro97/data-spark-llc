import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Retention Marketing\nThat Scales",
    description:
      "Email & SMS flows that nurture customers from first\ntouch to loyal advocate. Automated sequences that\ngenerate 30-40% of total revenue.",
    image: "/picture---welcome-to-the-mud-fam-png.png",
  },
  {
    title: "Conversion Rate\nOptimization",
    description:
      "Data-backed design improvements, A/B testing, and\nUX optimization that turn more visitors into buyers.\nTypically see 15-25% lift in 90 days.",
    image: "/picture---behaviorsegmentation-blog-articlecard-webp.png",
  },
  {
    title: "Strategic Design &\nBrand Positioning",
    description:
      "Store design that builds trust and converts. Clear\nmessaging, optimized product pages, and a brand\nstory that makes you unforgettable.",
    image: "/picture---clqo-ul4n4wdeae--edited-jpg.png",
  },
];

export const FeatureListSection = (): JSX.Element => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border-0 shadow-none bg-transparent"
        >
          <CardContent className="flex flex-col p-0">
            <div className="mb-6">
              <h3 className="text-h3 text-center mb-4">
                {feature.title.replace('\n', ' ')}
              </h3>
              <p className="text-body-sm text-gray-600 text-center">
                {feature.description.replace(/\n/g, ' ')}
              </p>
            </div>

            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
