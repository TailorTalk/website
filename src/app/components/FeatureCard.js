import Image from "next/image";
import React, { useState } from "react";
import feature1 from "../../../public/feature1.svg";
import feature2 from "../../../public/feature2.svg";
import feature3 from "../../../public/feature3.svg";
import feature4 from "../../../public/feature4.svg";
import next1 from "../../../public/next1.svg";
import next2 from "../../../public/next2.svg";
import wavyPattern from "../../../public/wavy-pattern.svg"; // Import your wavy pattern image

const features = [
  {
    id: 1,
    image: feature1,
    title: "Easy to setup",
    description:
      "Set up your assistant using simple natural language commands.",
  },
  {
    id: 2,
    image: feature2,
    title: "Be updated on phone",
    description:
      "Assistant keeps you informed about key events directly on your WhatsApp.",
  },
  {
    id: 3,
    image: feature3,
    title: "Dashboard",
    description:
      "Monitor your assistant's performance and access additional features on our dashboard.",
  },
  {
    id: 4,
    image: feature4,
    title: "Fully secured",
    description:
      "We prioritize the security of your customer data with robust measures.",
  },
];

const FeatureCard = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {features.map((item) => (
        <div
          key={item.id}
          className={`relative max-w-sm flex flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-10 px-2 items-center text-center gap-8 ${
            hoveredId === item.id ? "text-white" : "text-black"
          }`}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            position: "relative",
          }}
        >
          {hoveredId === item.id && (
            <div
              className="absolute bottom-0 left-0 w-full h-56" // Increased height
              style={{
                backgroundImage: `url(${wavyPattern.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: 0,
              }}
            />
          )}
          <div style={{ zIndex: 1 }}>
            <Image src={item.image} alt={item.title} className="h-28" />
          </div>
          <div style={{ zIndex: 1 }}>
            <p className="text-lg">{item.title}</p>
            <p className="w-52 text-sm">{item.description}</p>
          </div>
          <div style={{ zIndex: 1 }}>
            <Image src={hoveredId === item.id ? next2 : next1} alt="arrow" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
