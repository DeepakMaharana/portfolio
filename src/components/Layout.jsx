import React, { useRef } from "react";
import {
  Home,
  BadgeInfo,
  Briefcase,
  Wrench,
  Contact,
  Twitter,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const contentRefs = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const changeNavigation = (page) => {
    // console.log("page-",page);
    contentRefs.current?.scrollIntoView({ behavior: "smooth" });
    contentRefs.current.scrollTo ({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
    navigate(page);
  };

  return (
    <>
      {/* Main Container */}
      <div className="h-full w-[96vw] lg:container lg:w-[80vw] mx-auto flex flex-col lg:flex-row lg:gap-8  text-white py-[50px] lg:overflow-hidden">
        {/* Left Side - Profile Section */}
        <div className="lg:sticky lg:top-0 lg:h-full  p-2 flex flex-col justify-start">
          <div className="w-[96%] sm:w-[90%] lg:w-[345px] lg:h-[520px] mx-auto bg-white rounded-xl p-5 pt-7">
            <div className=" bg-orange-500 w-60 max-w-[96%] lg:w-[240px]  h-64 mx-auto rounded-xl overflow-hidden">
              <img
                src={`/profile5.png`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center p-2 gap-2">
              <a
                href="https://www.linkedin.com/in/deepak-maharana/"
                target="_blank"
                className="text-orange-500 p-2 rounded-lg hover:bg-orange-600 hover:text-white"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://github.com/DeepakMaharana"
                target="_blank"
                className="text-orange-500 p-2 rounded-lg hover:bg-orange-600 hover:text-white"
              >
                <Github size={24} />
              </a>

              <a
                href="mailto:deepaknamaharana@gmail.com"
                target="_blank"
                className="text-orange-500 p-2 rounded-lg hover:bg-orange-600 hover:text-white"
              >
                <Mail size={24} />
              </a>

              {/* <a
                href=""
                target="_blank"
                className="text-orange-500 p-2 rounded-lg hover:bg-orange-600 hover:text-white"
              >
                <Twitter size={24} />
              </a> */}
            </div>
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
              A Software Engineer who has developed innovative solutions over
              the years
            </p>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:overflow-y-auto lg:h-full w-full" ref={contentRefs}>
          <div className="p-3 lg:p-6 h-full">
            <Outlet context={{ changeNavigation }}/>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-2">
        <nav className="w-max mx-auto px-4 bg-zinc-900 bg-opacity-90 border-t border-zinc-800 rounded-md">
          <ul className="flex justify-center py-2 gap-6">
            {[
              { icon: Home, page: "/", tooltip: "Home" },
              { icon: BadgeInfo, page: "/about", tooltip: "About" },
              { icon: Wrench, page: "/skills", tooltip: "Skill" },
              { icon: Briefcase, page: "/projects", tooltip: "Projects" },
              { icon: Contact, page: "/contact", tooltip: "Contact Us" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => changeNavigation(item.page)}
                  className="p-2 text-gray-400 hover:text-orange-500 transition-colors"
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

export default Layout;
