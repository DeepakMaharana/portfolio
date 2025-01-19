import React, { useRef } from "react";
import { Home, Folder, Briefcase, Settings, Edit } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const ProfilePage = () => {
  const contentRefs = {
    home: useRef(null),
    projects: useRef(null),
    work: useRef(null),
    settings: useRef(null),
    edit: useRef(null),
  };

  const technologies = [
    // Row 1
    [
      { name: "C Language", icon: "C" },
      { name: "TypeScript", icon: "TS" },
      { name: "Express", icon: "express" },
      { name: "NodeJS", icon: "node" },
      { name: "Postman", icon: "🔧" },
    ],
    // Row 2
    [
      { name: "Dart", icon: "📱" },
      { name: "Flutter", icon: "🔷" },
      { name: "React Native", icon: "⚛️" },
      { name: "HTML", icon: "HTML" },
      { name: "CSS", icon: "CSS" },
    ],
    // Row 3
    [
      { name: "Bootstrap", icon: "B" },
      { name: "Redux", icon: "🔄" },
      { name: "Sass", icon: "Sass" },
      { name: "Javascript", icon: "JS" },
      { name: "Tailwind CSS", icon: "TW" },
    ],
    // Row 4
    [
      { name: "React", icon: "⚛️" },
      { name: "MySQL", icon: "SQL" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Heroku", icon: "H" },
      { name: "Git", icon: "Git" },
    ],
  ];

  const stats = [
    { value: "+2", label: "YEARS OF EXPERIENCE" },
  ];

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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen w-[96vw] lg:w-[80vw] mx-auto my-[50px] lg:my-[100px] flex flex-col lg:flex-row lg:gap-8 text-white lg:container">
        {/* Left Side - Profile Section */}
        <div className="lg:sticky lg:top-0 lg:h-screen  p-2 flex flex-col justify-start">
          <div className="w-[96%] sm:w-[90%] lg:w-[345px] lg:h-[500px] mx-auto bg-white rounded-xl p-5 pt-7">
            <div className=" bg-orange-500 w-60 max-w-[96%] lg:w-[240px]  h-64 mx-auto rounded-xl overflow-hidden">
              <img
                src={`profile5.png`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="icons"></div>

            <h2 className="text-3xl text-center font-bold my-3 text-slate-800">
              Deepak Maharana
            </h2>

            <h2 className="text-2xl text-center font-bold my-3 text-orange-500">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Full-Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                speed={1}
                deletionSpeed={1}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-600 mb-4 text-center">
              A Software Engineer who has developed countless innovative
              solutions over the years
            </p>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:overflow-y-auto lg:h-screen">
          <div className="p-2 lg:p-6 h-full">
            <div ref={contentRefs.home} className="h-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Building Seamless <span className="text-orange-500">Web</span>{" "}
                and <span className="text-orange-500">Mobile</span> Experiences{" "}
              </h1>
              <p className="text-gray-400 mb-12 text-lg">
                Crafting intuitive, scalable, and user-friendly solutions with a
                focus on clean code, performance, and delivering outstanding
                user experiences across both frontend and backend development.
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

            {/* Additional sections that would be scrolled to */}
            <div ref={contentRefs.projects} className="h-full">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">About Me</h2>
              <p className="my-2 text-lg">
                Hi, I’m Deepak Maharana, a Full-Stack Developer with a passion
                for building seamless and high-performance web and mobile
                applications. I specialize in crafting intuitive, user-centered
                designs and writing clean, efficient code that ensures the best
                possible experience across all devices. Whether it's developing
                complex frontend interfaces or creating scalable backend
                solutions, I’m dedicated to delivering robust and reliable
                products.
              </p>

              <p className="my-2 text-lg">
                On the frontend, I thrive on creating responsive and visually
                engaging interfaces that truly bring ideas to life. Using
                technologies like React, Tailwind CSS, and React Native, I turn
                design concepts into functional, easy-to-navigate applications.
                On the backend, I focus on developing secure, scalable, and
                efficient solutions with Node.js, PHP, and PostgreSQL, ensuring
                every application is built for performance and growth.
              </p>

              <p className="my-2 text-lg">
                I’m constantly exploring new ways to improve user experiences
                and push the boundaries of what’s possible with code. If you’re
                looking for someone who’s not only technically skilled but also
                passionate about bringing creativity and innovation to the
                table, let’s connect! I’m always eager to take on new challenges
                and contribute to projects that make an impact.
              </p>
            </div>

            <div ref={contentRefs.work} className="h-full">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">
                Recent Projects and{" "} <span className="text-orange-500">Achievements</span>
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
            <div
              ref={contentRefs.settings}
              className="h-screen flex items-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Let’s Create Something{" "} <span className="text-orange-500">Amazing</span>
              </h2>
            </div>
            <div ref={contentRefs.edit} className="h-screen flex items-center">
              <h2 className="text-3xl">Edit Section</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-2">
        <nav className="w-max mx-auto px-4 bg-zinc-900 bg-opacity-90 border-t border-zinc-800 rounded-md">
          <ul className="flex justify-between py-2 gap-6">
            {[
              { icon: Home, ref: contentRefs.home },
              { icon: Folder, ref: contentRefs.projects },
              { icon: Briefcase, ref: contentRefs.work },
              { icon: Settings, ref: contentRefs.settings },
              { icon: Edit, ref: contentRefs.edit },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <item.icon size={24} />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProfilePage;
