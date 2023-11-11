"use client";
import { useState } from "react";

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(
    "unlimitedChatSupport"
  );

  const featureData = [
    {
      id: "unlimitedChatSupport",
      title: "Unlimited Chat Support",
      description: "Get unlimited chat support 24/7 for your users.",
      imageUrl: "/feature1.png",
    },
    {
      id: "advancedAIIntegration",
      title: "Advanced AI Integration",
      description: "Integrate advanced A.I. capabilities into your chatbot.",
      imageUrl: "/feature2.png",
    },
    {
      id: "customizationOptions",
      title: "Customization Options",
      description: "Customize your chatbot to match your brand's identity.",
      imageUrl: "/feature3.png",
    },
    {
      id: "priorityCustomerService",
      title: "Priority Customer Service",
      description: "Enjoy priority customer service for your chatbot needs.",
      imageUrl: "/feature4.png",
    },
    {
      id: "analyticsAndReporting",
      title: "Analytics and Reporting",
      description:
        "Access analytics and reporting tools for valuable insights.",
      imageUrl: "/feature5.png",
    },
    // Add more features as needed
  ];

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <h2 className="mt-8 mb-8 text-xl font-bold md:mt-0 md:text-4xl">
        Elevate Your Chatbot with Tailor-Talk Features
      </h2>
      <div className="flex w-full">
        {/* Left Side - Buttons */}
        <div className="flex flex-col items-center w-1/3 space-y-1">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              className={`w-full px-4 py-1 rounded-full group lg:rounded-l-xl lg:rounded-r-xl lg:p-6 hover:cursor-pointer ${
                selectedFeature === feature.id
                  ? "bg-gray-100 border-gray-200 border"
                  : ""
              }`}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <h3 className="text-sm sm:font-semibold sm:text-lg lg:text-xl">
                {feature.title}
              </h3>
              <p className="hidden mt-2 text-sm text-gray-700 lg:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center w-2/3 ">
          <div className="h-full overflow-hidden rounded-md shadow-lg shadow-gray-300">
            <img
              src={featureData.find((f) => f.id === selectedFeature)?.imageUrl}
              alt="Selected Feature"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
