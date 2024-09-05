import React from "react";
import { FaYoutube, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400 text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.youtube.com/@ChanThacoding-wh1eq"
          aria-label="YouTube"
          className="text-gray-700 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
        >
          <FaYoutube className="text-2xl sm:text-3xl lg:text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/choeurn-chantha-28992225b"
          aria-label="LinkedIn"
          className="text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin className="text-2xl sm:text-3xl lg:text-4xl" />
        </a>
        <a
          href="https://github.com/Chantha2121?tab=repositories"
          aria-label="GitHub"
          className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <FaGithub className="text-2xl sm:text-3xl lg:text-4xl" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100042328303651&mibextid=ZbWKwL"
          aria-label="Facebook"
          className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl" />
        </a>
      </div>
      <p className="text-sm lg:text-base text-gray-700 dark:text-gray-400">
        © Choeurn Chantha. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
