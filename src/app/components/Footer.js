import React from "react";
import Image from "next/image";
import logo from "../../../public/logoSvg.svg";


const Footer = () => {
  return (
    <footer
    style={{
      background: "repeating-linear-gradient(45deg, rgba(247,246,249,255), rgba(247,246,249,255) 1px, transparent 1px, transparent 4px)"
    }}
     className="px-6 pt-16 pb-8 font-sans">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row mb-6">
          {/* Logo and tagline */}
          <div className="mb-0 md:mb-0 ml-16">
            <div className="flex items-center">
              <div className=" rounded">
                <Image src={logo} alt="TailorTalk" className="w-36 h-20"/>
              </div>
            </div>
            <p className="text-[#61646B] text-[15px] font-light ml-2">
              Our vision is to empower SMBs with simple and powerful AI.
            </p>
            <div className="flex items-center space-x-4 mt-8 ml-2">
              <Image
                src="/meta_partner.jpg"
                alt="Meta Partner"
                width={80}
                height={32}
                className="object-contain"
              />
                <Image
                src="/google_startup.png"
                alt="Startup India"
                width={170}
                height={32}
                className="object-contain"
              />
              <Image
                src="/startup_india.jpg"
                alt="Startup India"
                width={110}
                height={32}
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:ml-40 md:mt-5">
            {/* Pages column */}
            <div>
              <h3 className="font-normal text-[#24242a] text-[15px] mb-4">Pages</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#61646B] text-[15px] hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-[#61646B] text-[15px] hover:text-gray-900">About</a></li>
                <li><a href="#pricing" className="text-[#61646B] text-[15px] hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-[#61646B] text-[15px] hover:text-gray-900">Contact</a></li>
              </ul>
            </div>

            {/* Products column */}
            <div>
              <h3 className="font-normal text-[#24242a] text-[15px] mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#61646B] text-[15px] hover:text-gray-900">Features</a></li>
                <li><a href="#integrations" className="text-[#61646B] text-[15px] hover:text-gray-900">Integrations</a></li>
                <li><a href="/guide" className="text-[#61646B] text-[15px] hover:text-gray-900">Docs</a></li>
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="font-normal text-[#24242a] text-[15px] mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-[#61646B] text-[15px] hover:text-gray-900">Blog</a></li>
                <li>
                  <a
                    href="/faqs"
                    className="text-[#61646B] text-[15px] hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-[#61646B] text-[15px] hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy_policy"
                    className="text-[#61646B] text-[15px] hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer - copyright and social links */}
        <div className="pt-8 mx-16 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © TailorTalk Private Limited | Bangalore, India
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://x.com/tailortalk_ai" aria-label="Twitter" target="_blank" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/tailortalk-ai/?viewAsMember=true" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;