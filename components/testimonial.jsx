"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      header: "Best financial decision ever!",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      author: "Aarav Lynn",
      location: "San Francisco, USA",
      photo: "/dp.png",
    },
    {
      id: 2,
      header: "The last step to becoming a complete minimalist",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      author: "Miyah Miles",
      location: "London, UK",
      photo: "/dp.png",
    },
    {
      id: 3,
      header: "Finally free from old-school banks",
      text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
      author: "Francisco Gomes",
      location: "Lisbon, Portugal",
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
    <section className="max-w-6xl mx-auto mt-12">
      <h2 className="mb-8 text-4xl font-bold text-center">Testimonials</h2>
      <div className="relative overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-3/5 mx-auto ${
              index === currentSlide
                ? "opacity-100 h-auto"
                : "opacity-0 translate-x-full hidden overflow-hidden"
            } transition-all ease-in-out duration-1000`}
            // key={testimonial.id}
            // className={`w-3/5 mx-auto ${
            //   index === currentSlide
            //     ? "opacity-100 h-auto"
            //     : "opacity-0 h-0 overflow-hidden"
            // } transition-all ease-in-out duration-1000`}
          >
            <h5 className="mb-4 text-2xl font-semibold testimonial__header">
              {testimonial.header}
            </h5>
            <blockquote className="mb-8 text-lg text-gray-600 testimonial__text">
              {testimonial.text}
            </blockquote>
            <address className="flex items-center ml-12 space-x-4 testimonial__author">
              <img
                src={testimonial.photo}
                alt={`User ${index + 1}`}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h6 className="mb-0 text-lg font-semibold testimonial__name">
                  {testimonial.author}
                </h6>
                <p className="text-base testimonial__location">
                  {testimonial.location}
                </p>
              </div>
            </address>
          </div>
        ))}
        <button
          className="absolute z-10 font-sans text-3xl text-gray-800 transform -translate-x-1/2 border-none rounded-full cursor-pointer slider__btn slider__btn--left top-1/2 left-6 bg-opacity-70 h-14 w-14"
          onClick={() =>
            showSlide(
              (currentSlide - 1 + testimonials.length) % testimonials.length
            )
          }
        >
          &larr;
        </button>
        <button
          className="absolute z-10 font-sans text-3xl text-gray-800 transform translate-x-1/2 border-none rounded-full cursor-pointer slider__btn slider__btn--right top-1/2 right-6 bg-opacity-70 h-14 w-14"
          onClick={() => showSlide((currentSlide + 1) % testimonials.length)}
        >
          &rarr;
        </button>
        <div className="absolute flex transform -translate-x-1/2 dots bottom-5 left-1/2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dots__dot border-none bg-gray-300 opacity-70 h-4 w-4 rounded-full mr-7 cursor-pointer transition-all duration-500 ${
                index === currentSlide ? "bg-gray-800 opacity-100" : ""
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
