"use client"
import React, { useRef, useEffect } from 'react';

const Page = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add autoplay to the video URL if not already present
            if (!videoRef.current.src.includes("&autoplay=1")) {
              videoRef.current.src += "&autoplay=1";
            }
          } else {
            // Remove autoplay from the video URL
            const src = videoRef.current.src.replace("&autoplay=1", "");
            videoRef.current.src = src; // Reset the video source to stop playback
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    const videoSection = document.getElementById("videoSection");
    if (videoSection) {
      observer.observe(videoSection);
    }

    return () => {
      if (videoSection) {
        observer.unobserve(videoSection);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="videoSection"
        className="py-8 flex bg-white flex-col items-center justify-around"
      >
        <div className="flex flex-wrap gap-6 mt-16 px-4 md:px-8 lg:px-16 xl:px-32 mb-20 justify-center w-full">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/gyobVfaHI3Q?rel=0&modestbranding=1&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
