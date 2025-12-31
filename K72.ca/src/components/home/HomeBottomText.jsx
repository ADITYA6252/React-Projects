import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 pb-2 ">

      <Link
        to="/projects"
        className="text-[6vw] leading-[5.5vw] uppercase border-[3px] border-white rounded-full px-10 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]"
      >
        PROJECTS
      </Link>

      <Link
        to="/agence"
        className="text-[6vw] leading-[5.5vw] uppercase border-[3px] border-white rounded-full px-10 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]"
      >
        AGENCE
      </Link>

    </div>
  );
};

export default HomeBottomText;
