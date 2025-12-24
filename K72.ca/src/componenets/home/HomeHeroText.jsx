import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] min-h-screen w-screen flex items-center justify-center -mt-[18vh]">
      <div className="text-center">
        <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
          L'étincelle
        </div>

        <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
          qui
          <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-3 mx-3">
             <Video />
          </div>
          génère
        </div>

        <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
          lacréativité
        </div>
      </div>
    </div>
  )
}

export default HomeHeroText
