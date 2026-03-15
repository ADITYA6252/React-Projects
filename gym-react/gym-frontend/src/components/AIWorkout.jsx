import { useState } from "react"
import { motion } from "framer-motion"

const workouts = [
  "Push Ups",
  "Bench Press",
  "Squats",
  "Deadlift",
  "Pull Ups",
  "Shoulder Press",
  "Plank",
  "Lunges"
]

const AIWorkout = () => {

  const [plan, setPlan] = useState([])

  const generateWorkout = () => {

    const random = workouts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)

    setPlan(random)
  }

  return (

    <motion.div
      whileHover={{ scale:1.02 }}
      className="bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl"
    >

      <h2 className="text-lg md:text-xl font-semibold mb-6">
        AI Workout Generator
      </h2>

      <button
        onClick={generateWorkout}
        className="bg-orange-500 px-5 md:px-6 py-2 md:py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Generate Workout
      </button>

      <ul className="mt-6 space-y-2 text-gray-400 text-sm md:text-base">
        {plan.map((w,i)=>(
          <li key={i}>{w}</li>
        ))}
      </ul>

    </motion.div>

  )
}

export default AIWorkout