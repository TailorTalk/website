"use client";
import React, { useEffect,useRef,useState } from "react";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import leadx from "../../public/Leadx.png";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
// import featuresData from "./Config/featuresData.json";
import testimonials from "./Config/testimonials";
import GradeIcon from '@mui/icons-material/Grade';
import UseCases from "./components/UseCases";
import { TestCases } from "./Config/testCases";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import whatsappIcon from "../../public/whatsapp_icon.svg";
import Link from "next/link";

export default function Home() {
  const stars = 5;
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  const settingsTestimonial = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const [isVisible, setIsVisible] = useState({ assistant: false, features: [] });
  const assistantRef = useRef(null);
  const featureRefs = useRef([]);
  
  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index;
        if (entry.isIntersecting) {
          if (entry.target.id === "Features") {
            setIsVisible((prev) => ({ ...prev, assistant: true }));
          } else if (index !== undefined) {
            setIsVisible((prev) => {
              const newFeatures = [...prev.features];
              newFeatures[index] = true;
              return { ...prev, features: newFeatures };
            });
          }
        }
      });
    }, observerOptions);
  
    if (assistantRef.current) observer.observe(assistantRef.current);
    featureRefs.current.forEach((ref) => observer.observe(ref));
  
    return () => {
      observer.disconnect();
    };
  }, []);  

  const AssistantPoints = [
    "Automates **inbound** and **outbound** sales.",
    "Automates **follow ups** with your leads",
    "Automates **campaigns** for your leads.",
    "Provide **insights** on your leads.",
    "Provide 24x7 **customer support**.",
    "Take actions like **payment**, book **appointments** and more.",
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-50 pt-20">
      <div className="container mx-auto md:px-4">
        {/* <h1 className="text-3xl sm:text-[56px] font-medium text-center mt-10 mb-4 md:mb-12 bg-clip-text text-black">
          Hi, I&#39;m {AssistantName}.
        </h1> */}
        
        <h2 className="text-3xl sm:text-[56px] font-medium text-center mb-4 text-black bg-clip-text">
          Your<br className="block md:hidden" />
          <span className="text-3xl sm:text-[56px] font-medium text-center sm:ml-3 space-y-5 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#1d4ed8]">
          <span className="block md:hidden mt-[14px]"></span>
            AI Sales Agent
          </span>
        </h2>
        <p className="text-center font-medium text-sm sm:text-lg text-gray-500 pt-8 mb-10" style={{ lineHeight: '3' }}>
 Automate your sales through{' '}
  <span style={{ color: '#25D366' }}>WhatsApp</span> and{' '}
  <span style={{ color: '#E4405F' }}>Instagram</span>. <br />
  Boost conversion rates by <span style={{ color: 'black' }}>30%</span> and reduce operational costs by <span style={{ color: 'black' }}>80%</span>. <br />
  Set up in just <span style={{ color: 'black' }}>25 minutes</span>, no technical skills required.
</p>

      </div>

      {/* Assistant Card  */}
      <div  id="Features"  ref={assistantRef}  className={`flex flex-col lg:flex-row w-full max-w-7xl h-auto justify-center items-center bg-[#f1f1ee] mt-10 p-6 rounded-xl shadow-xl md:mx-auto`}>
        {/* Left Section */}
        <div className={`w-full lg:w-[68.5%] space-y-4 bg-gray-50 pl-4 p-2 md:p-5 md:pt-7 md:pl-10 rounded-xl shadow-lg  transition-transform duration-1000 ease-out ${
          isVisible.assistant ? 'slide-in-down-left-active' : 'slide-in-down-left'
        }`}>
          <h1 className="text-3xl sm:text-4xl font-medium mb-3"></h1>
          <p className="text-xl font-normal text-[#1d1a1c] pb-5">
          Simplest and powerful AI sales agent, onboard in minutes.
</p>

          <ul className="space-y-2 pb-5">
            {AssistantPoints.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircleSharpIcon className="w-5 h-5 text-indigo-700 p-[2px] flex items-center justify-center rounded-full" />
                <span className="font-normal text-black/70 pl-1">
                <ReactMarkdown>{item}</ReactMarkdown>
                  </span>
              </li>
            ))}
          </ul>
          <Link 
  href='https://wa.me/message/3JLVHNLXUJPXD1' 
  target="_blank" 
  rel="noopener noreferrer" 
  className="pb-2 md:pb-0 text-blue-600 text-base flex items-center transform transition-transform hover:scale-105 w-100"
>
  <Image src={whatsappIcon} width={40} height={40} className="-ml-2 mr-2" />
  <p className="leading-none">Chat with Tailortalk</p>
  <ChevronRight className="ml-1" />
