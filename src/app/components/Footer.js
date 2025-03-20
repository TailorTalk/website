import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import linkedin from "../../../public/linkedin.svg";
import twitter from "../../../public/twitter.svg";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-24 lg:px-32 py-12 bg-black">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <div>
          <div className="flex gap-4 items-center">
        <span className="text-white text-lg font-normal">Tailortalk Private Limited</span>
      </div>
            <p className="mt-4 w-1/2 text-gray-400 text-sm">
             Bangalore, India
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://x.com/tailortalk_ai" target="_blank" className="text-gray-400 hover:text-white">
                <Image src={twitter} alt="twitter" />
              </a>
              <a href="https://www.linkedin.com/company/tailortalk-ai/?viewAsMember=true" target="_blank" className="text-gray-400 hover:text-white">
                <Image src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        {/* Resources */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>
            <a href="/about_founders" className="text-gray-400 hover:text-white">About Founders</a>

            </li>
            <li>
              <a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        {/* Useful Links */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
          <li>
          <a href="/privacy_policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
            <a href="mailto:contact@tailortalk.ai" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="mt-4 text-gray-400 text-sm">
            Sign up and receive the latest news via email.
          </p>
          <div className="mt-6 flex">
            <input
              type="email"
              className="w-full p-4 rounded-l-lg bg-gray-800 text-gray-300 focus:outline-none"
              placeholder="Email address"
            />
            <button className="px-4 py-2 bg-[#42B4EE] text-white rounded-r-lg hover:bg-blue-500">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <p className="text-center text-gray-500">
          Copyright 2024 TailorTalk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
