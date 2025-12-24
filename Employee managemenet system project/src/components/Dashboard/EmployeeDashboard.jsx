import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#0f172a] via-[#1c1c1c] to-[#111827] text-white">
      <Header changeuser= {props.changeuser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
