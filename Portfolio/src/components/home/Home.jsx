import React from "react";
import avtar from "../../assets/avtar.webp";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div
      className="text-white flex w-full min-h-screen justify-between items-center
      p-10 md:p-20
      animate-[fadeIn_0.8s_ease-in-out]"
    >
      {/* LEFT CONTENT */}
      <div className="md:w-2/4 md:pt-10">
        <h1
          className="text-3xl md:text-6xl font-bold tracking-tighter
          transition-all duration-300 hover:scale-[1.02]"
        >
          <TextChanger />
        </h1>

        <p
          className="mt-4 text-sm md:text-2xl text-gray-300
          leading-relaxed max-w-xl"
        >
          I am a creative Frontend Developer who enjoys designing and developing
          modern websites. I focus on clean UI, responsiveness, and performance
          to deliver the best user experience.
        </p>

        {/* RESUME BUTTON */}
        <a
          href="/Aditya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 md:mt-10
          bg-[#465697] text-white font-semibold
          rounded-3xl px-7 py-3
          transition-all duration-300
          hover:scale-105 hover:opacity-90
          hover:shadow-lg hover:ring-2 hover:ring-[#465697]/60"
        >
          Download Resume
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:w-2/5 mt-10 md:mt-0">
        <img
          className="w-64 md:w-96 object-contain
          transition-all duration-500
          hover:scale-105 hover:-translate-y-1"
          src={avtar}
          alt="Aditya Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
