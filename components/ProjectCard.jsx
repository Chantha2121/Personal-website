import Link from "next/link";
import { Button } from "./ui/button";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="max-w-full sm:max-w-sm mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      style={{
        backgroundImage: `url(${project.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "slideIn 0.6s ease-out forwards",
      }}
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6 rounded-b-lg transition-colors duration-300 bg-green-100 dark:bg-teal-900">
        {/* Project Name */}
        <h3 className="text-lg sm:text-xl font-bold">{project.name}</h3>
        {/* Project Description */}
        <p className="text-sm sm:text-base mt-2">{project.description}</p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <Link href={project.link}>
            <Button className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded transition-colors duration-300 shadow-md">
              View Project
            </Button>
          </Link>
          <Link href={project.github}>
            <Button className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded transition-colors duration-300 shadow-md">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
