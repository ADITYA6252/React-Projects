import React from 'react'

const TaskListNumbers = ({ data }) => {
  if (!data || !data.taskNumbers) {
    return <div className="text-center text-gray-400 mt-10">No task data available</div>;
  }

  return (
    <div className="flex mt-10 flex-wrap justify-between gap-6">

      <div className="rounded-2xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-red-500 to-red-600 shadow-md hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.newTask}</h2>
        <h3 className="text-lg font-medium text-gray-100 mt-2">New Task</h3>
      </div>

      <div className="rounded-2xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-blue-500 to-blue-600 shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg font-medium text-gray-100 mt-2">Completed Task</h3>
      </div>

      <div className="rounded-2xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-green-500 to-green-600 shadow-md hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.active}</h2>
        <h3 className="text-lg font-medium text-gray-100 mt-2">Accepted Task</h3>
      </div>

      <div className="rounded-2xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg font-medium text-gray-100 mt-2">Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
