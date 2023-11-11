// CompanyLogos.js

import fs from "fs";
import path from "path";

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/logos");
  const imageFilenames = await fs.readdir(imageDirectory);
  console.log(imageFilenames);

  return <div></div>;
};

const IntegrateSection = ({ logos }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {logos &&
        logos.map((logo, index) => (
          <div key={index} className="m-4">
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="object-contain w-24 h-24"
            />
          </div>
        ))}
    </div>
  );
};

export default GalleryPage;
