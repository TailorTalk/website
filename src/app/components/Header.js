import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Image src={logo} alt="logo" className="w-8" />
        <span className="text-white  text-2xl ">Tailor-Talk</span>
      </div>
      <div>
        {/* <button className="text-[#6D2EC9] rounded px-4 py-2 bg-white">
          Demo
        </button> */}
      </div>
    </div>
  );
};

export default Header;
