import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white bg-[#0f172a]">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <ProjectsCard
          title="Employee Management System"
          main="Developed a responsive Employee Management System using React.js and Tailwind CSS that allows adding, viewing, updating, and deleting employee records."
          demoLink="https://dulcet-sunburst-9fe244.netlify.app/"
          sourceLink="https://github.com/ADITYA6252/React-Projects/tree/main/Employee%20managemenet%20system%20project
"
        />

        <ProjectsCard
          title="Notes App"
          main="A modern, responsive Notes application built using React and Tailwind CSS. Users can effortlessly create, manage, and delete notes with a clean, intuitive interface. Fully optimized for mobile and desktop with smooth animations and professional gradient-based styling."
          demoLink="https://shimmering-pavlova-e28c17.netlify.app/"
          sourceLink="https://github.com/ADITYA6252/React-Projects/tree/main/Notes%20App"   />

        <ProjectsCard
          title="Food Ordering Web App (React.js)"
          main="A responsive food ordering web application built using React.js and CSS, featuring dynamic meal listing, cart management, and smooth UI interactions."
          demoLink="https://silver-buttercream-9786ae.netlify.app/"
          sourceLink="https://github.com/ADITYA6252/React-Projects/tree/main/FoodOrderApp"
        />
      </div>
    </div>
  );
};

export default Projects;
