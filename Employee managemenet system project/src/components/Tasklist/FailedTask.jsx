import React from 'react'


const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-red-400 to-red-600 rounded-xl text-white shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-700 text-sm px-3 py-1 rounded-full shadow-sm">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-90">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 opacity-90">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">
          Mark Completed
        </button>
        <button className="bg-yellow-400 py-1 px-2 text-sm text-black rounded">
          Mark Failed
        </button>
      </div>
    </div>
  );
}

export default FailedTask
