import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png"; // Adjust the path as needed

const Header = () => {
  return (
    <header className="bg-white px-8 py-5 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Image src={logo} alt="logo" className="w-36 h-full" />
          <nav className="hidden md:flex gap-8 items-center">
          <a href="/pricing" className="text-gray-700 hover:text-black font-medium">
            Pricing
          </a>
          <a href="#resources" className="text-gray-700 hover:text-black font-medium">
            Resources
          </a>
          <a href="#product" className="text-gray-700 hover:text-black font-medium">
            Products
          </a>
        </nav>
        </div>

        {/* Navigation Links */}
        

        {/* Button */}
        <div>
          <a href="https://calendly.com/shiva-tailortalk/30min" target="_blank">
            <button className="globalBgColor text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Hire Toby Today
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
