import Link from "next/link";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="flex items-center justify-between w-full min-w-full p-3 mt-4 text-black bg-gray-200 sm:p-8 sm:absolute sm:bottom-0 sm:h-32 sm:m-0 ">
        <div className="flex flex-col text-gray-500">
          <div className="hidden pb-3 text-lg font-semibold text-gray-700 sm:flex">
            <img className="h-10" src="./logo.png" />
            {/* <span>Tailor Talks</span> */}
          </div>
          <Link href="/about">
            <span className="hover:underline">About Us</span>
          </Link>
          <Link href="/privacy_policy">
            <span className="hover:underline">Privacy Policy</span>
          </Link>
          {/* <Link href="/business_policy">
            <span className=" hover:underline">Business Policy</span>
          </Link> */}
        </div>

        <div className="flex-col hidden text-gray-500 sm:flex ">
          <div className="pb-3 text-lg font-semibold text-gray-700">
            Contact Us
          </div>
          {/* <div>Phone: +916387123784</div> */}
          <div>Address: Bangalore, India</div>
          <div>
            Email:{" "}
            <a href="mailto:team@tailortalk.in" className="underline">
              team@tailortalk.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
