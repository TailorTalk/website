import { BsArrowRight } from "react-icons/bs";

function IntroSection() {
  return (
    <section className="mx-auto p-7 max-w-6xl md:mt-2 md:mb-16 md:flex md:h-[680px]">
      {/* Left Content */}
      <div className="flex items-center justify-center md:w-3/5">
        <div className="flex flex-col justify-center h-full gap-4 md:gap-10">
          <h1 className="text-5xl font-bold md:text-7xl">
            <span className="mr-4">We</span>
            <span className="relative z-10 text-tailorBlue-500">Tailor</span>
            <br />
            <span className="relative z-10">Your</span>
            <span className="ml-4 mr-2 text-tailorBlue-500">Talks</span>
          </h1>

          <p className="max-w-xl text-lg text-gray-600 ">
            Tailor-Talk specializes in creating custom chatbots and agents
            designed for specific business needs.
          </p>
          <a
            className="px-2 py-2 text-white transition-all rounded-md shadow-lg w-fit md:px-4 md:py-4 text-md bg-tailorBlue-500 hover:bg-tailorBlue-600"
            href="https://talkui-production.up.railway.app/assets"
            target="__blank"
          >
            Build your Chatbot <BsArrowRight className="inline" />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="hidden w-2/5 md:flex md:justify-center md:items-center">
        <img
          className="h-[400px] lg:h-[500px]"
          src="/images/UI/landing.png"
          alt="Chatbot Image"
        />
      </div>
    </section>
  );
}

export default IntroSection;
