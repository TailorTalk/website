"use client";

import { useState } from "react";

// Importing symbols from the react icon lib.
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What is Tailor-Talk?",
    answer:
      "TailorTalk is a cutting-edge platform offering customized chatbot and agent solutions, designed to meet specific business needs and enhance customer engagement through intelligent, tailored conversations.",
  },
  {
    question: "How to create a chatbot?",
    answer:
      "To create your chatbot with Tailor-Talk, simply visit our console app. There, you can upload your files and specify custom instructions to craft your unique bot. After creation, you'll receive an embeddable code to integrate the chatbot on your website. For more complex use cases, such as integration with WhatsApp or developing other types of agents, please reach out to our team at team@tailortalk.in for specialized assistance.",
  },
  {
    question: "What is Agent offered by Tailor-Talk?",
    answer:
      "Agents are advanced chatbots designed for tasks like customer service and sales support. Capable of complex interactions, they provide personalized responses and can perform actions like booking appointments and accepting payments. These versatile agents can be integrated with platforms like WhatsApp and Slack for comprehensive communication solutions.",
  },
  {
    question: "Where is my data stored?",
    answer: "Your data is hosted on secure GCP servers in USA.",
  },
  {
    question: "How can I add my chatbot to my website?",
    answer:
      "You can add your chatbot to your website by copying and pasting the embeddable code provided after chatbot creation.",
  },
  {
    question: "Can I update my chatbot?",
    answer:
      "Yes, you can update your chatbot at any time. Simply log in to our console and make the necessary changes.",
  },
  {
    question: "Does it support multiple languages?",
    answer: "Yes, Tailor-Talk supports more than 50 languages.",
  },
];

const FAQSection = () => {
  // Setting up a state to track wheather any FAQ is opened or not
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-36">
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
