import Link from "next/link";

function NavbarItems({ pathname }) {
  return (
    <ul className="ml-[10vw]  items-center hidden  text-gray-900 md:flex gap-16">
      <li>
        <Link
          className={
            pathname === "/demo"
              ? " text-tailorBlue-500"
              : "hover:text-tailorBlue-500"
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
              ? "text-tailorBlue-500"
              : "hover:text-tailorBlue-500"
          }
          href="/pricing"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname === "/blogs"
              ? " text-tailorBlue-500"
              : "hover:text-tailorBlue-500"
          }
          href="/blogs"
        >
          Our Stories
        </Link>
      </li>
    </ul>
  );
}

export default NavbarItems;
