import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projectsData = [
  {
    title: 'Blog writing',
    description: 'The Blog Writing project is a web application designed to create, manage, and display blog posts. It allows users to add, edit, and delete blog entries, each containing a title, description, and status. The project emphasizes a clean, responsive design, making it easy for users to browse and interact with content. The backend is built with Node.js and Express.js, and the frontend utilizes modern frameworks like React and Tailwind, ensuring a seamless user experience.',
    image: '/1.png',
    techStack: 'React Js',
    category: 'react',
    githubLink: 'https://github.com/Chantha2121/Project-Blog-Writing',
    liveLink: 'https://github.com/Chantha2121/Project-Blog-Writing',
  },
  {
    title: 'To Do List',
    description: 'The To-Do List project is built using React.js for the frontend to create an interactive user interface. The backend is powered by Node.js and Express.js, providing robust server-side functionality. MongoDB is used as the database to efficiently manage and store the tasks, allowing for seamless CRUD operations.',
    image: '/2.png',
    techStack: 'Fullstack',
    category: 'fullstack',
    githubLink: 'https://github.com/Chantha2121/To-Do-List',
    liveLink: 'https://github.com/Chantha2121/Project-Blog-Writing',
  },
  {
    title: 'Blog writing',
    description: 'In the Blog Writing project, I utilized EJS for templating, combined with Node.js and Express.js to handle server-side logic. The project is data is managed and stored in a MySQL database, ensuring efficient content management and retrieval.',
    image: '/3.png',
    techStack: 'Fullstack',
    category: 'fullstack',
    githubLink: 'https://github.com/Chantha2121/database_blog',
    liveLink: 'https://github.com/Chantha2121/Project-Blog-Writing',
  },
  {
    title: 'Project Java',
    description: 'In the Inventory Management System project, I developed a Java GUI using Java Swing to create a user-friendly interface for managing inventory. The system is backed by a MySQL database, which handles all data storage and retrieval operations, ensuring seamless inventory tracking and management.',
    image: '/4.png',
    techStack: 'JAVA',
    category: 'JAVA',
    githubLink: 'https://github.com/Chantha2121/Project-Java',
    liveLink: 'https://github.com/Chantha2121/Project-Java',
  },
  {
    title: 'Project Job Board',
    description: 'The Job Board project is built using React.js to provide a dynamic and interactive platform for job listings and applications. It features a user-friendly interface that allows job seekers to browse job postings, apply for positions, and manage their profiles. The application also includes functionalities for employers to post job openings and review applications, creating a comprehensive solution for job matching and recruitment.',
    image: '/5.png',
    techStack: 'React Js',
    category: 'react',
    githubLink: 'https://github.com/Chantha2121/Project_job_Board',
    liveLink: 'https://project-job-board.vercel.app/',
  },
  {
    title: 'Project Personal Profile',
    description: `The Personal Profile project is developed using React.js to create a dynamic and interactive online portfolio. It showcases a user’s professional background, skills, and accomplishments through a well-structured layout. Features include a detailed About Me section, a showcase of projects, and a resume. The profile is designed with responsiveness and visual appeal in mind, providing an engaging user experience that highlights the individual is expertise and achievements.`,
    image: '/6.png',
    techStack: 'React Js',
    category: 'react',
    githubLink: 'https://github.com/Chantha2121/Personal-account',
    liveLink: 'https://chantha2121.github.io/Personal-account/',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12">My Projects</h2>

        <Tabs defaultValue="all">
          <TabsList className="flex justify-center flex-wrap gap-2 overflow-x-auto mb-10 bg-none dark:bg-slate-800">
            <TabsTrigger
              value="all"
              className="px-6 py-2 rounded-full bg-red-500 text-white dark:bg-red-600 font-semibold shadow hover:bg-red-600 dark:hover:bg-red-700 transition duration-300"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="react"
              className="px-6 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
            >
              React Js
            </TabsTrigger>
            <TabsTrigger
              value="JAVA"
              className="px-6 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
            >
              JAVA
            </TabsTrigger>
            <TabsTrigger
              value="fullstack"
              className="px-6 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
            >
              Fullstack
            </TabsTrigger>
          </TabsList>

          {/* All Projects Tab */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover"
                      layout="responsive"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-br-lg">
                      {project.techStack}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300"
                        >
                          View Result
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
                        >
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* React Js Tab */}
          <TabsContent value="react">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter((project) => project.category === 'react')
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover"
                        layout="responsive"
                        width={1920}
                        height={1080}
                      />
                      <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-br-lg">
                        {project.techStack}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex space-x-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300"
                          >
                            View Result
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          {/* JAVA Tab */}
          <TabsContent value="JAVA">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter((project) => project.category === 'JAVA')
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover"
                        layout="responsive"
                        width={1920}
                        height={1080}
                      />
                      <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-br-lg">
                        {project.techStack}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex space-x-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300"
                          >
                            View Result
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          {/* Fullstack Tab */}
          <TabsContent value="fullstack">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter((project) => project.category === 'fullstack')
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover"
                        layout="responsive"
                        width={1920}
                        height={1080}
                      />
                      <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-br-lg">
                        {project.techStack}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex space-x-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300"
                          >
                            View Result
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
