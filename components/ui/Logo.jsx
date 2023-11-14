import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center text-gray-800">
        <img src="/logo.png" alt="Logo" className="mt-1 ml-3 mr-1 h-11" />
        <span className="text-xl font-semibold font-comfortaa">
          Tailor Talk
        </span>
      </span>
    </Link>
  );
}

export default Logo;
