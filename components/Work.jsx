"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "1.png",
    category: "MERN Stack",
    name: "Blog Writing Project",
    description:
      "The Blog Writing project is a web application designed to create, manage, and display blog posts. It allows users to add, edit, and delete blog entries, each containing a title, description, and status. The project emphasizes a clean, responsive design, making it easy for users to browse and interact with content. The backend is built with Node.js and Express.js, and the frontend utilizes modern frameworks like React and Tailwind, ensuring a seamless user experience.",
    link: "https://github.com/Chantha2121/Project-Blog-Writing",
    github: "https://github.com/Chantha2121/Project-Blog-Writing",
  },
  {
    image: "2.png",
    category: "MERN Stack",
    name: "To Do List",
    description:
      "The To-Do List project is built using React.js for the frontend to create an interactive user interface. The backend is powered by Node.js and Express.js, providing robust server-side functionality. MongoDB is used as the database to efficiently manage and store the tasks, allowing for seamless CRUD operations.",
    link: "https://github.com/Chantha2121/To-Do-List",
    github: "https://github.com/Chantha2121/To-Do-List",
  },
  {
    image: "3.png",
    category: "Node and Express JS",
    name: "Blog Writing Project",
    description:
      "In the Blog Writing project, I utilized EJS for templating, combined with Node.js and Express.js to handle server-side logic. The project is data is managed and stored in a MySQL database, ensuring efficient content management and retrieval.",
    link: "https://github.com/Chantha2121/database_blog",
    github: "https://github.com/Chantha2121/database_blog",
  },
  {
    image: "4.png",
    category: "Java and MySQL",
    name: "Inventory Management System",
    description:
      "In the Inventory Management System project, I developed a Java GUI using Java Swing to create a user-friendly interface for managing inventory. The system is backed by a MySQL database, which handles all data storage and retrieval operations, ensuring seamless inventory tracking and management.",
    link: 'https://github.com/Chantha2121/Project-Java',
    github: 'https://github.com/Chantha2121/Project-Java',
  },
  {
    image: "5.png",
    category: "React JS",
    name: "Job Board",
    description:
      "The Job Board project is built using React.js to provide a dynamic and interactive platform for job listings and applications. It features a user-friendly interface that allows job seekers to browse job postings, apply for positions, and manage their profiles. The application also includes functionalities for employers to post job openings and review applications, creating a comprehensive solution for job matching and recruitment.",
    link: "https://chantha2121.github.io/Personal-account/",
    github: "https://github.com/Chantha2121/Personal-account",
  },
  {
    image: "6.png",
    category: "React JS",
    name: "Personal Profile",
    description:
      "This Personal Profile project is a static website built with React.js to showcase personal information, qualifications, and skills. It features a clean design and responsive layout, making it easy to navigate and view on different devices.",
    link: "https://chantha2121.github.io/Personal-account/",
    github: "https://github.com/Chantha2121/Personal-account",
  },
];

const Work = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto text-center px-1">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100 transition-colors duration-300">
          My Projects
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="swiper-container"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
