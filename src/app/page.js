"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "./components/Header";
import vector1 from "../../public/vector1.svg";
import vector2 from "../../public/vector2.svg";
import arrow1 from "../../public/arrow1.svg";
import arrow2 from "../../public/arrow2.svg";
import arrow3 from "../../public/arrow3.svg";
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
    <div className="">
      {/* Introduction */}
      <section
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="px-8 md:px-32 2xl:px-56 py-8 pb-12 md:pb-20 "
      >
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-8 md:mt-8">
          <div className="mt-8 md:mt-20 flex flex-col text-white gap-8 items-center md:items-start text-center md:text-left">
            <div
              className="text-3xl mt-4 md:text-6xl 2xl:text-7xl w-full leading-tight font-semibold"
              style={{ lineHeight: "1.2" }}
            >
              Your sales assistant
            </div>
            <div className="w-full text-sm lg:text-base 2xl:text-xl">
              Create your personalized B2C sales assistant that autonomously
              engages with and manages your leads. Receive real-time updates on
              critical events directly to your phone, ensuring you are always in
              the loop and ready to take action, and much more.
            </div>
            <div>
              <a href="mailto:contact@tailortalk.ai">
                <button className="button">Request Demo</button>
              </a>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center mt-4 md:mt-4">
            <div className="mt-4 mb-12 md:mt-4 hidden md:block">
              <Image src={vector1} alt="vector1" layout="responsive" />
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center flex-col items-center">
          <div className="mt-10 hidden pr-0 md:block w-[60vw] 2xl:pr-20">
            <Image src={vector2} alt="vector2" layout="responsive" />
          </div>
        </div>

        <div className="mt-36 px-4 md:px-32 flex flex-col 2xl:mt-[260px]">
          <div
            className="text-2xl md:text-4xl font-semibold 2xl:text-5xl"
            style={{ lineHeight: "1.6" }}
          >
            Why do you need TailorTalk?
          </div>
          <div className="mt-10">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col mb-8 2xl:mb-16">
                <div className="flex flex-row items-center">
                  <Image src={item.image} alt="arrow" className="w-6 mr-2" />
                  <p className="text-lg font-semibold md:text-xl 2xl:text-2xl">
                    {item.title}
                  </p>
                </div>
                <p className="w-full mt-4 text-xs md:text-sm px-2 md:px-8 text-[#051114] 2xl:text-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 mt-24 flex bg-white flex-col items-center justify-around">
        <p className="text-center font-semibold text-2xl md:text-4xl w-full md:w-1/2 flex flex-col items-center">
          We provide best features to you
        </p>
        <div className="flex flex-wrap gap-6 mt-16 px-4 md:px-32 mb-20 justify-center 2xl:gap-20">
          <FeatureCard />
        </div>
      </section>

      {/* Video Section */}
      <section
        id="videoSection"
        className="py-8 mt-12 flex bg-white flex-col items-center justify-around "
      >
        <div className="flex flex-wrap gap-6 mt-16 px-4 md:px-8 lg:px-16 xl:px-32 mb-20 justify-center w-full ">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/gyobVfaHI3Q?rel=0&modestbranding=1&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
