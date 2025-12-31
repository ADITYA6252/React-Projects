import React from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItem2 from './components/TodoItem2'

const App = () => {
  return (
    <center id='todo-container'>
     <AppName />
     <AddTodo />
     <TodoItem />
     <TodoItem2 />
   
    </center>
  )
}

export default App
