import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import projectList from "../utils/projectData";

const Projects = () => {
  const navigate = useNavigate();
  const {changeNavigation} = useOutletContext();
  const getDetails = (index)=>{
    // contentRefs.current?.scrollIntoView({ behavior: "smooth" });
    changeNavigation("/projectdetails/"+index)
  }

  return (
    <div className="h-max mb-16">
      <h2 className="text-center sm:text-left text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
        Recent Projects and{" "}
        <span className="text-orange-500">Achievements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 hover:transform hover:scale-105 transition-transform cursor-pointer"
            onClick={()=>{getDetails(index)}}
          >
            <div
              className={`bg-orange-500 h-48 rounded-lg mb-4 overflow-hidden`}
            >
              <img src={project.images[0]} className="w-full h-full bg-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.projectName} - {project.year}</h3>
            <p className="text-gray-400 ">{project.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
