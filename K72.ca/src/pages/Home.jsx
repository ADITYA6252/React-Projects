import React from 'react'
import Video from '../componenets/home/Video'
import HomeBottomText from '../componenets/home/HomeBottomText'
import HomeHeroText from '../componenets/home/HomeHeroText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
<Video />
      </div>
<div className='h-screen w-screen justify-between  w-1/2 relative flex flex-col overflow-hidden'>
<HomeHeroText />
<HomeBottomText />
</div>

    </div>
  )
}

export default Home
