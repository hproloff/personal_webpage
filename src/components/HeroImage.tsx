import React from "react";

const HeroImage: React.FC = () => {
  return (
    <img
      className="mb-4 md:w-[360px] bg-transparent lg:w-[400px] xl:w-[480px]"
      src="../public/headshot.jpg"
      alt="Hero"
    />
  );
};

export default HeroImage;
