import React from "react";
import { motion } from "framer-motion";
import SocialButtons from "./SocialButtons";
import { fullName } from "../utils/data";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between px-8 pt-8 pb-16 sm:px-16" id="Profile">
      {/* Text Section */}
      <div className="text-center space-y-3 md:space-y-6 text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 pt-4 pb-8 md:w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold"
        >
          {fullName}
        </motion.h1>
        <div className="flex justify-center">
          <SocialButtons />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-lg md:text-xl lg:text-2xl"
        >
          Currently at University of Wisconsin-Madison, completing Data Science BA for Spring 2024. 
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center mb-4 md:mb-8">
          <a href="/contact.vcf" download className="contact-button">
            Download Contact
          </a>
          <a href="/harrison_roloff_resume.pdf" download className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
