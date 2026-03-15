import { useState } from "react"

const AIDiet = () => {

  const [goal,setGoal] = useState("")
  const [diet,setDiet] = useState(null)

  const generateDiet = () => {

    if(goal === "muscle"){

      setDiet({
        breakfast:"Eggs + Oats",
        lunch:"Chicken + Rice",
        dinner:"Fish + Vegetables"
      })

    }

    if(goal === "fat"){

      setDiet({
        breakfast:"Oats + Fruits",
        lunch:"Salad + Chicken",
        dinner:"Vegetables + Soup"
      })

    }

  }

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
        AI Diet Generator
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">

        <select
        onChange={(e)=>setGoal(e.target.value)}
        className="bg-black border border-gray-700 px-4 py-2 md:py-3 rounded-lg"
        >
          <option value="">Select Goal</option>
          <option value="muscle">Muscle Gain</option>
          <option value="fat">Fat Loss</option>
        </select>

        <button
        onClick={generateDiet}
        className="bg-orange-500 px-6 py-2 md:py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Generate
        </button>

      </div>


      {diet && (

        <div className="mt-10 space-y-3 text-base md:text-lg">

          <p>Breakfast: {diet.breakfast}</p>
          <p>Lunch: {diet.lunch}</p>
          <p>Dinner: {diet.dinner}</p>

        </div>

      )}

    </div>

  )
}

export default AIDiet