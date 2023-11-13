import Link from "next/link";
import { FaTwitter, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative px-4 pb-6 mt-12 bg-gray-100 pt-7">
      <div className="flex flex-wrap justify-between text-left px-7 lg:text-left">
        <div className="px-4">
          <Link href="/">
            <span className="flex items-center text-gray-800">
              <img src="/logo.png" alt="Logo" className="mt-1 mr-1 h-11" />
              <span className="text-xl font-semibold font-comfortaa">
                Tailor Talk
              </span>
            </span>
          </Link>
          <div className="flex mt-6 mb-6 space-x-2 lg:mb-0">
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
