import React from "react";
import projectImg from "../assets/illustration-article.svg";

const Latest = () => {
  const projects = [
    {
      id: 1,
      image: projectImg,
      title: "Frontend Mentor Blog Card",
      details: "https://catursetyono.github.io/Front-End-Mentor-task-card/",
    },
    {
      id: 2,
      image: null,
      title: "",
      details: "",
    },
    {
      id: 3,
      image: null,
      title: "",
      details: "",
    },
  ];

  return (
    <div className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white text-center p-6 md:p-24">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16">Latest Project</h2>
      <div className="space-y-6 w-full max-w-xl md:max-w-4xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center bg-black/50 p-4 md:p-6 rounded-xl shadow-lg"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-800 rounded-lg mb-4 md:mb-0 md:mr-6">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg hover:shadow-md hover:shadow-sky-500 hover:transition-all"
                />
              ) : (
                <div className="text-gray-500">No Image</div>
              )}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-semibold">{project.title}</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href={project.details}
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-purple-600 transition-all"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
