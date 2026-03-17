import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="hero min-h-screen flex items-center justify-center md:justify-start px-6 md:px-20 text-white text-center md:text-left relative">

      <div className="max-w-xl relative">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Your Fitness Journey <br />
          Starts <span className="text-orange-500">Here</span>
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base">
          Build strength, lose fat and transform your body with our professional
          training programs.
        </p>

        {/* BUTTON */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-8">

          <button
            onClick={() => setOpenAuth(true)}
            onTouchStart={() => setBtnActive(true)}
            onTouchEnd={() => setBtnActive(false)}
            className={`px-6 py-3 bg-orange-500 rounded-full transition duration-300
            ${btnActive ? "scale-95 bg-orange-600" : "hover:bg-orange-600 hover:scale-105"}`}
          >
            Get Started
          </button>

        </div>

        {/* MEMBERS */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-10">

          <div className="flex -space-x-3">

            {[1,2,3,4].map((i)=>(
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white transition duration-300 hover:scale-110 active:scale-95"
                src={`https://i.pravatar.cc/40?img=${i}`}
              />
            ))}

          </div>

          <div>
            <p className="text-sm text-gray-300">350K+ Reviews</p>
            <p className="text-yellow-400">★★★★★</p>
          </div>

        </div>

      </div>


      {/* POPUP */}
      {openAuth && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-[#141414] border border-gray-700 rounded-xl p-8 w-full max-w-[320px] text-center shadow-xl
          animate-[fadeIn_.3s_ease]">

            <h2 className="text-xl font-semibold mb-3">Join GYM 💪</h2>

            <p className="text-gray-400 text-sm mb-6">
              Please login or signup first to continue.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-2 mb-3 bg-orange-500 rounded-lg transition duration-300
              hover:bg-orange-600 active:scale-95"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="w-full py-2 border border-orange-500 rounded-lg transition duration-300
              hover:bg-orange-500 hover:text-white active:scale-95"
            >
              Sign Up
            </button>

            <button
              onClick={() => setOpenAuth(false)}
              className="mt-4 text-gray-400 text-sm transition hover:text-white active:scale-95"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      {/* SCROLL TEXT */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white text-sm md:text-base">
        ↓ Scroll
      </div>

    </section>
  );
};

export default Hero;