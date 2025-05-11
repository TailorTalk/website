import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Keerthi Triumph",
      title: "Hundreds of Hours Saved Automating Bike Inquiries & Bookings",
      text: "TailorTalk automates everything from exploring models and scheduling test rides to booking service appointments via WhatsApp chat. This efficiency has saved our team hundreds of valuable manual hours.",
      logo: "/keerthi.jpg",
      person: "Emily Smith",
      role: "CEO",
    },
    {
      company: "Tootly",
      title: "Doubled Revenue by Automating Instagram Lead Handling",
      text: "We struggled to scale Instagram ad leads manually. TailorTalk now handles 2.5x the lead volume automatically, directly resulting in a 2x increase in our revenue. It's been a game-changer.",
      logo: "/tootly.jpg",
      person: "David Johnson",
      role: "Founder",
    },
    {
      company: "Rage Room",
      title: "Seamless WhatsApp Bookings, Instantly Confirmed",
      text: "TailorTalk guides customers through our packages on WhatsApp, confirms bookings instantly, and sends details straight to our team. It completely streamlined our booking process.",
      logo: "/rageroom.jpg",
      person: "Mark Thompson",
      role: "CEO",
    },
    {
      company: "CoachDirect",
      title: "Delightful Coach Bookings & Reduced Manual Effort",
      text: "TailorTalk instantly recommends the right coaches and answers queries on WhatsApp, making bookings smooth and efficient. It significantly cut down our manual workload.",
      logo: "/coach_direct.jpg",
      person: "John Deo",
      role: "Founder",
    },
    {
      company: "Sayak Sarees",
      title: "Freed Our Team by Automating 1000+ Daily Instagram Enquiries",
      text: "TailorTalk connects seamlessly to our backend via API, instantly handling over 1000 customer enquiries on Instagram every day. This crucial automation frees our team to focus on growth and other strategic priorities instead of repetitive chat.",
      logo: "/Samyakk.webp",
      person: "Emily Smith",
      role: "CEO",
    },
  ];

  // Create extended testimonials array to ensure smooth scrolling
  const extendedTestimonials = testimonials.length < 6 
    ? [...testimonials, ...testimonials] 
    : testimonials;

  return (
    <div className="w-full py-24">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">Client Success <span className='text-indigo-600'>Stories</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how businesses are achieving measurable results with our solutions</p>
        </div>

        {/* Premium Testimonials Marquee */}
        <div className="mb-16 h-[30rem] w-full">
          <Marquee
            gradient={true}
            gradientColor={[255, 255, 255]} // White background
            gradientWidth={100}
            speed={30}
            pauseOnHover={true}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="mx-4 pb-5 w-96 h-[30rem]"
              >
                <div className="relative h-full rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Gradient backlight effect */}
                  <div className="absolute inset-0 bg-white opacity-70 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                  
                  {/* Card border accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600"></div>
                  
                  {/* Content container */}
                  <div className="relative z-10 h-full p-8 flex flex-col">
                    
                    {/* Title - consistent height */}
                    <h4 className="text-xl font-medium text-gray-900 h-16">
                      {testimonial.title}
                    </h4>
                    
                    {/* Testimonial text - consistent positioning */}
                    <div className="py-6 flex-grow">
                      <p className="text-gray-700 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Bottom section with person info and logo */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                      {/* Person info */}
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.person}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role} - {testimonial.company}
                        </p>
                      </div>
                      
                      {/* Logo (now in bottom right) */}
                      <div className="w-20 h-12 rounded-lg bg-white flex items-center justify-center">
                        <img 
                          src={testimonial.logo || "/api/placeholder/48/48"} 
                          alt={testimonial.company} 
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;