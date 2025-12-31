import React from 'react'

const TodoItem2 = () => {
    let todoName ='Go TO College';
    let todoDate ='4/10/2023';
  return (
   <div className="container text-center">
    <div class="row">
    <div class="col-6">
    {todoName}
    </div>
    <div class="col-4">
     {todoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  </div>
  )
}

export default TodoItem2
