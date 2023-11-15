import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import TestimonialSlides from "./TestimonialSlides";

function TestimonialList({ testimonials }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 500,
        stretch: 100,
        depth: 1000,
        modifier: 0.08,
        slideShadows: true,
      }}
      spaceBetween={25}
      breakpoints={{
        500: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 3,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Pagination, Keyboard, Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialSlides testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialList;
