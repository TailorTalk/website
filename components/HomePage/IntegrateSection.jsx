import fs from "fs/promises";
import path from "path";

// This component reads the files of /logo directory and show all the images present in the directory
const IntegrateSection = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/logos");
  try {
    const logoFilenames = await fs.readdir(imageDirectory);
    const logos = logoFilenames.map((filename) => `/${filename}`);

    return (
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-16 md:mt-40">
        <h1 className="px-6 mt-8 mb-10 text-3xl font-bold text-center md:mt-0 md:text-4xl">
          Seamless Integration, Endless Possibilities
        </h1>
        <div className="flex flex-wrap items-center justify-center px-8 md:px-28">
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

export default IntegrateSection;
