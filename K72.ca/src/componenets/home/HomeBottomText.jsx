import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 -mt-5'>
      <div className='lg:h-44 flex items-center px-10  rounded-full uppercase  hover:text-[#D3FD50] '>
              <Link className='text-[6vw] leading-[6vw]  border-2 hover:border-[#D3FD50] border-white rounded-full  px-10  pt-3 uppercase' to='/projects'>Projets</Link>
 
      </div>

      <div className=' lg:h-44 flex items-center px-10 rounded-full uppercase hover:text-[#D3FD50] '>
              <Link className='text-[6vw] leading-[6vw] border-2 border-white hover:border-[#D3FD50]  rounded-full  px-10 pt-3 uppercase' to='/agence'>Agence</Link>

      </div>
    </div>

    
  )
}

export default HomeBottomText
