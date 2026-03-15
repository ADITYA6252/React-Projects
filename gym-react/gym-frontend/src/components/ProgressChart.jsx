import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  {day:"Mon", workout:30},
  {day:"Tue", workout:45},
  {day:"Wed", workout:50},
  {day:"Thu", workout:40},
  {day:"Fri", workout:60},
]

const ProgressChart = () => {

  return (

    <div className="bg-[#141414] border border-gray-800 p-8 rounded-xl">

      <h2 className="text-xl font-semibold mb-6">
        Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={200}>

        <LineChart data={data}>

          <XAxis dataKey="day" stroke="#aaa" />

          <YAxis stroke="#aaa"/>

          <Tooltip />

          <Line
            type="monotone"
            dataKey="workout"
            stroke="#f97316"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}

export default ProgressChart