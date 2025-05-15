import Marquee from 'react-fast-marquee';
import { testimonials } from '../Config/testimonials';

const TestimonialsSection = () => {

  // Create extended testimonials array to ensure smooth scrolling
  const extendedTestimonials = testimonials.length < 6 
    ? [...testimonials, ...testimonials] 
    : testimonials;

  return (
    <div className="w-full py-24">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
        Client Success <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Stories</span>
        </h2>    
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">Discover how businesses are achieving measurable results with our solutions</p>
      </div>
        {/* Premium Testimonials Marquee */}
        <div className="mb-16 h-[30rem] w-full ">
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
                className="mx-4 pb-5 w-96 h-[30rem] bg-white rounded-2xl"
                style={{
                  background: "repeating-linear-gradient(45deg, rgba(230, 225, 230, 0.3), rgba(230, 225, 230, 0.3) 1px, transparent 1px, transparent 4px)"
                }}
              >
                <div
                  className={
                    `relative h-full rounded-2xl overflow-hidden group transition-all duration-300 ` +
                    (index % 2 === 0
                      ? "shadow-[0_6px_10px_0_rgba(99,102,241,0.4)]"
                      : "border border-gray-200 shadow-sm")
                  }
                >
                  {/* Gradient backlight effect */}
                  <div className="absolute inset-0 bg-white opacity-70 transform scale-100 transition-all duration-300"></div>
                  
                  {/* Card border accent */}
                  <div
                    className="absolute inset-x-0 top-0"
                    style={{
                      height: "3px",
    background: "linear-gradient(90deg,rgb(124, 126, 229) 0%,rgb(239, 78, 225) 100%)"                    }}
                  ></div>
                  
                  {/* Content container */}
                  <div className="relative z-10 h-full p-8 flex flex-col">
                    
                    {/* Title - consistent height */}
                    <h4 className="text-xl font-medium text-gray-900 h-16">
                      {testimonial.title}
                    </h4>
                    
                    {/* Testimonial text - consistent positioning */}
                    <div className="py-6 flex-grow">
                      <p className="text-[#61646B] font-[350] leading-relaxed">
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
                          className="object-containf rounded-lg"
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