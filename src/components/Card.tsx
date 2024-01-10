import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  photos: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, photos, link }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovering && photos.length > 1) {
      interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 2000); // Change image every 2 seconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovering, photos.length]);

  return (
    <div
      className="hover:shadow-md border border-custom-lightGray rounded-lg max-w-sm mb-5 backdrop-filter hover:rotate-0 px-4 my-10 pb-3 md:min-w-[400px] min-w-[300px] cursor-pointer transition duration-400 transform hover:scale-110"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-60 rounded-lg overflow-hidden">
        <Image
          src={photos[currentPhotoIndex]}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-5">
        <h5 className="text-gray-500 font-bold text-2xl tracking-tight mb-2">
          {title}
        </h5>
        <p className="font-normal text-gray-700 mb-3">{description}</p>
        <a
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={link}
        >
          More...
        </a>
      </div>
    </div>
  );
};

export default Card;