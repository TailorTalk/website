import fs from "fs/promises";
import path from "path";

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/logos");
  try {
    const logoFilenames = await fs.readdir(imageDirectory);
    const logos = logoFilenames.map((filename) => `/${filename}`);
    // console.log(logos);

    return (
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-28">
        <h1 className="mt-8 mb-10 text-4xl font-bold md:mt-0 md:text-4xl">
          Seamless Integration, Endless Possibilities
        </h1>
        <div className="flex flex-wrap items-center justify-center px-28">
          {logos &&
            logos.map((logo, index) => (
              <div key={index} className="m-4">
                <img
                  src={`/logos/${logo}`}
                  alt={`Company Logo ${index + 1}`}
                  className="object-contain w-[220px] h-[110px]"
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
