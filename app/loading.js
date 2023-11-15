import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="text-4xl text-tailorBlue-500 animate-spin" />
    </div>
  );
};

export default Loading;
