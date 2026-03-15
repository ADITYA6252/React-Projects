import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Profile = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user")) || {}

  const [name,setName] = useState(user?.name || "")
  const [height,setHeight] = useState(user?.height || "")
  const [weight,setWeight] = useState(user?.weight || "")
  const [goal,setGoal] = useState(user?.goal || "")

  const saveProfile = () => {

    const updatedUser = {
      ...user,
      name,
      height,
      weight,
      goal
    }

    localStorage.setItem("user", JSON.stringify(updatedUser))

    alert("Profile updated ✅")

    navigate("/dashboard")
  }

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="max-w-xl mx-auto bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl"
      >

        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
          Profile Settings
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          />

          <input
            type="number"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
            placeholder="Height (cm)"
            className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          />

          <input
            type="number"
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
            placeholder="Weight (kg)"
            className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          />

          <input
            type="text"
            value={goal}
            onChange={(e)=>setGoal(e.target.value)}
            placeholder="Fitness Goal (Fat loss / Muscle gain)"
            className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          />

          <button
            onClick={saveProfile}
            className="w-full py-2 md:py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          >
            Save Profile
          </button>

        </div>

      </motion.div>

    </div>
  )
}

export default Profile