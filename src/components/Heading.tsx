import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="p-10 text-2xl font-semibold grid place-items-center">
      <h1>{text}</h1>
    </div>
  );
};

export default Heading;
