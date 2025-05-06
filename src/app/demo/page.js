"use client";
import React from "react";
// import { demoMetadata } from '../Config/metadata/index';
// import { generateBreadcrumbSchema } from '../Config/metadata/structuredData';
// import Script from 'next/script';
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// export { demoMetadata as metadata };

export default function Demo() {
  // const breadcrumbSchema = generateBreadcrumbSchema([
  //   { name: 'Home', path: '/' },
  //   { name: 'Demo', path: '/demo' }
  // ]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const [hasTriggeredSwitch, setHasTriggeredSwitch] = useState(false);
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", value => {
      // Switch to demo UI when scrolling down past threshold
      if (value > 0.55 && !hasTriggeredSwitch) {
        setHasTriggeredSwitch(true);
      }
      // Switch back to product image when scrolling back up
      if (value < 0.45 && hasTriggeredSwitch) {
        setHasTriggeredSwitch(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasTriggeredSwitch]);

  return (
    <>
      {/* <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script> */}
      <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        <div 
          ref={containerRef} 
          className="min-h-[300vh] relative"
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <motion.div
              style={{ scale, opacity }}
              className="relative"
            >
              <img
                src="/PlatformImage.png"
                alt="Product Preview"
                className={`w-full max-w-[1200px] rounded-xl shadow-2xl transition-opacity duration-300 ${hasTriggeredSwitch ? 'opacity-0' : 'opacity-100'}`}
              />
            </motion.div>

            <motion.div
              style={{ opacity: finalOpacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-white transition-opacity duration-300 ${hasTriggeredSwitch ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col">
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/PlatformImage.png"
                      alt="Demo UI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};