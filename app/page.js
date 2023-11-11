// pages/index.js
import FAQSection from "@/components/faq";
import FeaturesSection from "@/components/feature";
import IntegrateSection from "@/components/integrate";
import Testimonials from "@/components/testimonial";
// import Head from "next/head";

export const metadata = {
  title: "Errr!",
  description: "Heyooo!",
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl md:mt-2 md:mb-16 md:grid md:h-[500px] md:grid-cols-7 md:pl-5">
        {/* Left Content */}
        <div className="flex items-center justify-between space-x-8 md:col-span-4">
          <div className="flex flex-col justify-center h-[70%] gap-8">
            <h1 className="text-2xl font-bold md:text-7xl">
              <span className="mr-4">We</span>
              {/* Blue highlight effect */}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#4764FC]">Tailor</span>
                {/* <span
                  className="absolute inset-0 transform scale-105 skew-x-[-15deg] bg-gradient-to-r from-[#91a3f9] via-[#647cf4] to-[#4764FC]"
                  aria-hidden="true"
                ></span> */}
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Your</span>
                {/* <span
                  className="absolute inset-0 transform scale-105 skew-x-[-15deg] bg-gradient-to-r from-[#91a3f9] via-[#647cf4] to-[#4764FC]"
                  aria-hidden="true"
                ></span> */}
              </span>
              <span className="ml-4 mr-2 text-[#4764FC]">Talks</span>
            </h1>

            <p className="max-w-xl col-start-1 row-start-3 text-lg text-gray-700">
              At "Tailor-Talk", we don't just create chatbots. We meticulously
              craft them based on your unique dataset, ensuring a personalized
              communication experience for every user. Let us elevate your
              business communication with tailored chatbot solutions.
            </p>
            {/* <div className="flex flex-col items-center justify-center w-fit place-items-center">
              <a
                className="px-4 py-3 text-base font-semibold leading-7 text-white transition-all rounded-md shadow-lg bg-chatbase-gradient hover:animate-gradient focus-visible:animate-gradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                href="/auth/signup"
              >
                Build your Chatbot <span aria-hidden="true">→</span>
              </a>
              <p className="mt-1 text-sm text-center text-zinc-500">
                No credit card required
              </p>
            </div> */}
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden md:col-span-3 md:flex md:justify-center md:items-center">
          <img className="h-[450px]" src="/landing.png" />
        </div>
      </section>

      {/* Additional Sections and Components */}
      <FeaturesSection />
      <FAQSection />
      <IntegrateSection />

      <Testimonials />
    </div>
  );
}
