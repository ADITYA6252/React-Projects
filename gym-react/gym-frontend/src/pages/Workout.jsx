import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const exercises = [
  "Bench Press",
  "Push Ups",
  "Squats",
  "Deadlift",
  "Pull Ups",
  "Shoulder Press",
  "Plank",
  "Lunges"
]

const Workout = () => {

  const [completed, setCompleted] = useState([])

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem("workout")) || []

    setCompleted(saved)

  }, [])


  const toggleExercise = (exercise) => {

    let updated

    if(completed.includes(exercise)){

      updated = completed.filter(e => e !== exercise)

    } else {

      updated = [...completed, exercise]

    }

    setCompleted(updated)

    localStorage.setItem("workout", JSON.stringify(updated))
  }


  const progress = Math.round((completed.length / exercises.length) * 100)

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <motion.div
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      className="max-w-2xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          Today's Workout
        </h1>

        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Complete your exercises and track your progress.
        </p>


        {/* PROGRESS BAR */}

        <div className="mb-10">

          <p className="text-sm text-gray-400 mb-2">
            Progress {progress}%
          </p>

          <div className="w-full bg-gray-800 h-3 rounded-full">

            <div
            style={{width:`${progress}%`}}
            className="bg-orange-500 h-3 rounded-full transition-all">
            </div>

          </div>

        </div>


        {/* EXERCISE LIST */}

        <div className="space-y-4">

          {exercises.map((exercise,index)=>(

            <motion.div
            key={index}
            whileHover={{scale:1.02}}
            className="flex justify-between items-center bg-[#141414] border border-gray-800 p-4 md:p-5 rounded-xl">

              <p className="font-medium text-sm md:text-base">
                {exercise}
              </p>

              <input
              type="checkbox"
              checked={completed.includes(exercise)}
              onChange={()=>toggleExercise(exercise)}
              className="w-5 h-5 accent-orange-500 cursor-pointer"/>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>
  )
}

export default Workout