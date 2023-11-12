"use client";
import { useState } from "react"; // Import useState
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="min-w-full container mx-auto px-4 pr-9 flex justify-between items-center h-16 text-[17px] font-normal pt-4 pb-4">
      {/* shadow-[2px_1px_4px_rgba(0,0,0,0.2)] */}
      <Link href="/">
        <span className="flex items-center text-gray-800">
          <img src="/logo.png" alt="Logo" className="mt-1 ml-3 mr-1 h-11" />
          <span className="text-xl font-semibold font-comfortaa">
            Tailor Talk
          </span>
        </span>
      </Link>
      <div className="text-l ">
        <ul className="ml-[10vw]  items-center hidden  text-gray-900 md:flex gap-16">
          <li>
            <Link
              className={
                pathname === "/demo" ? " text-blue-500" : "hover:text-blue-500"
              }
              href="/demo"
            >
              Self Demo
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/pricing"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
              href="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/blogs" ? " text-blue-500" : "hover:text-blue-500"
              }
              href="/blogs"
            >
              Our Stories
            </Link>
          </li>
        </ul>
        {/* Conditionally render the menu items based on the menuOpen state */}
        {menuOpen ? (
          <ul className="absolute z-10 block p-4 space-y-4 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md md:hidden top-20 right-3">
            <li>
              <Link className="hover:text-blue-500" href="/demo">
                Self Demo
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/">
                Console
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
      <div>
        {/* Conditionally render the menu icon based on the menuOpen state */}
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
      </div>
      <div className="hidden md:block">
        <Link
          className="hover:text-blue-500"
          href="https://talkui-production.up.railway.app/assets"
          target="__blank"
        >
          Console&nbsp;
          <BsArrowRight className="inline" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
