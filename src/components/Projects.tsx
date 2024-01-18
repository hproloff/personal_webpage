import Card from "./Card";
import data from "../utils/data.json";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 bg-[#f4e8d8] w-full" id="Portfolio">
      <div className="flex flex-col items-center justify-between px-8 pt-8 pb-16 sm:px-16">
        <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8 w-full">
          <h4 className="ml-8 mb-8 text-3xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Portfolio
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {data[1]?.project?.map((item, i) => (
              <Card
              key={i}
              title={item.title}
              description={item.description}
              photos={item.photos}
              medium={item.medium}
              date={item.date}
              size={item.size}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
