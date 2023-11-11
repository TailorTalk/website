import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-blue-500">
      <div className="p-8 text-center text-gray-800 bg-white rounded-md shadow-md">
        <div className="text-6xl text-red-500">
          <FaExclamationTriangle />
        </div>
        <h1 className="my-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">
          The page you're looking for does not exist. It may have been moved or
          deleted.
        </p>
        <Link href="/">
          <span className="block p-3 mt-4 text-lg text-blue-500 bg-gray-400 hover:underline rounded-xl">
            Go back to the homepage
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
