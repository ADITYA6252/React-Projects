import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title.trim() || !details.trim()) return; // avoid empty notes

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white font-sans flex flex-col lg:flex-row">
      <form
        onSubmit={submitHandler}
        className="flex gap-6 p-6 md:p-10 flex-col items-start justify-center lg:w-1/2"
      >
        <h1 className="text-3xl md:text-4xl mb-4 font-extrabold bg-gradient-to-r from-indigo-400 to-sky-500 bg-clip-text text-transparent drop-shadow-lg">
          Add Notes
        </h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-3 bg-slate-700 border border-slate-600 rounded-lg outline-none
                     focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          className="px-5 w-full font-medium h-28 md:h-32 py-3 bg-slate-700 border border-slate-600 rounded-lg outline-none
                     focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400
                     active:scale-95 font-semibold w-full md:w-auto text-white px-5 py-3 rounded-lg shadow-md shadow-indigo-500/30
                     transition-all duration-300"
        >
          Add Note
        </button>
      </form>

 
      <div className="lg:w-1/2 lg:border-l border-slate-700 p-6 md:p-10 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-500 bg-clip-text text-transparent mb-6">
          Recent Notes
        </h1>

        <div
          className="flex flex-wrap items-start justify-start gap-5 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
          style={{ maxHeight: '75vh' }}
        >
          {task.length === 0 && (
            <p className="text-slate-400 italic">No notes added yet.</p>
          )}

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between relative h-52 w-44 rounded-xl text-indigo-900 pt-9 pb-4 px-4
                         shadow-lg shadow-indigo-300/30 hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-[1.03]
                         bg-white/90 backdrop-blur-sm"
            >
              <div>
                <h3 className="leading-tight text-lg font-semibold">{elem.title}</h3>
                <p className="mt-2 leading-tight text-xs font-medium whitespace-pre-wrap">{elem.details}</p>
              </div>

              <button
                onClick={() => deleteNote(idx)}
                className="w-full cursor-pointer active:scale-95 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400
                           py-1.5 text-xs rounded font-bold text-white shadow-md shadow-red-500/30 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
