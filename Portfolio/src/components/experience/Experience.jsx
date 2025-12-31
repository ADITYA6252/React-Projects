import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiGit } from 'react-icons/si';

const Experience = () => {
  const skills = [
    { icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: FaCss3, color: '#1572b6', name: 'CSS3' },
    { icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
    { icon: FaReact, color: '#61DAFB', name: 'React' },
    { icon: SiTailwindcss, color: '#38B2AC', name: 'Tailwind CSS' },
    { icon: SiGit, color: '#F05032', name: 'Git' },
    { icon: FaGithub, color: '#FFFFFF', name: 'GitHub' }, // White for GitHub icon to pop well on navy bg
  ];

  const experiences = [
    {
      title: 'Internship at Zion Technology, Chandigarh',
      details: [
        'Currently working as a Frontend Developer Intern',
        'Building responsive UI using HTML, CSS, JavaScript & React',
        'Styling projects using Tailwind CSS',
        'Version control using Git & GitHub',
        'Learning real-world frontend development workflow',
      ],
      icon: null, // No icon here as requested
      color: null,
    },
  ];

  return (
    <div
      id="Experience"
      className="p-10 md:p-24 min-h-screen"
      style={{ backgroundColor: '#1A203E' }} // dark navy background to match your screenshot
    >
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-12 text-center md:text-left">
        Skills & Experience
      </h1>

      {/* Skills Section */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-16">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2A2F55] p-5 rounded-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg"
            >
              <Icon size={50} style={{ color: skill.color }} />
              <span className="mt-2 text-white font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => {
          return (
            <div
              key={index}
              className="flex flex-col bg-[#2A2F55] p-6 rounded-xl items-start hover:bg-[#4B5FD6] hover:bg-opacity-70 transition-all shadow-md"
            >
              <div className="text-white">
                <h2 className="text-xl font-bold">{exp.title}</h2>
                <ul className="text-sm mt-2 list-disc list-inside space-y-1">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
