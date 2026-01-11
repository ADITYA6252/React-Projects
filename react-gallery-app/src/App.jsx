import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=27`)
    setuserData(response.data)
  }

  useEffect(() => {
    getData()
  },[index])

  let printUserData = (
    <h3 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold tracking-wide">
      Loading...
    </h3>
  )

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => (
      <div key={idx}>
        <Card elem={elem} />
      </div>
    ))
  }

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white flex flex-col justify-between p-4">
      <div className="flex h-[82%] flex-wrap gap-5 p-3 justify-center overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-xl shadow-inner shadow-gray-800">
        {printUserData}
      </div>

      <div className="flex justify-center gap-8 items-center py-4 border-t border-gray-800 mt-4">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setuserData([])
            }
          }}
          className="bg-amber-400 text-black rounded-lg px-5 py-2 font-semibold text-sm shadow-md shadow-amber-500/30 
                     hover:bg-amber-300 hover:shadow-amber-400/50 transition-all duration-200 active:scale-95"
        >
          Prev
        </button>

        <h4 className="text-lg font-bold tracking-wide text-amber-400">Page {index}</h4>

        <button
          onClick={() => {
            setindex(index + 1)
            setuserData([])
          }}
          className="bg-amber-400 text-black rounded-lg px-5 py-2 font-semibold text-sm shadow-md shadow-amber-500/30 
                     hover:bg-amber-300 hover:shadow-amber-400/50 transition-all duration-200 active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
