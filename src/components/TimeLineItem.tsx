import React, { useState } from "react";

interface TimeLineItemProps {
  university?: string;
  degree?: string;
  date?: string;
  description?: string;
  company?: string;
  position?: string;
  collapsedByDefault?: boolean;
}

const parseTextWithLinks = (text: string) => {
  const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (index % 3 === 0) {
      return part;
    } else if (index % 3 === 1) {
      return (
        <a
          key={index}
          href={parts[index + 1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          {part}
        </a>
      );
    }
    return null;
  }).filter(part => part !== null);
};

const parseDescriptionWithNewlines = (text: string) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((paragraph, index) => {
    if (paragraph.trim() === '') return null;
    return (
      <p key={index} className={index > 0 ? "mt-3" : ""}>
        {parseTextWithLinks(paragraph)}
      </p>
    );
  }).filter(paragraph => paragraph !== null);
};

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  university,
  degree,
  date,
  description,
  company,
  position,
  collapsedByDefault = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsedByDefault);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <li className="mb-5">
      <div className="flex group items-center">
        <div className="bg-custom-bg-tertiary group-hover:bg-custom-interactive-secondary z-10 rounded-full border-4 border-custom-interactive-primary h-5 w-5 transition-colors duration-200">
          <div className="bg-custom-interactive-primary h-1 w-4 items-center ml-4 mt-1"></div>
        </div>
        <div className="flex-1 ml-4 z-10 font-medium">
          <div className="order-1 space-y-2 bg-transparent rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4 border-2 border-indigo-100">
            <div 
              className={`flex items-start justify-between cursor-pointer ${description ? "hover:opacity-80" : ""}`}
              onClick={description ? toggleCollapse : undefined}
            >
              <div className="flex-1">
                <h3 className="mb-3 font-bold text-custom-text-primary text-2xl">
                  {degree && parseTextWithLinks(degree)}
                  {position && parseTextWithLinks(position)}
                </h3>
                <p className="pb-4 text-sm text-custom-text-primary">
                  {university && parseTextWithLinks(university)}
                  {company && parseTextWithLinks(company)} | {date && date}
                </p>
              </div>
              {description && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCollapse();
                  }}
                  className="ml-4 mt-1 text-custom-interactive-primary hover:text-custom-interactive-secondary transition-colors duration-200 focus:outline-none flex-shrink-0"
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isCollapsed ? "" : "rotate-180"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            {description && (
              <>
                <hr className="border-custom-border-primary" />
                <div
                  className={`text-sm font-medium leading-snug tracking-wide text-custom-text-primary transition-all duration-300 overflow-hidden ${
                    isCollapsed ? "max-h-0 opacity-0 mt-0" : "max-h-[2000px] opacity-100 mt-2"
                  }`}
                >
                  {parseDescriptionWithNewlines(description)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimeLineItem;
