import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avtar from "../../assets/avtar3_files/avtar3.webp";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex justify-center items-center px-6 md:px-20 py-20
      bg-gradient-to-b from-[#0f172a] to-[#020617]"
    >
      <div
        className="md:flex items-center gap-14 max-w-6xl 
        bg-white/5 backdrop-blur-lg border border-white/10 
        shadow-2xl rounded-2xl p-8 md:p-14
        transition-all duration-500 hover:scale-[1.01]"
      >
        <div className="flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            className="h-64 md:h-80 rounded-2xl object-cover shadow-lg
            transition-transform duration-500 hover:scale-105"
            src={avtar}
            alt="Profile avatar"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8
          transition-colors duration-300 hover:text-[#60a5fa]">
            About Me
          </h2>

          <ul className="space-y-8">
            <li className="flex gap-4 items-start
              transition-all duration-300 hover:translate-x-2">
              <IoArrowForward
                size={26}
                className="mt-1 text-[#60a5fa]
                transition-transform duration-300 group-hover:translate-x-1"
              />
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                  Passionate Frontend Developer
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  I am a dedicated fresher frontend developer skilled in building 
                  responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS. 
                  I enjoy turning design ideas into functional web experiences.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start
              transition-all duration-300 hover:translate-x-2">
              <IoArrowForward
                size={26}
                className="mt-1 text-[#60a5fa]
                transition-transform duration-300"
              />
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                  Continuous Learner & Team Player
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Currently enhancing my skills through an internship and self-learning, 
                  I am passionate about writing clean, maintainable code and collaborating 
                  effectively in team environments to build great web applications.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
