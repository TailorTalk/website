function ComingSoonComp() {
  return (
    // Using min-h-[calc(100vh-4rem)] to remove the height of navbar, should be removed later when /blogs page get completed

    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="p-8 text-center rounded-lg ">
        <h1 className="my-4 text-3xl text-gray-800">Coming soon</h1>
      </div>
    </div>
  );
}

export default ComingSoonComp;
