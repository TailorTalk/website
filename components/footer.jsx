import Link from "next/link";
import { FaTwitter, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative pb-6 mt-12 bg-gray-100 pt-7">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Link href="/">
              <span className="flex items-center text-gray-800">
                <img src="/logo.png" alt="Logo" className="mt-1 mr-1 h-11" />
                <span className="text-xl font-semibold font-comfortaa">
                  Tailor Talk
                </span>
              </span>
            </Link>
            {/* <h5 className="mt-0 mb-2 text-md text-blueGray-600">
              Find us on any of these platforms
            </h5> */}
            <div className="flex mt-6 mb-6 space-x-2 lg:mb-0">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 mr-2 font-normal text-blue-500 bg-white rounded-full shadow-lg outline-none cursor-pointer text-lightBlue-400 align-center focus:outline-none"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="flex items-center justify-center w-10 h-10 mr-2 font-normal text-blue-700 bg-white rounded-full shadow-lg outline-none cursor-pointer text-lightBlue-400 align-center focus:outline-none"
              >
                <FaFacebookSquare className="w-5 h-5" />
              </a> */}
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none cursor-pointer text-lightBlue-400 align-center focus:outline-none"
              >
                <PiMediumLogoFill className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="flex items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none cursor-pointer text-lightBlue-400 align-center focus:outline-none"
              >
                <FaGithub className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-lg font-semibold text-gray-800"></span>
                <ul className="list-unstyled"></ul>
              </div>
              <div className="w-full px-4 pt-3 lg:w-4/12">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="flex items-center pb-2 text-gray-600 text-md hover:text-gray-800"
                      href="mailto:tailortalks.in"
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
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div>
              Copyright © 2023 by{" "}
              <a className="font-semibold" href="#">
                Tailor Talks & Co.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
