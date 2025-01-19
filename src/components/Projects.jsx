import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Stabraq",
      description: "Portfolio Framer Template",
      bgColor: "bg-orange-500",
    },
    {
      title: "NajmAI",
      description: "Modern Framer Template",
      bgColor: "bg-purple-600",
    },
    {
      title: "TaskAI",
      description: "SaaS Framer Template",
      bgColor: "bg-green-700",
    },
    {
      title: "Ruya",
      description: "SaaS Framer Template",
      bgColor: "bg-purple-600",
    },
  ];
  return (
    <div className="h-max mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Recent Projects and{" "}
        <span className="text-orange-500">Achievements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-transform cursor-pointer"
          >
            <div
              className={`${project.bgColor} h-48 rounded-lg mb-4 opacity-10`}
            ></div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
