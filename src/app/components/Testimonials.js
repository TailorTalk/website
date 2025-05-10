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
      gradient: "from-blue-50 via-indigo-50 to-blue-100"
    },
    {
      company: "Tootly",
      title: "Doubled Revenue by Automating Instagram Lead Handling",
      text: "We struggled to scale Instagram ad leads manually. TailorTalk now handles 2.5x the lead volume automatically, directly resulting in a 2x increase in our revenue. It's been a game-changer.",
      logo: "/tootly.jpg",
      person: "David Johnson",
      role: "Founder",
      gradient: "from-purple-50 via-pink-50 to-purple-100"
    },
    {
      company: "Rage Room",
      title: "Seamless WhatsApp Bookings, Instantly Confirmed",
      text: "TailorTalk guides customers through our packages on WhatsApp, confirms bookings instantly, and sends details straight to our team. It completely streamlined our booking process.",
      logo: "/rageroom.jpg",
      person: "Mark Thompson",
      role: "CEO",
      gradient: "from-red-50 via-orange-50 to-red-100"
    },
    {
      company: "CoachDirect",
      title: "Delightful Coach Bookings & Reduced Manual Effort",
      text: "TailorTalk instantly recommends the right coaches and answers queries on WhatsApp, making bookings smooth and efficient. It significantly cut down our manual workload.",
      logo: "/coach_direct.jpg",
      person: "John Deo",
      role: "Founder",
      gradient: "from-green-50 via-emerald-50 to-green-100"
    },
    {
      company: "Sayak Sarees",
      title: "Freed Our Team by Automating 1000+ Daily Instagram Enquiries",
      text: "TailorTalk connects seamlessly to our backend via API, instantly handling over 1000 customer enquiries on Instagram every day. This crucial automation frees our team to focus on growth and other strategic priorities instead of repetitive chat.",
      logo: "/Samyakk.webp",
      person: "Emily Smith",
      role: "CEO",
      gradient: "from-amber-50 via-yellow-50 to-amber-100"
    },
  ];

  // Create extended testimonials array to ensure smooth scrolling
  const extendedTestimonials = testimonials.length < 6 
    ? [...testimonials, ...testimonials] 
    : testimonials;

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Client Success Stories</h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-blue-400 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how businesses are achieving measurable results with our solutions</p>
        </div>

        {/* Premium Testimonials Marquee */}
        <div className="mb-16 h-[40rem] w-full">
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
                <div className={`relative h-full rounded-2xl overflow-hidden group shadow-md hover:shadow-xl bg-white transition-all duration-300`}>
                  {/* Card border accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600"></div>
                  
                  {/* Content container */}
                  <div className="relative z-10 h-full p-8 flex flex-col gap-8">
                    
                    {/* Title */}
                    <h4 className="text-xl font-medium mb-4">
                      {testimonial.title}
                    </h4>
                    
                    {/* Testimonial text */}
                    <p className=" text-gray-600 flex-grow">
                      {testimonial.text}
                    </p>
                    
                    {/* Bottom section with person info and logo */}
                    <div className="flex justify-between items-end mt-6 pt-6 border-t border-gray-100">
                      {/* Person info */}
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.person}</p>
                        <p className="text-xs text-gray-400">
                          {testimonial.role} - {testimonial.company}
                        </p>
                      </div>
                      
                      {/* Logo (now in bottom right) */}
                      <div className="w-20 h-12 rounded-lg bg-white flex items-center justify-center">
                        <img 
                          src={testimonial.logo || "/api/placeholder/48/48"} 
                          alt={testimonial.company} 
                          className=" object-fill"
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