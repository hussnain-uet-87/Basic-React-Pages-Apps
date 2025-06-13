import { useState } from 'react'
import { TodoProvider, useTodo } from './context/todoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {
  return (
    <>
    <div className='container'>
    <h1 id='main-heading'>TODO APP</h1>
    <p id='subheading'>" Manage all your Tasks Efficiently "</p>
      <TodoProvider>
        <div id="main-div">
        <TodoForm/>
        <TodoList/>
      </div>
      </TodoProvider>      
      </div>
    </>
  )
}

export default App
