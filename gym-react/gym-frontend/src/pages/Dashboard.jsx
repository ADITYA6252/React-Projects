import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import {
  FaFire,
  FaChartLine,
  FaDumbbell,
  FaUserCircle,
  FaUtensils,
  FaTint,
  FaAppleAlt
} from "react-icons/fa"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import DashboardLayout from "../components/DashboardLayout"


const chartData = [
  { day: "Mon", workout: 30 },
  { day: "Tue", workout: 45 },
  { day: "Wed", workout: 50 },
  { day: "Thu", workout: 40 },
  { day: "Fri", workout: 60 }
]

const workouts = [
  "Bench Press",
  "Push Ups",
  "Squats",
  "Deadlift",
  "Pull Ups",
  "Shoulder Press",
  "Plank",
  "Lunges"
]

const Dashboard = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user")) || {}
  const token = localStorage.getItem("token")

  const API = "http://localhost:5000/api"

  const [height,setHeight] = useState(user?.height || "")
  const [weight,setWeight] = useState(user?.weight || "")
  const [bmi,setBmi] = useState(null)

  const [plan,setPlan] = useState([])

  const [caloriesToday,setCaloriesToday] = useState(0)
  const [waterToday,setWaterToday] = useState(0)

  useEffect(()=>{

    if(!token){
      navigate("/login")
      return
    }

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if(storedUser){
      setHeight(storedUser.height || "")
      setWeight(storedUser.weight || "")
    }

    getCaloriesToday()
    getWaterToday()

  },[])


  const logout = () => {

    localStorage.removeItem("user")
    localStorage.removeItem("token")

    navigate("/login")

  }


  const calculateBMI = () => {

    if(!height || !weight) return

    const h = height / 100
    const result = (weight/(h*h)).toFixed(1)

    let status=""

    if(result < 18.5) status="Underweight"
    else if(result < 25) status="Normal"
    else if(result < 30) status="Overweight"
    else status="Obese"

    setBmi({value:result,status})

  }


  const generateWorkout = () => {

    const random = [...workouts]
      .sort(()=>Math.random()-0.5)
      .slice(0,4)

    setPlan(random)

  }


  const getCaloriesToday = async () => {

    try{

      const res = await axios.get(
        `${API}/calories`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )

      const total = res.data.reduce(
        (sum,item)=> sum + item.calories,
        0
      )

      setCaloriesToday(total)

    }catch(error){
      console.log(error)
    }

  }


  const getWaterToday = async () => {

    try{

      const res = await axios.get(
        `${API}/water`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )

      const total = res.data.reduce(
        (sum,item)=> sum + item.amount,
        0
      )

      setWaterToday(total)

    }catch(error){
      console.log(error)
    }

  }


  const cards = [

    {
      title:"Calories Today",
      text:`${caloriesToday} kcal`,
      icon:<FaFire/>
    },

    {
      title:"Workout Streak",
      text:"7 Days",
      icon:<FaChartLine/>
    },

    {
      title:"Start Workout",
      text:"Begin today's training",
      icon:<FaDumbbell/>,
      route:"/workout"
    },

    {
      title:"Workout History",
      text:"View past workouts",
      icon:<FaChartLine/>,
      route:"/history"
    },

    {
      title:"Diet Planner",
      text:"Plan your meals",
      icon:<FaUtensils/>,
      route:"/diet"
    },

    {
      title:"Water Today",
      text:`${waterToday} ml`,
      icon:<FaTint/>,
      route:"/water"
    },

    {
      title:"Calories Tracker",
      text:"Track food calories",
      icon:<FaAppleAlt/>,
      route:"/calories"
    }

  ]


  return (

    <DashboardLayout>

      <div className="text-white">


        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-14">

          <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          >

            <h1 className="text-2xl md:text-4xl font-bold text-orange-500">
              Welcome Back {user?.name} 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Track your workouts and fitness progress.
            </p>

            <div className="mt-3 text-gray-400 space-y-1 text-sm md:text-base">
              {user?.height && <p>Height: {user.height} cm</p>}
              {user?.weight && <p>Weight: {user.weight} kg</p>}
              {user?.goal && <p>Goal: {user.goal}</p>}
            </div>

          </motion.div>


          <div className="flex flex-wrap gap-3">

            <button
            onClick={()=>navigate("/profile")}
            className="flex items-center gap-2 bg-[#141414] border border-gray-700 px-4 py-2 rounded-lg hover:border-orange-500 transition"
            >
              <FaUserCircle/>
              Profile
            </button>

            <button
            onClick={logout}
            className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        </div>



        {/* DASHBOARD CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">

          {cards.map((card,index)=>(

            <motion.div
            key={index}
            whileHover={{scale:1.05}}
            onClick={()=>card.route && navigate(card.route)}
            className="bg-[#141414] border border-gray-800 p-6 rounded-xl cursor-pointer hover:border-orange-500 transition"
            >

              <div className="text-orange-500 text-2xl mb-3">
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {card.text}
              </p>

            </motion.div>

          ))}

        </div>



        {/* CHART + AI */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">

          <div className="bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl">

            <h2 className="text-lg md:text-xl font-semibold mb-6">
              Weekly Progress
            </h2>

            <ResponsiveContainer width="100%" height={200}>

              <LineChart data={chartData}>
                <XAxis dataKey="day" stroke="#aaa"/>
                <YAxis stroke="#aaa"/>
                <Tooltip/>
                <Line
                type="monotone"
                dataKey="workout"
                stroke="#f97316"
                strokeWidth={3}
                />
              </LineChart>

            </ResponsiveContainer>

          </div>



          <div className="bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl">

            <h2 className="text-lg md:text-xl font-semibold mb-6">
              AI Workout Generator
            </h2>

            <button
            onClick={generateWorkout}
            className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Generate Workout
            </button>

            {plan.length>0 && (
              <p className="text-orange-500 mt-5 mb-2">
                Today's Workout Plan
              </p>
            )}

            <ul className="mt-2 space-y-2 text-gray-300 font-medium">
              {plan.map((w,i)=>(
                <li key={i}>• {w}</li>
              ))}
            </ul>

          </div>

        </div>



        {/* BMI */}

        <div className="bg-[#141414] border border-gray-800 p-6 md:p-8 rounded-xl max-w-xl">

          <h2 className="text-lg md:text-xl font-semibold mb-6">
            BMI Calculator
          </h2>

          <div className="space-y-4">

            <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg"
            />

            <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg"
            />

            <button
            onClick={calculateBMI}
            className="w-full py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
            >
              Calculate
            </button>

            {bmi && (
              <div className="text-orange-500 font-semibold">
                <p>Your BMI: {bmi.value}</p>
                <p className="text-sm text-gray-400">
                  Status: {bmi.status}
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </DashboardLayout>

  )

}

export default Dashboard