"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill
} from "react-icons/ri";

const icons = [
  {
    path: 'https://www.youtube.com/@ChanThacoding-wh1eq',
    name: <RiYoutubeFill />,
    hoverColor: 'hover:text-red-600 dark:hover:text-red-400'
  },
  {
    path: 'https://www.linkedin.com/in/choeurn-chantha-28992225b',
    name: <RiLinkedinFill />,
    hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    path: 'https://github.com/Chantha2121?tab=repositories',
    name: <RiGithubFill />,
    hoverColor: 'hover:text-black dark:hover:text-white'
  },
  {
    path: 'https://www.facebook.com/profile.php?id=100042328303651&mibextid=ZbWKwL',
    name: <RiFacebookFill />,
    hoverColor: 'hover:text-blue-500 dark:hover:text-blue-300'
  },
  {
    path: 'https://drive.google.com/file/d/1goAQOtzaPiMwBF8PSx8b8cHIyTyTCJNS/view?usp=sharing', // Replace with actual download path or function
    name: <RiInstallFill />,
    hoverColor: 'hover:text-green-500 dark:hover:text-green-300'
  }
];

const Socials = () => {
  return (
    <div className="w-full flex justify-center xl:justify-start mt-5">
      <div className="flex justify-center space-x-4 text-3xl text-gray-500 dark:text-gray-400 xl:ml-5">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${icon.hoverColor} transition duration-300 ease-in-out transform hover:scale-110`}
          >
            {icon.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
