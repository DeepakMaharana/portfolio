import React from "react";
import Technology from "./Technology";

const About = () => {

  return (
    <div className="h-max mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
      <p className="my-2 text-lg text-gray-400">
        Hi, I’m Deepak Maharana, a Full-Stack Developer with a passion for
        building seamless and high-performance web and mobile applications. I
        specialize in crafting intuitive, user-centered designs and writing
        clean, efficient code that ensures the best possible experience across
        all devices. Whether it's developing complex frontend interfaces or
        creating scalable backend solutions, I’m dedicated to delivering robust
        and reliable products.
      </p>

      <p className="my-2 text-lg text-gray-400">
        On the frontend, I thrive on creating responsive and visually engaging
        interfaces that truly bring ideas to life. Using technologies like
        React, Tailwind CSS, and React Native, I turn design concepts into
        functional, easy-to-navigate applications. On the backend, I focus on
        developing secure, scalable, and efficient solutions with Node.js, PHP,
        and PostgreSQL, ensuring every application is built for performance and
        growth.
      </p>

      <p className="my-2 text-lg text-gray-400">
        I’m constantly exploring new ways to improve user experiences and push
        the boundaries of what’s possible with code. If you’re looking for
        someone who’s not only technically skilled but also passionate about
        bringing creativity and innovation to the table, let’s connect! I’m
        always eager to take on new challenges and contribute to projects that
        make an impact.
      </p>

      {/* <Technology/> */}
    </div>
  );
};

export default About;
