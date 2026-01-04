import React from "react";
import avtar from "../../assets/avtar.webp";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div
      className="
        text-white w-full min-h-screen
        flex flex-col-reverse md:flex-row
        items-center justify-center md:justify-between
        gap-10
        px-6 py-12 md:px-20
        animate-[fadeIn_0.8s_ease-in-out]
      "
    >
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h1
          className="
            text-2xl sm:text-3xl md:text-6xl
            font-bold tracking-tight
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <TextChanger />
        </h1>

        <p
          className="
            mt-4
            text-sm sm:text-base md:text-2xl
            text-gray-300
            leading-relaxed
            max-w-xl
            mx-auto md:mx-0
          "
        >
          I am a creative Frontend Developer who enjoys designing and developing
          modern websites. I focus on clean UI, responsiveness, and performance
          to deliver the best user experience.
        </p>
        
        <a
          href="public/resume2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-6 md:mt-10
            bg-[#465697]
            text-white font-semibold
            rounded-full
            px-8 py-3
            transition-all duration-300
            hover:scale-105 hover:opacity-90
            hover:shadow-lg hover:ring-2 hover:ring-[#465697]/60
          "
        >
          Download Resume
        </a>
      </div>

      <div className="w-full md:w-2/5 flex justify-center">
        <img
          className="
            w-48 sm:w-64 md:w-96
            object-contain
            transition-all duration-500
            hover:scale-105 hover:-translate-y-1
          "
          src={avtar}
          alt="Aditya Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
