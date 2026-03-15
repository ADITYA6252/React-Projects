import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const WorkoutHistory = () => {

  const [history, setHistory] = useState([])

  useEffect(() => {

    const savedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || []

    setHistory(savedHistory)

  }, [])

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="max-w-2xl mx-auto"
      >

        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          Workout History
        </h1>

        {history.length === 0 && (
          <p className="text-gray-400 text-sm md:text-base">
            No workouts completed yet.
          </p>
        )}

        <div className="space-y-4">

          {history.map((workout,index)=>(

            <motion.div
              key={index}
              whileHover={{scale:1.02}}
              className="bg-[#141414] border border-gray-800 p-4 md:p-5 rounded-xl"
            >

              <p className="font-semibold">
                {workout.date}
              </p>

              <ul className="mt-2 text-gray-400 text-sm md:text-base">

                {workout.exercises.map((ex,i)=>(
                  <li key={i}>• {ex}</li>
                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>
  )
}

export default WorkoutHistory