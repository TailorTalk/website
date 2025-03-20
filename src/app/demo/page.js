import React from "react";
const demo = () => {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="w-full h-[40rem] lg:h-auto max-w-7xl py-10 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/1OTRPt5h0eU"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default demo;
  