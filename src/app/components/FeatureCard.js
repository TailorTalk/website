import Image from "next/image";
import React from "react";
import feature1 from "../../../public/feature1.svg";
import feature2 from "../../../public/feature2.svg";
import feature3 from "../../../public/feature3.svg";
import feature4 from "../../../public/feature4.svg";
import next1 from "../../../public/next1.svg";

const features = [
  {
    id: 1,
    image: feature1,
    title: "Clean Code",
    description: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    id: 2,
    image: feature2,
    title: "Feature Two",
    description: "Description for feature two.",
  },
  {
    id: 3,
    image: feature3,
    title: "Feature Three",
    description: "Description for feature three.",
  },
  {
    id: 4,
    image: feature4,
    title: "Feature Four",
    description: "Description for feature four.",
  },
];

const FeatureCard = () => {
  return (
    <>
      {features.map((item) => (
        <div
          key={item.id}
          className="max-w-sm flex flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-8 px-2 items-center text-center gap-8"
        >
          <div>
            <Image src={item.image} alt={item.title} className="h-28" />
          </div>
          <div>
            <p className="text-lg">{item.title}</p>
            <p className="w-52 text-sm text-[#51565E]">{item.description}</p>
          </div>
          <div>
            <Image src={next1} alt="arrow" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
