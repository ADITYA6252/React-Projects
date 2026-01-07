import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {


  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={async () => {
       const data = await fetchPhotos('cat')

        console.log(data)
      }}>Get Photos</button>
    </div>
  )
}

export default App
