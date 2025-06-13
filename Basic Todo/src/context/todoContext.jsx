import { React, createContext, useContext, useState } from "react";

const userContext = createContext();
export const useTodo = () => useContext(userContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text: text.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const value = {
    todos,
    addTodo,
    toggleComplete,
  };
  return (
      <>
    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
  </>
);
};

export default userContext;
