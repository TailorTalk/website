"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "1. How does Tailor-Talk enhance user engagement?",
    answer:
      "Tailor-Talk elevates user engagement by creating customized chatbots tailored to your unique dataset. Personalized interactions result in a more engaging and satisfying user experience, fostering better connections with your audience.",
  },
  {
    question: "2. What sets Tailor-Talk apart in the chatbot market?",
    answer:
      "Tailor-Talk stands out by meticulously crafting chatbots based on your business's specific needs. Our tailored approach ensures a unique and effective communication experience, setting us apart from one-size-fits-all solutions.",
  },
  {
    question:
      "3. How does Tailor-Talk prioritize user privacy and data security?",
    answer:
      "Tailor-Talk prioritizes user privacy through robust data protection practices. Our measures prevent unauthorized access, ensuring the secure handling of personal information. We strictly comply with privacy policies and regulations.",
  },
  {
    question: "4. Can I customize the chatbot to match my brand's identity?",
    answer:
      "Absolutely! Tailor-Talk allows seamless customization, letting you align the chatbot with your brand's identity. Tailor your chatbot by incorporating business-specific terminologies, product details, and FAQs.",
  },
  {
    question: "5. How frequently can I update or refine my chatbot?",
    answer:
      "Tailor-Talk offers flexible updates, allowing you to refine your chatbot as your business evolves. Ongoing support ensures adjustments, new data incorporation, and enhanced performance based on your changing requirements.",
  },
  {
    question:
      "6. Is the data I provide used for purposes other than chatbot customization?",
    answer:
      "No, Tailor-Talk solely uses your data for creating a customized chatbot. We prioritize confidentiality, refraining from marketing or data monetization. Your information is secure and not shared with third parties.",
  },
  {
    question:
      "7. What industries benefit most from Tailor-Talk's chatbot solutions?",
    answer:
      "Tailor-Talk caters to diverse industries, including but not limited to e-commerce, healthcare, and customer service. Our adaptive chatbots offer solutions tailored to the specific needs of each industry.",
  },
  {
    question:
      "8. How does Tailor-Talk ensure compliance with data protection laws?",
    answer:
      "Tailor-Talk maintains compliance with data protection laws and regulations. Our stringent measures, including encryption and secure servers, safeguard against unauthorized access, ensuring the highest standards of data protection.",
  },
  // Add more FAQs as needed
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-28">
      <h2 className="mb-8 text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full py-6 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-md group-hover:">{faq.question}</h3>
              {openIndex === index ? (
                <IoIosArrowUp className="w-6 h-6" />
              ) : (
                <IoIosArrowDown className="w-6 h-6" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
