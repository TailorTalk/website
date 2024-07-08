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
    title: "Scale your business",
    description:
      "Don&apos;t be bottlenecked by manually handling leads. With tailor talk you can easily handle 10x leads.",
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
      "Understand your customers&apos; needs better, enabling you to make more informed decisions.",
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
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="px-8 md:px-32 py-8 pb-12 md:pb-20"
      >
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-8 md:mt-8">
          <div className="mt-8 md:mt-20 flex flex-col text-white gap-4 items-center md:items-start text-center md:text-left">
            <div className="text-3xl mt-12 md:text-5xl w-full leading-tight font-semibold">
              Your presales assistant
            </div>
            <div className="w-full">
              Create your customised sales assistant, which engages with leads
              and keeps you informed about their statuses. Receive real-time
              updates on critical events directly to your phone, ensuring
              you&apos;re always in the loop and ready to take action.
            </div>
            <div>
              <a href="#">
                <button className="button">Demo</button>
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
        <div className="flex justify-center flex-col items-center ">
          <div className="mt-8 hidden md:block">
            <Image src={vector2} alt="vector2" layout="responsive" />
          </div>
        </div>
        <div className="mt-36 px-4 md:px-32 flex flex-col">
          <div className="text-2xl md:text-4xl leading-tight font-semibold">
            Why do you need TailorTalk?
          </div>
          <div className="mt-6">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col  mb-6">
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
      <section className="py-8 mt-24 flex bg-white flex-col items-center justify-around">
        <p className="text-center font-semibold text-2xl md:text-4xl w-full md:w-1/2 flex flex-col items-center">
          We provide best features to you
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
