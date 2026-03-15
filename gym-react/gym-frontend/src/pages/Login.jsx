import { motion } from "framer-motion"
import { FaDumbbell, FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {

    e.preventDefault()

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    setLoading(true)

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      )

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      navigate("/dashboard")

    } catch (error) {

      console.log(error)

      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Backend server not running")
      }

    } finally {
      setLoading(false)
    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#141414] border border-gray-800 rounded-3xl p-6 md:p-10 w-full max-w-[420px] shadow-2xl"
      >

        {/* LOGO */}

        <div className="flex items-center justify-center gap-2 text-orange-500 text-xl font-bold mb-6">
          <FaDumbbell />
          GYM
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Welcome Back
        </h2>

        {/* FORM */}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 
            text-white outline-none focus:border-orange-500 focus:ring-1 
            focus:ring-orange-500 transition"
          />

          {/* PASSWORD */}

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 
              text-white outline-none focus:border-orange-500 focus:ring-1 
              focus:ring-orange-500 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* FORGOT PASSWORD */}

          <div className="text-right text-sm">
            <span className="text-gray-400 hover:text-orange-500 cursor-pointer transition">
              Forgot Password?
            </span>
          </div>

          {/* LOGIN BUTTON */}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-orange-500 rounded-lg font-semibold 
            hover:bg-orange-600 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>

        </form>

        {/* SIGNUP */}

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-orange-500 ml-1 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </motion.div>

    </div>

  )

}

export default Login