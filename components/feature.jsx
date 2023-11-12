"use client";
import { useState } from "react";

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState("0");

  const featureData = [
    {
      id: "0",
      title: "Customize behaviour",
      description: "Customize behaviour to achive custom business needs.",
      imageUrl: "/feature1.png",
    },
    {
      id: "1",
      title: "Customize appearance",
      description: "Customize appearance to match your brand's identity",
      imageUrl: "/feature2.png",
    },
    {
      id: "2",
      title: "Collect leads",
      description:
        "Set yout chatbot to collect leads and follow up with them later.",
      imageUrl: "/feature3.png",
    },
    {
      id: "3",
      title: "Get insights",
      description: "Get insights on your chatbot's performance and improve it.",
      imageUrl: "/feature4.png",
    },
    {
      id: "4",
      title: "Intigrate with other systems",
      description: "Intigrate the bot with your Website, Whatsapp, Slack etc.",
      imageUrl: "/feature5.png",
    },
    // Add more features as needed
  ];

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <h2 className="mt-8 text-xl font-bold mb-14 md:mt-0 md:text-4xl">
        Elevate Your Chatbot with Tailor-Talk Features
      </h2>
      <div className="flex w-full">
        {/* Left Side - Buttons */}
        <div className="flex flex-col items-center w-1/3 space-y-1">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              className={`w-full px-4 py-1 rounded-full group lg:rounded-l-xl lg:rounded-r-xl lg:p-6 hover:cursor-pointer hover:bg-gray-100 ${
                selectedFeature === feature.id
                  ? "bg-gray-100 border-gray-200 border"
                  : ""
              }`}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <h3 className="text-sm sm:font-semibold sm:text-lg lg:text-xl">
                {feature.title}
              </h3>
              <p className="hidden mt-2 text-gray-700 text-md lg:block">
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
