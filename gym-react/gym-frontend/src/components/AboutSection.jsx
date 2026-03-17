import { useState } from "react"

const stats = [
  { number: "05", label: "Years" },
  { number: "30K", label: "Members" },
  { number: "50", label: "Classes" },
  { number: "100", label: "Trainers" },
]

const AboutSection = () => {

  const [showVideo, setShowVideo] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [videoActive, setVideoActive] = useState(false)

  return (
    <section id="about" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      {/* Heading */}
      <p className="text-gray-600 tracking-widest font-semibold mb-4">
        ABOUT US
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 max-w-3xl">
        Fitness with Purpose Results with Support
      </h2>

      <p className="text-gray-400 mt-4 max-w-3xl text-sm md:text-base">
        Our gym provides a supportive environment where every member can
        achieve their personal fitness goals. With expert trainers,
        modern equipment and customized training programs, we help you
        build strength, endurance and confidence.
      </p>


      {/* Stats */}
      <div className="mt-12 bg-[#1a1a1a] rounded-lg grid grid-cols-2 md:grid-cols-4 text-center py-8 gap-6 md:gap-0">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`transition duration-300
            ${activeIndex === index ? "scale-105" : "hover:scale-105"}`}
            
            onTouchStart={() => setActiveIndex(index)}
            onTouchEnd={() => setActiveIndex(null)}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
              {item.number}
            </h3>

            <p className={`text-gray-400 text-sm mt-1 transition
              ${activeIndex === index ? "text-white" : "hover:text-white"}
            `}>
              {item.label}
            </p>
          </div>
        ))}

      </div>


      {/* Video Preview */}
      <div
        className="mt-12 relative cursor-pointer"
        onTouchStart={() => setVideoActive(true)}
        onTouchEnd={() => setVideoActive(false)}
      >

        <img
          src="/images/image9.jpg"
          className={`w-full h-[260px] md:h-[420px] object-cover rounded-xl transition duration-500
          ${videoActive ? "scale-105" : "group-hover:scale-105"}`}
        />

        <div className={`absolute inset-0 rounded-xl transition duration-300
          ${videoActive ? "bg-black/30" : "bg-black/40 group-hover:bg-black/30"}
        `}></div>

        {/* Play Button */}
        <div
          onClick={() => setShowVideo(true)}
          className="absolute inset-0 flex items-center justify-center"
        >

          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md
          flex items-center justify-center transition duration-300
          ${videoActive ? "scale-110" : "group-hover:scale-110"}`}>

            <div className="w-0 h-0 border-l-[14px] border-l-orange-500
            border-t-[9px] border-t-transparent
            border-b-[9px] border-b-transparent ml-1"></div>

          </div>

        </div>

      </div>


      {/* VIDEO MODAL */}
      {showVideo && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="relative w-full max-w-4xl">

            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl active:scale-90 transition"
            >
              ✕
            </button>

            {/* Video */}
            <video
              src="/videos/video.mp4"
              controls
              autoPlay
              className="w-full rounded-xl"
            />

          </div>

        </div>

      )}

    </section>
  )
}

export default AboutSection