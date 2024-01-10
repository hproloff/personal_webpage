import React from "react";
import { motion } from "framer-motion";
import SocialButtons from "./SocialButtons";
import { fullName } from "../utils/data";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-16 sm:px-16">
      {/* Text Section */}
      <div className="text-center md:text-left space-y-3 md:space-y-6 text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8 md:w-1/2 order-last md:order-none">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold"
        >
          {fullName}
        </motion.h1>
        <SocialButtons />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-lg md:text-xl lg:text-2xl"
        >
          Currently at University of Wisconsin-Madison, completing Data Science BA for Spring 2024. 
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center md:justify-start">
          <a href="/contact.vcf" download className="contact-button">
            Download Contact
          </a>
          <a href="/harrison_roloff_resume.pdf" download className="resume-button">
            Download Resume
          </a>
        </div>
      </div>

      {/* Profile Picture Section */}
      <motion.div
        className="w-full md:w-[360px] lg:w-[400px] xl:w-[480px] mt-8 md:mt-0 order-first md:order-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          className="w-full h-auto rounded-lg shadow-lg mx-auto"
          src="/headshot.jpg"
          alt="Profile"
        />
      </motion.div>
    </div>
  );
};

export default ProfileSection;
