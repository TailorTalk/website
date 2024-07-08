"use client";
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
    title: "Ultra Fast and Secure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi",
    image: arrow1,
  },
  {
    id: 2,
    title: "Allows customization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi",
    image: arrow2,
  },
  {
    id: 3,
    title: "Smart contract",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi",
    image: arrow3,
  },
];

export default function Home() {
  return (
    <div className="">
      {/* Introduction */}
      <section
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "fit-content"
        }}
        className="px-8 md:px-32 py-8"
      >
        <Header />
        <div className="flex flex-col md:flex-row justify-between mb-10 mt-16 md:mt-32">
          <div className="mt-8 md:mt-20 flex flex-col text-white gap-4">
            <div className="text-3xl md:text-5xl w-full md:w-3/4 leading-tight">
              TailorTalk one of the best system in SAAS.
            </div>
            <div className="w-full md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
              nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
            </div>
            <div>
              <a href="">
                <button className="button">Demo</button>
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src={vector1}
              alt="vector1"
              className="h-[50vw] md:h-[34vw]"
            />
          </div>
        </div>
      </section>
      {/* Usage */}
      <section className="py-8 bg-white flex flex-col md:flex-row justify-around">
        <div className="mt-16 px-4 md:px-0">
          <Image src={vector2} alt="vector2" className="w-full md:w-[70vw]" />
        </div>
        <div className="mt-16 px-4 md:px-32">
          <div className="text-2xl md:text-4xl leading-tight">
            It’s helpful for operating system
          </div>
          <div className="mt-6 gap-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 mb-8">
                <div className="flex flex-row items-center">
                  <Image src={item.image} alt="arrow" className="w-6 mr-2" />
                  <p className="text-lg md:text-xl">{item.title}</p>
                </div>
                <p className="w-full text-sm md:text-base px-2 md:px-8 text-[#051114]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-8 flex bg-white flex-col items-center justify-around">
        <p className="text-center font-bold text-2xl md:text-4xl w-full md:w-1/2 flex flex-col items-center">
          We Provides best Feature for customar
        </p>
        <div className="flex flex-wrap gap-6 mt-8 px-4 md:px-32 mb-20 justify-center">
          <FeatureCard />
        </div>
      </section>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