</Link>


        </div>

        {/* Right Section */}
        <div className={`w-full lg:w-[30.5%] md:h-[23.4rem] flex items-center justify-center bg-gray-50 p-5 mt-5 lg:mt-0 ml-0 lg:ml-5 rounded-xl shadow-lg  transition-transform duration-700 ease-out ${
          isVisible.assistant ? 'slide-in-down-right-active' : 'slide-in-down-right'
        }`}>
          <div className="relative">
            {/* <div className="hidden md:block absolute top-[20px] right-[-100px] bg-white p-2 shadow-lg rounded-full flex items-center space-x-2">
              <span className="text-indigo-600 font-medium">{AssistantName}</span>
              <span className="text-gray-600">is joining your team</span>
            </div> */}
            <Image src={leadx} alt="icon" className="rounded-xl md:h-[21rem] md:w-[21rem]" />
          </div>
        </div>
      </div>

      {/* Features */}
      {/* <section  className="flex flex-col justify-center items-center border-[1px] pt-28 rounded-xl py-16 mx-4 md:mx-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-medium pb-10">Features that you will love</h2>
          <p className="text-[#1d1a1c99]">You&#39;ll have access to many more valuable features alongside {AssistantName}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-28 mt-10">
          {featuresData.features.map((feature, index) => (
            <div key={index} ref={(el) => (featureRefs.current[index] = el)}  data-index={index}  className={`bg-white shadow-md rounded-xl p-3 transition-transform duration-1000 ease-out ${
              isVisible.features[index] ? 'slide-in-up-active' : 'slide-in-up'
            }`}>
                <div key={index}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-medium my-3">{feature.title}</h3>
                  <p className="text-[#1d1a1c99] text-[0.9rem] font-light mt-6 mb-6">{feature.description}</p>
            </div>
            
          ))}
        </div>
        {/* UseCases */}
      {/* </section> */}

      <section id="video" className="w-full py-10 bg-[#f7f8fa]">
  <h1 className="md:text-[36px] text-3xl font-normal text-center my-10 text-black pt-4">
    Built for any business
  </h1>
  <div className="container mx-auto relative px-4 md:px-12 py-10 rounded-xl bg-[#f1f1ee]">
    {/* Custom Navigation Buttons */}
    <button
      onClick={previous}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 md:w-8 md:h-8 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all flex items-center justify-center focus:outline-none"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <ChevronLeft className="w-6 h-6 text-gray-700" />
    </button>

    <button
      onClick={next}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 md:w-8 md:h-8 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all flex items-center justify-center focus:outline-none"
      style={{ transform: 'translate(50%, -50%)' }}
    >
      <ChevronRight className="w-6 h-6 text-gray-700" />
    </button>

    {/* Slider */}
    <Slider ref={sliderRef} {...settings}>
      {TestCases.map((testCase, index) => (
        <div key={index} className="md:px-4">
          <div
            className="flex flex-col rounded-xl border border-gray-400 bg-gray-50 shadow-md p-3 h-[33rem]"
          >
                <Image
                  src={testCase.src}
                  alt={testCase.title}
                  width={400}
                  height={300}
                  className="rounded-lg h-60 w-full object-cover "
                />

            <div className="pb-1 px-3 w-full h-full flex flex-col">
              <div className="flex-1">
              <h5 className="text-lg mt-4 mb-3 font-semibold">{testCase.title}</h5>
                <div className="mt-2">
                  <ul className="list-disc pl-3">
                    {testCase.content.map((point, idx) => (
                      <li key={idx} className="text-gray-800 text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            
              <Link 
  href={testCase.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-60 text-blue-600 text-base flex transform transition-transform hover:scale-105"
>
  <Image src={whatsappIcon} alt="" width={28} height={28} className="-ml-3 mr-1"/> 
  <p className="mt-[2px]">Start demo chat</p> 
  <ChevronRight className="ml-1 mt-[3px]" />
</Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

      <section id="useCases" className="w-full p-6 flex flex-col justify-center items-center mt-5 md:mt-4">
      <h2 className="md:text-[36px] text-3xl font-normal text-center my-10 text-black pt-4">Use cases</h2>
        <UseCases/>
      </section>

      {/* Testimonial */}
      <div className="flex w-full flex-col justify-center items-center py-8 bg-gray-50">
      <h1 className="md:text-4xl text-3xl font-normal text-center my-10 text-black pt-4">
        Loved by businesses of all kinds
      </h1>
      
      <div className="w-full overflow-hidden md:px-8">
        <Slider {...settingsTestimonial}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col p-8 bg-white shadow-md rounded-xl w-[20rem] md:w-[27.5rem] md:h-[30rem] h-[40rem]">
                <div className="flex-1">
                  <div className="flex mb-6">
                  {Array.from({ length: stars }, (_, i) => (
                <GradeIcon key={i} sx={{ color: "#4c6ef5" }} />
              ))}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-4 w-full break-words">
                    {testimonial.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 pt-4 break-words">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                  <Image
                    width={80}
                    height={80}
                    src={testimonial.icon}
                    alt={`${testimonial.author}'s company logo`}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}
