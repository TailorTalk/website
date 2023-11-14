import Link from "next/link";

// Importing icons from react-icon library
import { FaTwitter } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="relative px-0 pb-6 mt-12 bg-gray-100 md:px-4 pt-7">
      <div className="flex flex-col flex-wrap text-left sm:flex-row sm:justify-between px-7">
        {/* Left side logos & socials */}
        <div>
          <Logo />
          <div className="flex px-3 mt-3 mb-6 space-x-2 lg:mb-0">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 text-blue-500 bg-white rounded-full shadow-lg cursor-pointer"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full shadow-lg cursor-pointer"
            >
              <PiMediumLogoFill className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side contact & links */}
        <ul className="px-4">
          <li>
            <a
              className="flex items-center pb-2 text-gray-600 text-md hover:text-gray-800"
              href="mailto:team@tailortalk.in"
            >
              <MdEmail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </li>
          <li>
            <a
              className="block pb-2 text-gray-600 text-md hover:text-gray-800"
              href="/about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="block pb-2 text-gray-600 text-md hover:text-gray-800"
              href="/privacy_policy"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-center ">
        Copyright © 2023 by{" "}
        <a className="font-semibold" href="#">
          Tailor Talks & Co.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
