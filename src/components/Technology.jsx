const Technology = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "⚛️" },
    { name: "NodeJS", icon: "node" },
    { name: "Express", icon: "express" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "SQL" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redux", icon: "🔄" },
    { name: "TypeScript", icon: "TS" },
    { name: "Javascript", icon: "JS" },
    { name: "Bootstrap", icon: "B" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "Git", icon: "Git" },
  ];

  return (
    <div className="h-max mb-16">
      {/* Technologies Flex Container */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Technologies and <span className="text-orange-500">Tools</span>
      </h2>

      <p className="text-lg text-gray-400 mx-auto mb-2">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-5 sm:grid-cols-4 lg:grid-cols-4">
        {technologies.map((tech, techIndex) => (
          <div
            key={techIndex}
            className={`bg-white p-4 rounded-lg shadow-lg flex justify-center items-center w-full`}
          >
            <span className="font-medium text-orange-500">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
