import { motion } from "framer-motion"
import { FaDumbbell, FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Signup = () => {

  const navigate = useNavigate()

  const [showPassword,setShowPassword] = useState(false)

  const [name,setName] = useState("")
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [loading,setLoading] = useState(false)

  const handleSignup = async (e) => {

    e.preventDefault()

    setLoading(true)

    try{

      await axios.post(
        "https://gym-backend-x8if.onrender.com/api/auth/signup",
        {
          name,
          email,
          password
        }
      )

      alert("Account created successfully")

      navigate("/login")

    }
    catch(error){

      console.log(error)

      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Server not running")
      }

    }
    finally{
      setLoading(false)
    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">

      <motion.div
      initial={{opacity:0,y:60}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6}}
      className="bg-[#141414] border border-gray-800 rounded-3xl p-6 md:p-10 w-full max-w-[420px] shadow-2xl"
      >

        <div className="flex items-center justify-center gap-2 text-orange-500 text-xl font-bold mb-6">
          <FaDumbbell/>
          GYM
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <div className="relative">

            <input
            type={showPassword ? "text":"password"}
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white"
            />

            <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>

          </div>

          <button
          type="submit"
          className="w-full py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?
          <Link
          to="/login"
          className="text-orange-500 ml-1 hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>

    </div>

  )

}

export default Signup