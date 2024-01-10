import React from "react";
import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div className="mb-4 md:w-[360px] bg-transparent lg:w-[400px] xl:w-[480px] relative">
      <Image
        src="/headshot.jpg" // Adjust the path as needed
        alt="Hero"
        layout="fill"
        objectFit="cover" // This will cover the area and clip the image as needed
        className="rounded-lg" // Apply rounded edges to the image
      />
    </div>
  );
};

export default HeroImage;