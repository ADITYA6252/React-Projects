import { useState } from "react"
import { motion } from "framer-motion"

const Diet = () => {

  const [plan,setPlan] = useState({
    breakfast:"",
    lunch:"",
    dinner:""
  })

  const saveDiet = () => {

    localStorage.setItem("dietPlan",JSON.stringify(plan))

    alert("Diet plan saved ✅")
  }

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <motion.div
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      className="max-w-xl mx-auto bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl"
      >

        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
          Diet Planner
        </h1>

        <div className="space-y-4">

          <input
          placeholder="Breakfast"
          className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          onChange={(e)=>setPlan({...plan,breakfast:e.target.value})}
          />

          <input
          placeholder="Lunch"
          className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          onChange={(e)=>setPlan({...plan,lunch:e.target.value})}
          />

          <input
          placeholder="Dinner"
          className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg"
          onChange={(e)=>setPlan({...plan,dinner:e.target.value})}
          />

          <button
          onClick={saveDiet}
          className="w-full bg-orange-500 py-2 md:py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Save Diet Plan
          </button>

        </div>

      </motion.div>

    </div>

  )
}

export default Diet