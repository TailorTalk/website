"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavbarMenu from "./NavbarMenu";
import NavMenuToggleBtn from "./NavMenuToggleBtn";
import ConsoleBtn from "./ConsoleBtn";
import NavbarItems from "./NavbarItems";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-w-full container mx-auto px-4 pr-9 flex justify-between items-center h-16 text-[17px] font-normal pt-4 pb-4 relative">
      <Logo />
      <div className="text-l ">
        {/* Items renders for larger screens (breakpoint - md) */}
        <NavbarItems pathname={pathname} />
        {/* Menu renders on smaller screen (breakpoint - md) */}
        {menuOpen ? <NavbarMenu /> : null}
      </div>

      {/* Button renders on smaller screen (breakpoint - md) */}
      <NavMenuToggleBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Items renders for larger screens (breakpoint - md) */}
      <ConsoleBtn />
    </div>
  );
};

export default Navbar;
