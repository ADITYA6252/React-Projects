import { useMemo } from "react";

export const useRunState = (events) => {
  return useMemo(() => {
    const state = {
      query: "",
      status: "running",
      tasks: {},
      finalOutput: ""
    };

    const ensureTask = (id) => {
      if (!state.tasks[id]) {
        state.tasks[id] = {
          label: "Loading...",
          agent: "unknown",
          status: "running",
          logs: []
        };
      }
    };

    for (let e of events) {
      if (!e || !e.type) continue;

      if (e.type === "run_started") {
        state.query = e.query;
      }

      if (e.type === "task_spawned") {
        state.tasks[e.task_id] = {
          label: e.label,
          agent: e.agent,
          status: "running",
          logs: state.tasks[e.task_id]?.logs || []
        };
      }

      if (e.type === "tool_call") {
        ensureTask(e.task_id);
        state.tasks[e.task_id].logs.push("Tool: " + e.tool);
      }

      if (e.type === "partial_output") {
        ensureTask(e.task_id);
        state.tasks[e.task_id].logs.push(e.content);
      }

      if (e.type === "task_update") {
        ensureTask(e.task_id);
        state.tasks[e.task_id].status = e.status;
      }

      if (e.type === "run_complete") {
        state.status = "complete";
        state.finalOutput = e.output;
      }
    }

    return state;
  }, [events]);
};