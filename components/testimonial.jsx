"use client";
// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import 'swiper/css/pagination';
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      header: "Seamless Assistance for My Business",
      text: "TailorTalk's chatbot has seamlessly integrated with my business operations. The intuitive interface and smart responses have significantly improved customer interactions. It's like having a virtual assistant that understands my business needs. Highly recommended!",
      author: "Shiva Verma",
      location: "IIT Mandi",
      photo: "/dp.png",
    },
    {
      header: "Efficiency Redefined with TailorTalk",
      text: "Good Product",
      author: "Nandan Kumar",
      location: "NIT Jalandhar",
      photo: "/dp.png",
    },
    {
      header: "Revolutionizing Customer Engagement",
      text: "Industry demands innovation, and TailorTalk's chatbot delivers just that. It has revolutionized how we engTailorTalk team!",
      author: "Akash",
      location: "IIT Delhi",
      photo: "/dp.png",
    },
    {
      header: "Revolutionizing Customer Engagement",
      text: "Industry demands innovation, and TailorTalk's chatbot delivers just that. It has revolutionized ho the TailorTalk team!",
      author: "Akash",
      location: "IIT Delhi",
      photo: "/dp.png",
    },
    {
      header: "Revolutionizing Customer Engagement",
      text: "Industry demands is. The personalized interactions, quick responses, and analytical insights provided by the chatbot have significantly enhanced our customer satisfaction levels. Kudos to the TailorTalk team!",
      author: "Akash",
      location: "IIT Delhi",
      photo: "/dp.png",
    },
    {
      header: "Revolutionizing Customer Engagement",
      text: "Industry demandsailorTalk team!",
      author: "Akash",
      location: "IIT Delhi",
      photo: "/dp.png",
    },
  ];

  return (
    <>
      <h1 className="mb-10 text-4xl font-bold text-center mt-28 md:text-4xl">
        Users Speak, Tailor Talks Listens
      </h1>
      <section className="flex items-center justify-center max-w-6xl mx-auto ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 500,
            stretch: 100,
            depth: 1000,
            modifier: 0.08,
            slideShadows: true,
          }}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          //   mousewheel={true}
          keyboard={true}
          modules={[
            Navigation,
            Pagination,
            Keyboard,
            Autoplay,
            EffectCoverflow,
          ]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 m-4 mb-12 flex flex-col justify-between bg-white rounded-lg  h-[330px]">
                <div>
                  <FaQuoteLeft className="mb-2 text-4xl text-gray-600" />
                  <p className="mb-4 text-gray-800 text-md">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <div>
                    <h6 className="text-lg font-semibold text-gray-700">
                      {testimonial.author}
                    </h6>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
