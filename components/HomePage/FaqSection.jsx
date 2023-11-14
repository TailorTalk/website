"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { faqs } from "@/data/faqs";

const FAQSection = () => {
  // Setting up a state to track wheather any FAQ is opened or not
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-16 md:mt-40">
      <h2 className="mb-8 text-3xl font-bold text-center px-7 md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="w-full px-5 md:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full py-6 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-md text-gray-950 group-hover:">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <IoIosArrowUp className="w-6 h-6" />
              ) : (
                <IoIosArrowDown className="w-6 h-6" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-5 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
