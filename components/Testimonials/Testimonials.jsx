"use client";

import TestimonialList from "./TestimonialList";

import { testimonials } from "@/data/testimonialData";
const Testimonials = () => {
  return (
    <>
      <h1 className="p-6 mt-16 mb-3 text-3xl font-bold text-center md:mb-10 md:mt-40 md:text-4xl">
        Users Speak, Tailor Talks Listens
      </h1>
      <section className="flex items-center justify-center max-w-6xl mx-auto ">
        <TestimonialList testimonials={testimonials} />
      </section>
    </>
  );
};

export default Testimonials;
