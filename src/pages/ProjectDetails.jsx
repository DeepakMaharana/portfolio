import React from "react";
import { ArrowLeft, Edit, Sparkles } from "lucide-react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import projectList from "../utils/projectData";
const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const projectData = projectList[projectId];
  const {changeNavigation} = useOutletContext();
  return (
    <>
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-8">
        <button
          className="flex items-center bg-zinc-900 p-2 rounded-xl text-gray-400 hover:text-white transition-colors"
          onClick={() => navigate("/projects")}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          All Projects
        </button>

        <button
          className="text-center bg-orange-500 p-2 font-bold rounded-xl text-gray-400 hover:text-white transition-colors"
          onClick={() => window.open(projectData.liveLink, "_blank", "noopener,noreferrer")}
        >
          View live
        </button>
      </div>

      {/* Project Showcase Section */}
      <div className="mb-16">
        <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {projectData.projectName}
            </h1>

            <p className="text-gray-300 max-w-3xl mb-4 leading-relaxed">
              {projectData.longDescription}
            </p>

            <ul className="">
              {projectData?.keyFeatures.map((item, index) => (
                <li key={index} className="pb-2">
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-2 sm:gap-5 sm:grid-cols-4 lg:grid-cols-4 mb-4">
              {projectData?.technologyUsed.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className={`bg-white p-4 rounded-lg shadow-lg text-center flex justify-center items-center w-full`}
                >
                  <span className="font-medium text-orange-500">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* More Projects Section */}
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          More <span className="text-orange-500">Images</span>
        </h2>
        <div className="flex flex-col">
          {projectData?.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl cursor-pointer bg-orange-500 bg-opacity-5 h-[400px] mb-4"
            >
                <img
                  src={image}
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
          ))}
        </div>
      </div>

      {/* More Projects Section */}
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          More <span className="text-orange-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div
            onClick={()=>changeNavigation("/projectDetails/"+index)}
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className={`aspect-[4/3] relative`}>
                <img
                  src={project.images[0]}
                  alt={project.projectName}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 p-6 bg-black bg-opacity-70 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">
                  {project.projectName}
                </h3>
                <p className="text-gray-400 ">{project.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
