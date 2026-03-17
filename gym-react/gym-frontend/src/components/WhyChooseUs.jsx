import { useState } from "react"

const WhyChooseUs = () => {

  const [activeIndex, setActiveIndex] = useState(null)
  const [imageActive, setImageActive] = useState(false)

  const data = [
    {
      title: "The Gym That Gets You Results",
      desc: "Our expert trainers and modern equipment help you build strength, improve fitness and achieve long-lasting results."
    },
    {
      title: "Your Fitness Journey Starts Here",
      desc: "Personalized workout plans designed to match your goals, whether it's fat loss or muscle gain."
    },
    {
      title: "Train Smarter. Get Stronger.",
      desc: "Advanced training techniques combined with expert coaching to help you reach your full potential."
    }
  ]

  return (
    <section className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      <p className="text-gray-600 font-semibold tracking-widest mb-4">
        WHY CHOOSE US
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 max-w-lg leading-snug">
            From Day One to Your Personal Best
            Here’s Why Our Gym Delivers Results That Last
          </h2>

          <div className="mt-10 space-y-8">

            {data.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 cursor-pointer transition duration-300
                ${activeIndex === index ? "translate-x-2" : "hover:translate-x-2"}`}
                
                onTouchStart={() => setActiveIndex(index)}
                onTouchEnd={() => setActiveIndex(null)}
              >

                <div className={`w-3 h-3 bg-orange-500 rounded-full mt-2 transition
                  ${activeIndex === index ? "scale-125" : "group-hover:scale-125"}
                `}></div>

                <div>
                  <h4 className={`font-semibold transition
                    ${activeIndex === index ? "text-orange-500" : "group-hover:text-orange-500"}
                  `}>
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="relative flex justify-center mt-10 md:mt-0"
          onTouchStart={() => setImageActive(true)}
          onTouchEnd={() => setImageActive(false)}
        >

          {/* Orange background box */}
          <div className={`absolute bottom-[-4vw] right-[-5px] w-[260px] h-[260px] md:w-[350px] md:h-[350px] 
          bg-orange-500 rounded-xl transition duration-500
          ${imageActive 
            ? "translate-x-3 translate-y-3" 
            : "group-hover:translate-x-3 group-hover:translate-y-3"
          }`}></div>

          {/* Image */}
          <img
            src="/images/image8.avif"
            className={`relative z-10 right-0 md:right-[-5vw] rounded-xl w-[260px] h-[260px] md:w-[350px] md:h-[350px] 
            object-cover transition duration-500
            ${imageActive 
              ? "scale-105 rotate-1" 
              : "group-hover:scale-105 group-hover:rotate-1"
            }`}
          />

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs