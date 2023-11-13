// code for "Demo" page - /demo

export const metadata = {
  title: "Demo | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function page() {
  // Using min-h-[calc(100vh-4rem)] to remove the height of navbar, should be removed later when /demo page get completed
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="p-8 text-center rounded-lg ">
        <h1 className="my-4 text-3xl text-gray-800">Coming soon</h1>
      </div>
    </div>
  );
}

export default page;
