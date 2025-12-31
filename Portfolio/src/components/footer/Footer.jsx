import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around items-center
      bg-[#465697] text-white p-10 md:p-12 gap-6"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-3">
        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <MdOutlineEmail size={22} />
          <a
            href="mailto:at894569@gmail.com"
            className="hover:underline"
          >
            at894569@gmail.com
          </a>
        </li>

        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/aditya-thakur-3522202a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
                linkedin.com/in/aditya-thakur


          </a>
        </li>

        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <FaGithub size={22} />
          <a
            href="https://github.com/ADITYA6252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           github.com/ADITYA6252
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
