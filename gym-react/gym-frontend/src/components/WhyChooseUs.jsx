const WhyChooseUs = () => {
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

            {/* Item */}
            <div className="flex gap-4 group cursor-pointer transition duration-300 hover:translate-x-2">

              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 group-hover:scale-125 transition"></div>

              <div>
                <h4 className="font-semibold group-hover:text-orange-500 transition">
                  The Gym That Gets You Results
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Our expert trainers and modern equipment help you
                  build strength, improve fitness and achieve
                  long-lasting results.
                </p>
              </div>

            </div>

            {/* Item */}
            <div className="flex gap-4 group cursor-pointer transition duration-300 hover:translate-x-2">

              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 group-hover:scale-125 transition"></div>

              <div>
                <h4 className="font-semibold group-hover:text-orange-500 transition">
                  Your Fitness Journey Starts Here
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Personalized workout plans designed to match
                  your goals, whether it's fat loss or muscle gain.
                </p>
              </div>

            </div>

            {/* Item */}
            <div className="flex gap-4 group cursor-pointer transition duration-300 hover:translate-x-2">

              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 group-hover:scale-125 transition"></div>

              <div>
                <h4 className="font-semibold group-hover:text-orange-500 transition">
                  Train Smarter. Get Stronger.
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Advanced training techniques combined with expert
                  coaching to help you reach your full potential.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center group mt-10 md:mt-0">

          {/* Orange background box */}
          <div className="absolute bottom-[-4vw] right-[-5px] w-[260px] h-[260px] md:w-[350px] md:h-[350px] 
          bg-orange-500 rounded-xl transition duration-500 
          group-hover:translate-x-3 group-hover:translate-y-3"></div>

          {/* Image */}
          <img
            src="/images/image8.avif"
            className="relative z-10 right-0 md:right-[-5vw] rounded-xl w-[260px] h-[260px] md:w-[350px] md:h-[350px] 
            object-cover transition duration-500 
            group-hover:scale-105 group-hover:rotate-1"
          />

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs