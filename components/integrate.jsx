import fs from "fs/promises";
import path from "path";

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/logos");
  try {
    const logoFilenames = await fs.readdir(imageDirectory);
    const logos = logoFilenames.map((filename) => `/${filename}`);
    // console.log(logos);

    return (
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-24">
        <h1 className="mt-8 mb-4 text-xl font-bold md:mt-0 md:text-4xl">
          Chatbase integrates with your favorite tools
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          {logos &&
            logos.map((logo, index) => (
              <div key={index} className="m-4">
                <img
                  src={`/logos/${logo}`}
                  alt={`Company Logo ${index + 1}`}
                  className="object-contain w-[300px] h-[150px]"
                />
              </div>
            ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error reading logos directory:", error);
    return null; // or handle the error appropriately
  }
};

export default GalleryPage;
