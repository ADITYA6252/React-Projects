import { useState, useEffect } from "react"
import axios from "axios"

const Calories = () => {

  const [food,setFood] = useState("")
  const [calories,setCalories] = useState("")
  const [list,setList] = useState([])

  const token = localStorage.getItem("token")

  // ADD CALORIES
  const addCalories = async () => {

    try{

      await axios.post(
        "http://localhost:5000/api/calories",
        {
          food,
          calories
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )

      setFood("")
      setCalories("")

      getCalories()

    }catch(error){

      console.log(error)

    }

  }


  // GET CALORIES HISTORY
  const getCalories = async () => {

    try{

      const res = await axios.get(
        "http://localhost:5000/api/calories",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )

      setList(res.data)

    }catch(error){

      console.log(error)

    }

  }


  useEffect(()=>{
    getCalories()
  },[])


  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-24 md:py-32">

      <h1 className="text-2xl md:text-3xl text-orange-500 mb-10">
        Calories Tracker
      </h1>

      <div className="space-y-4 max-w-md">

        <input
        type="text"
        placeholder="Food"
        value={food}
        onChange={(e)=>setFood(e.target.value)}
        className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded"
        />

        <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e)=>setCalories(e.target.value)}
        className="w-full px-4 py-2 md:py-3 bg-black border border-gray-700 rounded"
        />

        <button
        onClick={addCalories}
        className="bg-orange-500 px-6 py-2 md:py-3 rounded hover:bg-orange-600 transition"
        >
          Add Calories
        </button>

      </div>


      <ul className="mt-10 space-y-2 text-sm md:text-base">

      {list.map((item,i)=>(
        <li key={i}>
          {item.food} - {item.calories} kcal
        </li>
      ))}

      </ul>

    </div>

  )

}

export default Calories