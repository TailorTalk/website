import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="p-8 bg-white rounded-md shadow-md">
        <h1 className="my-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">
          The page you're looking for does not exist. It may have been moved or
          deleted.
        </p>
        <Link href="/">
          <span className="block p-2 mt-4 text-lg text-center text-white rounded-lg bg-tailorBlue-500 hover:bg-tailorBlue-600">
            Go back to the homepage
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
