"use client";
import React, { useEffect,useRef,useState } from "react";
import Image from 'next/image';
import { AnimatePresence, animate, motion, useAnimation, useMotionValue } from "framer-motion";
import leadx from "../../public/Leadx.png";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import featuresData from "./Config/featuresData.json";
import { AssistantName } from "./Config/globalVariables";
import testimonials from "./Config/testimonials";
import GradeIcon from '@mui/icons-material/Grade';
import useMeasure from "react-use-measure";
import UseCases from "./components/UseCases";

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const controls = useAnimation();
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const stars = 5;

  useEffect(() => {
    const finalPosition = -width * testimonials.length / 2.9;
    let controlsInstance;

    if (!isPaused) {
      controlsInstance = animate(xTranslation, [currentX, isReversed ? 0 : finalPosition], {
        ease: "linear",
        duration: 40,
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          setCurrentX(latest);
        },
        onComplete: () => {
          setIsReversed((prev) => !prev);
        },
      });
    }

    if (controlsInstance) return controlsInstance.stop;
  }, [xTranslation, width, isPaused, isReversed]);

  const [isVisible, setIsVisible] = useState({ assistant: false, features: [] });
  const assistantRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index; // Get the index for features
        if (entry.isIntersecting) {
          if (entry.target.id === 'Features') {
            setIsVisible((prev) => ({ ...prev, assistant: true }));
          } else if (index !== undefined) { // Check if it is a feature
            setIsVisible((prev) => {
              const newFeatures = [...prev.features];
              newFeatures[index] = true; // Update visibility for the feature
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
    "24/7 available, ensuring no lead is missed",
    "Follows up and sends reminders to your leads",
    "Generates insights about your leads.",
    "Chats in any language.",
    "Saves costs by up to 90%",
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-50">
      <div className="container mx-auto md:px-4">
        <h1 className="text-3xl sm:text-[56px] font-medium text-center mt-10 md:mb-12 bg-clip-text text-black">
          Hi, I’m {AssistantName}.
        </h1>
        
        <h2 className="text-3xl sm:text-[56px] font-medium text-center mb-8 text-black bg-clip-text">
          Your AI-Powered <br className="block md:hidden"/>
          <span className="text-3xl sm:text-[56px] font-medium text-center sm:ml-3 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#1d4ed8]">Sales Assistant</span>
        </h2>
        <p className="text-center font-medium text-sm sm:text-lg text-gray-500 pt-5 mb-10" style={{ lineHeight: '2' }}>
          I work 24/7, at any scale, improving your lead engagement while cutting sales costs by up to 90%. <br /> I seamlessly engage with your leads across WhatsApp, Instagram, email, and more.
        </p>
      </div>

      {/* Assistant Card  */}
      <div  id="Features"  ref={assistantRef}  className={`flex flex-col lg:flex-row w-full max-w-7xl h-auto justify-center items-center bg-[#f1f1ee] mt-10 p-6 rounded-xl shadow-xl md:mx-auto`}>
        {/* Left Section */}
        <div className={`w-full lg:w-[68.5%] space-y-4 bg-gray-50 pl-4 p-2 md:p-5 pt-10 md:pl-10 rounded-xl shadow-lg  transition-transform duration-1000 ease-out ${
          isVisible.assistant ? 'slide-in-down-left-active' : 'slide-in-down-left'
        }`}>
          <h1 className="text-3xl sm:text-4xl font-medium mb-8">Hire {AssistantName}</h1>
          <p className="text-base text-[#1d1a1c99] pb-5">
            Sign up and hire {AssistantName} for your business. Onboard in minutes.
          </p>
          <ul className="space-y-2 pb-5">
            {AssistantPoints.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircleSharpIcon className="w-4 h-4 text-indigo-700 p-[2px] flex items-center justify-center rounded-full" />
                <span className="font-light pl-1">{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://calendly.com/shiva-tailortalk/30min" target="_blank">
            <button className="globalBgColor mt-8 flex px-4 py-3 text-base text-white rounded-md hover:bg-indigo-700 transition">
              Interview {AssistantName}
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className={`w-full lg:w-[37%] flex items-center justify-center bg-gray-50 p-5 mt-5 lg:mt-0 ml-0 lg:ml-5 rounded-xl shadow-lg  transition-transform duration-700 ease-out ${
          isVisible.assistant ? 'slide-in-down-right-active' : 'slide-in-down-right'
        }`}>
          <div className="relative">
            <div className="hidden md:block absolute top-[20px] right-[-100px] bg-white p-2 shadow-lg rounded-full flex items-center space-x-2">
              <span className="text-indigo-600 font-medium">{AssistantName}</span>
              <span className="text-gray-600">is joining your team</span>
            </div>
            <Image src={leadx} alt="icon" className="object-cover rounded-xl" />
          </div>
        </div>
      </div>

      {/* Features */}
      <section  className="flex flex-col justify-center items-center border-[1px] pt-28 rounded-xl py-16 mx-4 md:mx-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-medium pb-10">Features that you will love</h2>
          <p className="text-[#1d1a1c99]">You'll have access to many more valuable features alongside {AssistantName}.</p>
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
      </section>
      <section className="w-11/12 flex justify-center items-center mt-16">
        <UseCases/>
      </section>

      {/* Testimonial */}
      <div className="flex w-screen flex-col justify-center items-center py-10 bg-gray-50">
        <h1 className="md:text-[36px] text-3xl font-medium text-center mt-10 text-black">
        Trusted by businesses of all sizes, from startups to enterprises
        </h1>

        <div
          className="overflow-hidden mt-8 w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence>
            <motion.div
              className="flex"
              ref={ref}
              initial={{ x: 0 }}
              animate={controls}
              style={{ whiteSpace: 'nowrap', x: xTranslation }}
            >
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div key={index} className="flex flex-col p-8 mx-4 my-4 bg-white shadow-md rounded-xl md:h-[30rem] h-[40rem]" >
                  <div className="flex-1">
                    <div className="flex mb-6">
                      {Array.from({ length: stars }, (_, i) => (
                        <GradeIcon key={i} sx={{ color: '#4c6ef5' }} />
                      ))}
                    </div>

                    <h3
                      className="text-lg font-medium mb-4 w-64 md:w-96"
                      style={{
                        overflowWrap: 'break-word',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      {testimonial.title}
                    </h3>
                    <p className="text-[#1d1a1c99] mb-6 pt-4" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-600">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
