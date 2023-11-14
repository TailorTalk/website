import Link from "next/link";

function NavbarMenu() {
  return (
    <ul className="absolute z-[1000] block p-4 space-y-4 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md md:hidden top-20 right-3">
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
        <Link className="hover:text-blue-500" href="/blogs">
          Stories
        </Link>
      </li>
    </ul>
  );
}

export default NavbarMenu;
