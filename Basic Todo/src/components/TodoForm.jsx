import React, { useState } from 'react'
import { useTodo } from '../context/todoContext';

const TodoForm = () => {
  const {addTodo} = useTodo();
  const [text,setText] = useState('');
  const handleSubmit= (e) =>
    {
      e.preventDefault();
      if(text.trim() !== ""){
        if(text.length <=16){
        addTodo(text);
        setText('');
        }
        else{
          alert(" Summarize your Words - Input Length should be less than 16 characters ")

        }
      }
    }
  return (
   <>
   <div>
    <form className='form' onSubmit={handleSubmit}>
        <input id='input' type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <input id='btn' type="submit" value="Add"/>
    </form>
   </div>
   </>

  )
}

export default TodoForm