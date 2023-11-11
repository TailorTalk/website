"use client";
import React, { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import { GoVerified } from "react-icons/go";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      header: "Seamless Assistance for My Business",
      text: "TailorTalk's chatbot has seamlessly integrated with my business operations. The intuitive interface and smart responses have significantly improved customer interactions. It's like having a virtual assistant that understands my business needs. Highly recommended!",
      author: "Shiva Verma",
      location: "IIT Mandi",
      photo: "/dp.png",
    },
    {
      id: 2,
      header: "Efficiency Redefined with TailorTalk",
      text: "Good Product",
      author: "Nandan Kumar",
      location: "NIT Jalandhar",
      photo: "/dp.png",
    },
    {
      id: 3,
      header: "Revolutionizing Customer Engagement",
      text: "Industry demands innovation, and TailorTalk's chatbot delivers just that. It has revolutionized how we engage with our customers. The personalized interactions, quick responses, and analytical insights provided by the chatbot have significantly enhanced our customer satisfaction levels. Kudos to the TailorTalk team!",
      author: "Akash",
      location: "IIT Delhi",
      photo: "/dp.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % testimonials.length;
      showSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="max-w-6xl mx-auto mt-20">
      <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
        Customer Testimonials
      </h2>
      <div className="relative p-8 overflow-hidden bg-white">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-4/5 mx-auto flex flex-col ${
              index === currentSlide
                ? "opacity-100 h-[280px]"
                : "opacity-0 translate-x-full h-0 p-0 overflow-hidden"
            } transition-[opacity,transform] ease-in-out duration-1000 rounded-lg p-5 pl-7 bg-gray-50 shadow-lg shadow-zinc-200`}
          >
            <h5 className="mb-4 text-xl font-semibold text-gray-800">
              "{testimonial.header}"
            </h5>
            <blockquote className="flex-grow mb-8 text-gray-600 text-md">
              {testimonial.text}
            </blockquote>
            <address className="flex items-center space-x-4 border-t-[1px] border-gray-300 pt-2">
              <img
                src={testimonial.photo}
                alt={`User ${index + 1}`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h6 className="mb-0 text-base font-semibold text-gray-700">
                  {testimonial.author}
                </h6>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </address>
          </div>
        ))}
        <button
          className="absolute z-10 text-3xl text-gray-800 cursor-pointer top-[37%] left-6 h-14 w-14"
          onClick={() =>
            showSlide(
              (currentSlide - 1 + testimonials.length) % testimonials.length
            )
          }
        >
          <GrFormPrevious />
        </button>
        <button
          className="absolute z-10 text-3xl text-gray-800 cursor-pointer top-[37%] right-6 h-14 w-14"
          onClick={() => showSlide((currentSlide + 1) % testimonials.length)}
        >
          <GrFormNext />
        </button>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`border-gray-900 border-[2px] opacity-70 h-4 w-4 rounded-full mx-2 cursor-pointer transition-all duration-500 ${
                index === currentSlide
                  ? "bg-gray-900 opacity-100"
                  : "hover:bg-gray-900"
              }`}
              onClick={() => showSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
