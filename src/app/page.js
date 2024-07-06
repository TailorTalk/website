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
      {/* Introduction  */}
      <section
        style={{
          backgroundImage: `url(${background.src})`,
          height: "100vh",
          width: "auto",
        }}
        className="px-32 py-8"
      >
        <Header />
        <div className="flex justify-between mb-10">
          <div className="mt-20 flex flex-col text-white gap-4">
            <div className="text-5xl w-3/4 leading-tight ">
              Tailor-Talk one of the best system in SAAS.
            </div>
            <div className="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
              nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
            </div>
            <div>
              <button className="button">Demo</button>
            </div>
          </div>
          <div>
            <Image src={vector1} alt="vector1" className="h-[34vw]" />
          </div>
        </div>
      </section>
      {/* Usage  */}
      <section className="py-8 bg-white flex justify-around">
        <div>
          <Image src={vector2} alt="vector2" className="h-[34vw]" />
        </div>
        <div className="mt-16 px-32">
          <div className="text-4xl leading-tight">
            It’s helpful for operating system
          </div>
          <div className="mt-6 gap-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 mb-4">
                <div className="flex flex-row items-center">
                  <Image src={item.image} alt="arrow" className="w-6 mr-2" />
                  <p className="text-xl">{item.title}</p>
                </div>
                <p className="w-full text-sm px-8 text-[#051114]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features  */}
      <section className="py-8 flex bg-white flex-col items-center justify-around">
        <p className="text-center font-bold text-4xl w-1/2 flex flex-col items-center">
          We Provides best Feature for customar
        </p>
        <div className="flex gap-6 mt-8 flex-wrap px-32">
          <FeatureCard />
        </div>
      </section>
      {/* Footer  */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
