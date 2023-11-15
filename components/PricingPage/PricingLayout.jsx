// Importing Right Arrow Icon from "React-Icon" libraray
import { BsArrowRight } from "react-icons/bs";
import Footer from "../ui/Footer";
import HaveQuestion from "../ui/HaveQuestion";

function Layout({ children }) {
  return (
    <>
      <h2 className="px-4 mt-8 mb-10 text-4xl font-semibold text-center text-gray-700 md:font-extrabold">
        Discover Your Ideal Plan
      </h2>
      {children}
      <HaveQuestion />
      <Footer />
    </>
  );
}

export default Layout;
