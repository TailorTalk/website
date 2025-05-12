"use client";
import React, { useEffect,useRef,useState } from "react";
// import Image from 'next/image';
// import ReactMarkdown from "react-markdown";
// import leadx from "../../public/Leadx.png";
// import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
// import testimonials from "./Config/testimonials";
// import GradeIcon from '@mui/icons-material/Grade';
// import UseCases from "./components/UseCases";
// import { TestCases } from "./Config/testCases";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import WhatsappWidget from "./components/WhatsappWidget";
// import { homeMetadata } from './Config/metadata';
import { generateOrganizationSchema, generateFAQSchema } from './Config/metadata/structuredData';
import Script from 'next/script';
import HeroSection from "./components/HeroSection";
import LogoMarquee from "./components/LogoMarquee";
import PricingModule from "./components/Pricing";
import { ThreeDMarqueeDemoSecond } from "./components/DashboardMarquee";
import FAQSection from "./components/FAQ";
import { IntegrationHub } from "./components/IntegrationHub";
import TestimonialSection from "./components/Testimonials";
import { ThreeDCardDemo } from "./components/Grid";
import { VortexDemo } from "./components/JoiningSection";
import AIAgentToolkit from "./components/Features";
import { TypewriterEffect } from "./components/ui/typewritter-effect";

// export { homeMetadata as metadata };

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema();

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

  const businessInfo = {
    phoneNumber: '9900130255',
    countryCode: '91',
    businessName: 'Tailor Talk'
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessInfo.countryCode}${businessInfo.phoneNumber}&text=hi&source=&data=&app_absent=`;

  
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
    <>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <main className="flex flex-col justify-center items-center py-10 bg-white"
      style={{
        background: "repeating-linear-gradient(45deg, rgb(245, 246, 248), rgb(245, 246, 248) 1px, transparent 1px, transparent 4px)"
      }}
      // style={{
      //   background: `repeating-linear-gradient(
      //     45deg,
      //     rgba(200, 200, 200, 0.3) 0,
      //     rgba(200, 200, 200, 0.3) 1px,
      //     transparent 1px,
      //     transparent 6px
      //   )`
      // }}   
      >
        <WhatsappWidget />
        <HeroSection />
        <div>
          <LogoMarquee/>
        </div>
        <div className="w-full">
          <AIAgentToolkit/>
        </div>
        <div className="w-full">
          <PricingModule/>
        </div>
        <div className="w-full">
          <TestimonialSection/>
        </div>
        <div className="w-full">
          <FAQSection/>
        </div>
        {/* <div className="w-full">
          <ThreeDCardDemo/>
        </div> */}
        <div className="w-full">
          {/* <TypewriterEffect/> */}
        </div>

      </main>
    </>
  );
}
