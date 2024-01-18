import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  photos: string[];
  medium: string;
  date: string;
  size: string;
}

const Card: React.FC<CardProps> = ({ title, description, photos, medium, date, size }) => {
  return (
    <div className="border border-custom-lightGray rounded-lg mb-5 my-10 pb-3 transition duration-400 overflow-hidden">
      <div className="relative w-full h-72 md:h-96 overflow-hidden"> {/* Adjusted height */}
        <Image
          src={photos[0]}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-5">
        <p className="text-gray-500 font-bold text-lg tracking-tight mb-2">
          {`${title} | ${medium} | ${date} | ${size}`}
        </p>
        <p className="font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
