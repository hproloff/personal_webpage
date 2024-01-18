import React from "react";
import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div className="w-full bg-transparent relative">
      <Image
        src="/headshot.jpg"
        alt="Hero"
        layout="responsive"
        width={700} // Adjust width as needed
        height={700} // Adjust height to maintain aspect ratio
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};


export default HeroImage;