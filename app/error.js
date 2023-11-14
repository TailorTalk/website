"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>
      <p className="mb-6 text-gray-700">
        We apologize for the inconvenience. An error occurred while processing
        your request.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 text-white transition rounded-md bg-tailorBlue-500 hover:bg-tailorBlue-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
