import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import linkedin from "../../../public/linkedin.svg";
import twitter from "../../../public/twitter.svg";

const Footer = () => {
  return (
    <footer className="px-32 py-12 bg-black">
      <div className="container  flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-1/4 sm:w-1/2 lg:w-1/4 mb-6">
          <div>
            <div className="flex gap-4">
              <Image src={logo} alt="logo" className="w-8" />
              <span className="text-[#62F7FF] text-2xl ">TailorTalk</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper purus eleifend purus faucibus faucibus.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Image src={twitter} alt="twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Image src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        {/* Resources */}
        <div className="w-1/4 sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
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
        <div className="w-1/4 sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-1/4 sm:w-1/2 lg:w-1/4 mb-6">
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
            <button className="px-4 py-2 bg-[#62F7FF] text-[#6D2EC9] rounded-r-lg hover:bg-blue-500">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <p className="text-center text-gray-500">
          Copyright 2021 The Tailor-Talk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
