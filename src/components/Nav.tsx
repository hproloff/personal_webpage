import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Toggle from "./Toggle";

const Nav: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.div
      initial={{ position: "relative" }}
      animate={
        navbar ? { position: "sticky", top: 0, zIndex: 50 } : { position: "relative" }
      }
    >
      <div
        className={
          navbar
            ? "stickyNavbarStyles dark:bg-gray-900"
            : "flex bg-[#F6F8FB] items-center dark:bg-gray-900 justify-between w-full py-8 px-8 sm:px-16 z-50"
        }
      >
        {/* Navigation Links */}
        <div className="items-center flex space-x-4 dark:bg-gray-900">
          <Link to="Section4" spy={true} smooth={true} offset={-90} duration={500} activeClass="active" className="dark:bg-gray-900 navLink">
            Projects
          </Link>
          <Link to="Section2" spy={true} smooth={true} offset={-90} duration={500} activeClass="active" className="dark:bg-gray-900 navLink">
            Experiences
          </Link>
        </div>

        <Toggle />
      </div>
    </motion.div>
  );
};

export default Nav;
