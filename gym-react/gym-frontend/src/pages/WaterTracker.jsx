import { useState } from "react"

const WaterTracker = () => {

  const [water,setWater] = useState(0)

  const addWater = () => {

    const newWater = water + 250

    setWater(newWater)

    localStorage.setItem("water",newWater)
  }

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <div className="max-w-md mx-auto bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl text-center">

        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
          Water Tracker
        </h1>

        <p className="text-3xl md:text-4xl mb-6">
          {water} ml
        </p>

        <button
        onClick={addWater}
        className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition text-sm md:text-base"
        >
          Drink 250ml
        </button>

      </div>

    </div>

  )
}

export default WaterTracker