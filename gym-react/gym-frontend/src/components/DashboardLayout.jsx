import { useNavigate } from "react-router-dom"
import {
  FaHome,
  FaDumbbell,
  FaUtensils,
  FaTint,
  FaAppleAlt,
  FaUser
} from "react-icons/fa"

const DashboardLayout = ({ children }) => {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-black text-white">

      {/* MOBILE TOP NAV */}

      <div className="md:hidden flex justify-around items-center bg-[#141414] border-b border-gray-800 py-3">

        <button onClick={()=>navigate("/dashboard")}><FaHome/></button>
        <button onClick={()=>navigate("/workout")}><FaDumbbell/></button>
        <button onClick={()=>navigate("/diet")}><FaUtensils/></button>
        <button onClick={()=>navigate("/calories")}><FaAppleAlt/></button>
        <button onClick={()=>navigate("/water")}><FaTint/></button>
        <button onClick={()=>navigate("/profile")}><FaUser/></button>

      </div>


      <div className="flex">

        {/* SIDEBAR DESKTOP */}

        <div className="hidden md:block w-64 bg-[#141414] border-r border-gray-800 p-6">

          <h2 className="text-2xl font-bold text-orange-500 mb-10">
            Fitness App
          </h2>

          <div className="space-y-5">

            <button
            onClick={()=>navigate("/dashboard")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaHome/> Dashboard
            </button>

            <button
            onClick={()=>navigate("/workout")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaDumbbell/> Workout
            </button>

            <button
            onClick={()=>navigate("/diet")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaUtensils/> Diet
            </button>

            <button
            onClick={()=>navigate("/calories")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaAppleAlt/> Calories
            </button>

            <button
            onClick={()=>navigate("/water")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaTint/> Water
            </button>

            <button
            onClick={()=>navigate("/profile")}
            className="flex gap-3 items-center hover:text-orange-500">
              <FaUser/> Profile
            </button>

          </div>

        </div>


        {/* CONTENT */}

        <div className="flex-1 p-6 md:p-10">
          {children}
        </div>

      </div>

    </div>

  )
}

export default DashboardLayout