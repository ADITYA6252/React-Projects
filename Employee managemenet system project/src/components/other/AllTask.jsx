import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(Authcontext);

  return (
    <div className="bg-gradient-to-br from-[#1a1f2b] via-[#111827] to-[#0f172a] p-8 mt-10 rounded-2xl shadow-2xl border border-gray-700 max-w-5xl mx-auto text-white transition-all duration-300">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6 flex justify-between items-center rounded-lg shadow-lg mb-4">
        <h2 className="w-1/5 text-center font-semibold">Employee Name</h2>
        <h3 className="w-1/5 text-center font-semibold">New Task</h3>
        <h5 className="w-1/5 text-center font-semibold">Active Task</h5>
        <h5 className="w-1/5 text-center font-semibold">Completed</h5>
        <h5 className="w-1/5 text-center font-semibold">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto space-y-3">
        {userData.map((elem, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-700 py-4 px-6 flex justify-between items-center rounded-lg shadow-md hover:shadow-blue-600/30 hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="w-1/5 text-center text-gray-100">{elem.firstName}</h2>
            <h3 className="w-1/5 text-center text-yellow-400">{elem.taskNumbers.newTask}</h3>
            <h5 className="w-1/5 text-center text-blue-400">{elem.taskNumbers.active}</h5>
            <h5 className="w-1/5 text-center text-green-400">{elem.taskNumbers.completed}</h5>
            <h5 className="w-1/5 text-center text-red-400">{elem.taskNumbers.failed}</h5>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllTask;
