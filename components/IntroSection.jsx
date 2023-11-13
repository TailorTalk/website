import { BsArrowRight } from "react-icons/bs";

function IntroSection() {
  return (
    <section className="mx-auto max-w-6xl md:mt-2 md:mb-16 md:grid md:h-[680px] md:grid-cols-7 md:pl-5">
      {/* Left Content */}
      <div className="flex items-center justify-between space-x-8 md:col-span-4">
        <div className="flex flex-col justify-center h-[70%] gap-8">
          <h1 className="text-2xl font-bold md:text-7xl">
            <span className="mr-4">We</span>
            <span className="relative z-10 text-[#4764FC]">Tailor</span>
            <br />
            <span className="relative z-10">Your</span>
            <span className="ml-4 mr-2 text-[#4764FC]">Talks</span>
          </h1>

          <p className="max-w-xl col-start-1 row-start-3 text-lg text-gray-600">
            Tailor-Talk specializes in creating custom chatbots and agents
            designed for specific business needs.
          </p>
          <a
            className="w-fit px-4 py-4 text-md bg-[#4764FC] text-white transition-all rounded-md shadow-lg hover:bg-[#5f79fd]"
            href="https://talkui-production.up.railway.app/assets"
            target="__blank"
          >
            Build your Chatbot <BsArrowRight className="inline" />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="hidden md:col-span-3 md:flex md:justify-center md:items-center">
        <img className="h-[500px]" src="/landing.png" />
      </div>
    </section>
  );
}

export default IntroSection;
