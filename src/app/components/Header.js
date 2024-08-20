import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <nav className="bg-transparent px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" aria-label="Home">
            <Image src={logo} alt="logo" className="w-8" />
          </a>
          <a href="/" className="text-white text-2xl">
            TailorTalk
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#services" className="text-white">Services</a>
          <a href="/blogs" className="text-white">Blogs</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;