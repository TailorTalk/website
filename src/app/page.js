import Image from "next/image";
import Header from "./components/Header";
import vector from "../../public/vector.svg";
import background from "../../public/background.svg";

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
              Codext one of the best system in SAAS.
            </div>
            <div className="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
              nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
            </div>
            <div>
              <button className="text-[#6D2EC9] rounded px-4 py-2 bg-white">
                Demo
              </button>
            </div>
          </div>
          <div>
            <Image src={vector} alt="vector" className="h-[34vw]" />
          </div>
        </div>
      </section>
    </div>
  );
}
