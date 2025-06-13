import React from 'react'
import { useTodo } from '../context/todoContext';

const TodoList = () => {
    const { todos , toggleComplete} = useTodo();
  return (
    <div id='main-list'>
      
    {todos.map(todo => (
      <li key={todo.id}> <span> {todo.text} <span id='tick'>{todo.completed ? "✅" : "❌" }</span> </span> <button onClick={(e)=> toggleComplete(todo.id)}>Toggle</button></li>
    ))}
  </div>
  )
}

export default TodoList


