import { motion } from "framer-motion"
import { useState } from "react"
import axios from "axios"

import { FaDumbbell, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa"
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6"

const icons = [FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp]

const UltraModernFooter = () => {

  const [email,setEmail] = useState("")
  const [loading,setLoading] = useState(false)
  const [activeIcon, setActiveIcon] = useState(null)

  const handleSubscribe = async () => {

    if(!email){
      alert("Enter email first")
      return
    }

    try{
      setLoading(true)

      const res = await axios.post(
        "https://gym-backend-x8if.onrender.com//api/subscribe",
        { email }
      )

      alert(res.data.message)
      setEmail("")

    }catch(error){
      alert("Subscription failed")
    }finally{
      setLoading(false)
    }

  }

  return (

    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24"
    >

      <div
      id="contact"
      className="relative overflow-hidden rounded-3xl 
      bg-white/5 backdrop-blur-xl border border-white/10
      px-6 md:px-10 lg:px-16 py-10 md:py-14 shadow-2xl">

        <div className="absolute inset-0 opacity-30 bg-gradient-to-r 
        from-orange-500 via-orange-400 to-orange-600 blur-[120px]"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12">

          {/* LEFT */}
          <div className="space-y-6 text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 text-xl font-bold">
              <FaDumbbell />
              GYM
            </div>

            <div className="flex justify-center md:justify-start gap-4">

              {icons.map((Icon, i) => {

                const isActive = activeIcon === i

                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}

                    onTouchStart={() => setActiveIcon(i)}
                    onTouchEnd={() => {
                      // thoda delay for smooth feel
                      setTimeout(() => setActiveIcon(null), 120)
                    }}

                    className={`w-11 h-11 flex items-center justify-center 
                    rounded-full bg-white text-orange-500 cursor-pointer
                    shadow-lg transition duration-300
                    ${isActive 
                      ? "scale-125 shadow-orange-500/40 bg-orange-50" 
                      : "hover:shadow-orange-500/40"
                    }`}
                  >
                    <Icon />
                  </motion.div>
                )
              })}

            </div>

          </div>


          {/* CENTER */}
          <div className="text-center space-y-6">

            <h3 className="text-orange-500 font-semibold text-lg">
              Subscribe with us
            </h3>

            <div className="flex flex-col sm:flex-row justify-center">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full sm:w-[260px] md:w-[300px] 
                px-5 py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none
                bg-white text-black outline-none focus:ring-2 focus:ring-orange-500
                transition duration-300"
              />

              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="mt-3 sm:mt-0 sm:px-7 py-3
                bg-orange-500 sm:rounded-r-xl sm:rounded-l-none
                rounded-xl flex items-center justify-center
                hover:bg-orange-600 transition duration-300 active:scale-95"
              >
                {loading ? "..." : "→"}
              </motion.button>

            </div>

          </div>


          {/* RIGHT */}
          <div className="space-y-6 text-center md:text-left">

            <h3 className="text-orange-500 font-semibold text-lg">
              Contact Us
            </h3>

            {[ 
              { icon: <FaEnvelope />, text: "Email: at7081709@gmail.com" },
              { icon: <FaPhone />, text: "Phone: +112 456 98765" },
              { icon: <FaLocationDot />, text: "Location: Dhaka, Bangladesh" }
            ].map((item, i) => (

              <div
                key={i}
                onTouchStart={(e)=> e.currentTarget.classList.add("translate-x-2")}
                onTouchEnd={(e)=> {
                  setTimeout(()=>{
                    e.currentTarget.classList.remove("translate-x-2")
                  },120)
                }}
                className="flex items-center justify-center md:justify-start gap-4 
                transition duration-300 hover:translate-x-2 active:scale-95"
              >

                <div className="w-10 h-10 flex items-center justify-center 
                rounded-full bg-white text-orange-500 shadow-md">
                  {item.icon}
                </div>

                <p className="text-sm text-gray-200">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </motion.section>

  )
}

export default UltraModernFooter