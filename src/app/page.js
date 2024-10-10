"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "./components/Header";
import vector1 from "../../public/vector1.svg";
import vector2 from "../../public/vector2.svg";
import arrow1 from "../../public/arrow1.svg";
import arrow2 from "../../public/arrow2.svg";
import arrow3 from "../../public/arrow3.svg";
import whatsapp from "../../public/whatsapp_icon.svg";
import background from "../../public/background.svg";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

const data = [
  {
    id: 1,
    title: "Scale your business",
    description:
      "Don't be bottlenecked by manually handling leads. With tailor talk you can easily handle 10x leads.",
    image: arrow1,
  },
  {
    id: 2,
    title: "Reach out to existing leads",
    description:
      "Upload your existing leads data to Tailor-Talk, which will initiate and manage conversations with your leads.",
    image: arrow2,
  },
  {
    id: 3,
    title: "Gain insights on your customers",
    description:
      "Understand your customer needs better, enabling you to make more informed decisions.",
    image: arrow3,
  },
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add autoplay to the video URL if it is not already present
            if (!videoRef.current.src.includes("&autoplay=1")) {
              videoRef.current.src += "&autoplay=1";
            }
          } else {
            // Remove autoplay from the video URL
            const src = videoRef.current.src.replace("&autoplay=1", "");
            videoRef.current.src = src; // Reset the video source to stop playback
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    const videoSection = document.getElementById("videoSection");
    if (videoSection) {
      observer.observe(videoSection);
    }

    return () => {
      if (videoSection) {
        observer.unobserve(videoSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">

      
    </div>
  );
}
