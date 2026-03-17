import { Link } from "react-router-dom"
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50">

      <nav className="w-[90%] max-w-6xl flex items-center justify-between px-8 py-3 
      bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg text-white
      transition duration-500 hover:shadow-orange-500/20">

        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xl font-semibold 
          hover:scale-110 active:scale-95 transition duration-300 group"
        >
          <FaDumbbell className="text-orange-500 text-2xl 
          group-hover:rotate-12 transition duration-300" />

          <span className="group-hover:text-orange-400 transition">
            GYM
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          {[
            { name: "Home", action: scrollToTop },
            { name: "Our Services", action: () => scrollToSection("services") },
            { name: "About Us", action: () => scrollToSection("about") },
            { name: "Contact Us", action: () => scrollToSection("contact") },
            { name: "FAQ", action: () => scrollToSection("faq") },
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="relative group 
              active:scale-95 transition duration-200"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
              bg-orange-400 transition-all duration-300 
              group-hover:w-full group-active:w-full"></span>
            </button>
          ))}

        </div>

        {/* Sign Up Button */}
        <Link
          to="/signup"
          className="hidden md:block px-6 py-2 bg-orange-500 rounded-full 
          transition duration-300 
          hover:bg-orange-600 
          hover:scale-105 
          active:scale-95
          hover:shadow-lg 
          hover:shadow-orange-500/40"
        >
          Sign up
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl active:scale-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 w-[90%] max-w-sm bg-white/10 backdrop-blur-lg 
        border border-white/20 rounded-2xl p-6 flex flex-col gap-4 text-center text-white md:hidden shadow-xl">

          <button
            onClick={scrollToTop}
            className="py-2 rounded-lg transition duration-200
            hover:bg-white/10 active:bg-orange-500/20 active:scale-95"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="py-2 rounded-lg transition duration-200
            hover:bg-white/10 active:bg-orange-500/20 active:scale-95"
          >
            Our Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="py-2 rounded-lg transition duration-200
            hover:bg-white/10 active:bg-orange-500/20 active:scale-95"
          >
            About Us
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="py-2 rounded-lg transition duration-200
            hover:bg-white/10 active:bg-orange-500/20 active:scale-95"
          >
            Contact Us
          </button>

          <button
            onClick={() => scrollToSection("faq")}
            className="py-2 rounded-lg transition duration-200
            hover:bg-white/10 active:bg-orange-500/20 active:scale-95"
          >
            FAQ
          </button>

          <Link
            to="/signup"
            className="mt-2 px-6 py-2 bg-orange-500 rounded-full 
            transition duration-300 
            hover:bg-orange-600 
            active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            Sign up
          </Link>

        </div>
      )}

    </header>
  )
}

export default Navbar