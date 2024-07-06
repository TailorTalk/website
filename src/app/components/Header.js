import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <Image src={logo} alt="logo" className="w-10" />
        <span className="text-white  text-xl font-semibold">Tailor-Talk</span>
      </div>
      <div>
        <button className="text-[#5356FF] rounded px-4 py-2 bg-white">
          Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
