const exercises = [

  { name:"Bench Press", muscle:"Chest" },
  { name:"Squats", muscle:"Legs" },
  { name:"Deadlift", muscle:"Back" },
  { name:"Shoulder Press", muscle:"Shoulders" },
  { name:"Pull Ups", muscle:"Back" },
  { name:"Lunges", muscle:"Legs" }

]

const Exercises = () => {

  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24 md:py-32">

      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
        Exercise Library
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {exercises.map((ex,index)=>(

          <div
          key={index}
          className="bg-[#141414] border border-gray-800 p-5 md:p-6 rounded-xl hover:border-orange-500 transition"
          >

            <h3 className="text-lg md:text-xl font-semibold">
              {ex.name}
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              Target Muscle: {ex.muscle}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Exercises