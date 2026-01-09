import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data?.tasks) return null;

  return (
    <div className="h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap w-full py-5 mt-10 gap-5 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {data.tasks.map((task, idx) => {
        if (task.active) return <AcceptTask key={idx} data={task} />;
        if (task.newTask) return <NewTask key={idx} data={task} />;
        if (task.completed) return <CompleteTask key={idx} data={task} />;
        if (task.failed) return <FailedTask key={idx} data={task} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
