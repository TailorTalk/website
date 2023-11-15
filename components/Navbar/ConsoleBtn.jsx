import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function ConsoleBtn() {
  return (
    <div className="hidden md:block">
      <Link
        className="hover:text-tailorBlue-500"
        href="https://talkui-production.up.railway.app/assets"
        target="__blank"
      >
        Console&nbsp;
        <BsArrowRight className="inline" />
      </Link>
    </div>
  );
}

export default ConsoleBtn;
