const eventsData = [
  {
    type: "run_started",
    run_id: "r1",
    query: "Analyse Apple R&D vs peers"
  },

  // Task 1
  {
    type: "task_spawned",
    task_id: "t1",
    label: "Compare with peers",
    agent: "analyzer"
  },
  {
    type: "tool_call",
    task_id: "t1",
    tool: "comparison_engine"
  },
  {
    type: "partial_output",
    task_id: "t1",
    content: "Comparing with Microsoft & Google..."
  },
  {
    type: "task_update",
    task_id: "t1",
    status: "complete"
  },

  // Task 2
  {
    type: "task_spawned",
    task_id: "t2",
    label: "Generate report",
    agent: "writer"
  },
  {
    type: "partial_output",
    task_id: "t2",
    content: "Generating final report..."
  },
  {
    type: "task_update",
    task_id: "t2",
    status: "complete"
  },


  {
    type: "run_complete",
    status: "complete",
    output: "Apple R&D increased significantly compared to peers."
  }
];

export default eventsData;