"use client";
import { useState } from "react";

import { featureData } from "@/data/featuresData";

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(1);

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <h2 className="mt-16 text-3xl font-bold mb-14 md:mt-0 md:text-4xl">
        What we offer
      </h2>
      <div className="flex flex-col w-full md:flex-row">
        {/* Left Side - Buttons */}
        <div className="flex items-center h-[50px] md:h-auto w-full gap-3 overflow-x-scroll md:overflow-x-hidden md:gap-0 md:w-1/3 md:flex-col">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              className={`w-full px-4 py-1 justify-center md:whitespace-normal whitespace-nowrap items-center flex md:block border-gray-300 border md:border-none bg-gray-100 md:bg-transparent rounded-full group md:rounded-l-xl md:rounded-r-xl md:p-6 hover:cursor-pointer hover:bg-gray-200 md:hover:bg-gray-100 ${
                selectedFeature === feature.id
                  ? " bg-gray-300 md:bg-gray-200 border-gray-200 border"
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
        <div className="flex items-center justify-center w-full md:w-2/3 ">
          <div className="h-[400px] md:h-full overflow-hidden rounded-md shadow-sm md:shadow-lg shadow-gray-300">
            <img
              src={featureData.find((f) => f.id === selectedFeature)?.imageUrl}
              alt="Selected Feature"
              className="object-contain w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
