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
import WhatsappWidget from "./components/WhatsappWidget";
// import { homeMetadata } from './Config/metadata';
import { generateOrganizationSchema, generateFAQSchema } from './Config/metadata/structuredData';
import Script from 'next/script';
import HeroSection from "./components/HeroSection";
import LogoMarquee from "./components/LogoMarquee";
import PricingModule from "./components/Pricing";
import FAQSection from "./components/FAQ";
import TestimonialSection from "./components/Testimonials";
import ToolsIntegrations from "./components/ToolsIntegration";
import WhyTailorTalk from "./components/whyTailorTalk";
import BeyondQASection from "./components/BeyoundText";

// export { homeMetadata as metadata };

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // This code runs only on the client
    setIsDesktop(window.innerWidth >= 1280);

    // Optional: Listen for resize events
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const businessInfo = {
    phoneNumber: '9900130255',
    countryCode: '91',
    businessName: 'Tailor Talk'
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessInfo.countryCode}${businessInfo.phoneNumber}&text=hi&source=&data=&app_absent=`;

  return (
    <>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <main className="flex flex-col justify-center items-center py-10 bg-white font-sans"
     style={{
      background: isDesktop 
        ? "repeating-linear-gradient(45deg, rgba(247,246,249,0.5), rgba(247,246,249,0.5) 0.08vw, transparent 0.08vw, transparent 0.3vw)"
        : "repeating-linear-gradient(45deg, rgba(247,246,249,0.9), rgba(247,246,249,0.9) 1px, transparent 1px, transparent 4px)"
    }}
      // style={{
      //   background: "repeating-linear-gradient(45deg, rgb(245, 246, 248), rgb(245, 246, 248) 1px, transparent 1px, transparent 4px)"
      // }}
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
          <BeyondQASection/>
        </div>
        <div className="w-full">
          <WhyTailorTalk/>
        </div>
        <div className="w-full flex justify-center items-center">
          <ToolsIntegrations/>
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
        <div className="w-full">
          {/* <TypewriterEffect/> */}
        </div>

      </main>
    </>
  );
}
