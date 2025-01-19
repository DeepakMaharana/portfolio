import React, { useRef } from "react";
import { Home, Folder, Briefcase, Settings, Edit } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const contentRefs = useRef(null);
  const navigate = useNavigate();
  const changeNavigation = (page)=>{
    console.log("page-",page);
    contentRefs.current?.scrollIntoView({ behavior: 'smooth' });
    navigate(page);
  }

  return (
    <>
      {/* Main Container */}
      <div className="h-full w-[96vw] lg:container lg:w-[80vw] mx-auto flex flex-col lg:flex-row lg:gap-8  text-white py-[50px] lg:overflow-hidden">
        {/* Left Side - Profile Section */}
        <div className="lg:sticky lg:top-0 lg:h-full  p-2 flex flex-col justify-start">
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
        <div className="lg:overflow-y-auto lg:h-full" ref={contentRefs}>
          <div className="p-3 lg:p-6 h-full">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-2">
        <nav className="w-max mx-auto px-4 bg-zinc-900 bg-opacity-90 border-t border-zinc-800 rounded-md">
          <ul className="flex justify-between py-2 gap-6">
            {[
              { icon: Home, page:"/", ref: contentRefs.home },
              { icon: Folder, page:"/about", ref: contentRefs.projects },
              { icon: Briefcase, page:"/projects", ref: contentRefs.work },
              { icon: Settings, page:"/skills", ref: contentRefs.settings },
              { icon: Edit, page:"/contact", ref: contentRefs.edit },
            ].map((item, index) => (
              <li key={index}>
                  <button
                    onClick={() => changeNavigation(item.page)}
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

export default Layout;
