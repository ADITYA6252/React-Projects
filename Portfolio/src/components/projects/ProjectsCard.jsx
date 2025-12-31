import React from 'react';
import Photo from '../../assets/software.avif';

const ProjectsCard = ({ title, main, demoLink, sourceLink }) => {
  return (
    <div className="flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 
      rounded-2xl overflow-hidden hover:shadow-[#465697] 
      hover:scale-105 transition-transform duration-300">

      <div className="h-40 bg-[#1a203e] flex items-center justify-center">
        <span className="text-gray-600 italic">
          <img src={Photo} alt="" />
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm md:text-md text-gray-300 flex-grow">
          {main}
        </p>

        <div className="mt-6 flex gap-4">

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-[#465697] text-white py-2 
            rounded-3xl font-semibold text-sm md:text-lg 
            hover:opacity-90 transition duration-300"
          >
            Demo
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-[#465697] text-white py-2 
            rounded-3xl font-semibold text-sm md:text-lg 
            hover:opacity-90 transition duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
