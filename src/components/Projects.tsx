import Card from "./Card";
import data from "../utils/data.json";
import React from "react";

const Section4: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 bg-[#ffffff] w-full" id="Section4">
      <div className="flex flex-col items-center justify-between px-8 pt-8 pb-16 sm:px-16">
        <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8 w-full">
          <h4 className="ml-8 mb-8 text-3xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Projects
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {data[2]?.project?.map((pro, i) => (
              <Card
                key={pro.id}
                title={pro.title}
                description={pro.description}
                photos={pro.photos}
                link={pro.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
