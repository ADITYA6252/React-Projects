import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans">

      {/* Left Section - Form */}
      <form
        onSubmit={submitHandler}
        className="flex gap-6 lg:w-1/2 p-10 flex-col items-start justify-center"
      >
        <h1 className="text-4xl mb-2 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Add Notes
        </h1>

        {/* Input - Title */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none 
                     focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Input - Details */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none 
                     focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        {/* Button */}
        <button
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 
                     active:scale-95 font-semibold w-full text-black px-5 py-3 rounded-lg shadow-md shadow-blue-500/30 
                     transition-all duration-300"
        >
          Add Note
        </button>
      </form>

      {/* Right Section - Notes */}
      <div className="lg:w-1/2 lg:border-l border-gray-800 p-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Recent Notes
        </h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-44 bg-cover rounded-xl text-black pt-9 pb-4 px-4 
                           shadow-lg shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-300 hover:scale-[1.03]
                           bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                  <p className="mt-2 leading-tight text-xs font-semibold text-gray-700">{elem.details}</p>
                </div>

                <button
                  onClick={() => deleteNote(idx)}
                  className="w-full cursor-pointer active:scale-95 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 
                             py-1.5 text-xs rounded font-bold text-white shadow-md shadow-blue-500/30 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
