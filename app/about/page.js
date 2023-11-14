import React from "react";

// Code for about page - /about
export const metadata = {
  title: "About | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-xl p-6 mx-auto text-center bg-white rounded-lg shadow-md">
        <h4 className="mb-4 text-2xl font-bold text-gray-700">About Us</h4>
        <p className="text-sm text-gray-600">
          We are a dedicated team with expertise in building products around
          Large Language Models (LLMs). As proud alumni of IIT, our foundation
          is solid, and our commitment unwavering. Based in Bangalore, we're
          passionate about pushing the boundaries of chatbot technology. Feel
          free to reach out to us via the provided email. We're always open to
          collaboration and innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
