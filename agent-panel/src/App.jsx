import eventsData from "./components/mock/run_success";
import { useEventPlayer } from "./components/hooks/useEventPlayer";
import { useRunState } from "./components/hooks/useRunState";

export default function App() {
  const events = useEventPlayer(eventsData);
  const state = useRunState(events);

  const tasks = Object.values(state.tasks);
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "complete").length;
  const percent = total ? Math.floor((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-lg space-y-5">

        {/* HEADER */}
        <div className="bg-white p-5 rounded-xl shadow border">
          <h1 className="text-xl font-bold">
            {state.query || "Starting analysis..."}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
           Status: {state.status === "complete" ? "Completed ✅" : "Running ⏳"}
          </p>

          {/* Progress */}
          <div className="mt-3">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-green-400 rounded transition-all duration-500"
                style={{ width: percent + "%" }}
              ></div>
            </div>
            <p className="text-xs mt-1">{percent}% complete</p>
          </div>
        </div>

        {/* TASKS */}
        {tasks.map((task, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow border transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{task.label}</h2>

              <span>
                {task.status === "running" && "⏳"}
                {task.status === "complete" && "✅"}
              </span>
            </div>

            <p className="text-xs text-gray-400">
              🤖 {task.agent}
            </p>

            <div className="mt-2 space-y-1 text-sm">
              {task.logs.map((log, i) => (
                <p key={i}>• {log}</p>
              ))}
            </div>
          </div>
        ))}

        {/* FINAL OUTPUT */}
        {state.finalOutput && (
          <div className="bg-green-100 p-4 rounded-xl border border-green-300">
            <h2 className="font-bold text-green-700">
              ✅ Final Output
            </h2>
            <p>{state.finalOutput}</p>
          </div>
        )}

      </div>
    </div>
  );
}