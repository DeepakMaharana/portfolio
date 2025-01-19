import React from "react";

const ProfileSection = () => {
  const stats = [{ value: "+2", label: "YEARS OF EXPERIENCE" }];
  return (
    <div className="h-max mb-16">
      <h1 className=" sm:text-left text-3xl md:text-5xl font-bold mb-4">
        Building Seamless <span className="text-orange-500">Web</span> and{" "}
        <span className="text-orange-500">Mobile</span> Experiences{" "}
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Crafting intuitive, scalable, and user-friendly solutions with a focus
        on clean code, performance, and delivering outstanding user experiences
        across both frontend and backend development.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-2">
              {stat.value}
            </h2>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <a href="./resume/Deepak Maharana - Resume.pdf" target="_blank">
          <button className="bg-orange-500 font-bold hover:bg-orange-600 px-6 py-3 rounded-lg transition-colors">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
