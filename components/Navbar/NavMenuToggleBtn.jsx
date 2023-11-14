import { BsList, BsX } from "react-icons/bs";

function NavMenuToggleBtn({ menuOpen, setMenuOpen }) {
  return (
    <div>
      {/* Conditionally render the menu icon based on the menuOpen state */}
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <BsX className="w-6 h-6" />
        ) : (
          <BsList className="w-6 h-6" />
        )}
      </div>
    </div>
  );
}

export default NavMenuToggleBtn;
