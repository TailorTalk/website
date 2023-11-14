import { BsArrowRight } from "react-icons/bs";
import HaveQuestion from "../ui/HaveQuestion";

function OutroSection() {
  return (
    <>
      <section className="max-w-6xl mx-auto ">
        <div className="mt-16 m-auto h-[250px] md:h-[290px] flex flex-col justify-center items-center bg-gray-900 text-white rounded-3xl w-[90%] gap-9 p-9">
          <h2 className="text-2xl font-bold text-center md:text-3xl">
            Transforming Chats into Experiences - Tailor Talks
          </h2>
          <a
            href="https://talkui-production.up.railway.app/login"
            target="__blank"
            className="px-3 py-2 text-gray-900 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            Join Now <BsArrowRight className="inline" />
          </a>
        </div>
      </section>
      <HaveQuestion />
    </>
  );
}

export default OutroSection;
