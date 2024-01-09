import React from "react";

const SocialButtons: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-start pt-5 space-x-5">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/harrison.roloff/" // Insert Instagram link
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out dark:bg-gray-700 bg-white"
      >
        <img
          src="/instagram_icon.png" // Path to Instagram icon
          alt="Instagram"
          className="w-7 h-7" // Adjust size as needed
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/harrison-roloff/" // Insert LinkedIn link
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out dark:bg-gray-700 bg-white"
      >
        <img
          src="linkedin_icon.png" // Path to LinkedIn icon
          alt="LinkedIn"
          className="w-7 h-7"
        />
      </a>

      {/* Facebook */}
      <a
        href="#" // Insert Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out dark:bg-gray-700 bg-white"
      >
        <img
          src="/facebook_icon.png" // Path to Facebook icon
          alt="Facebook"
          className="w-7 h-7"
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/hproloff" // Insert GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out dark:bg-gray-700 bg-white"
      >
        <img
          src="/github_icon.png" // Path to GitHub icon
          alt="GitHub"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
};

export default SocialButtons;
