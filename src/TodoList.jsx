import './App.css'
import { useState } from 'react';

function deleteTask(){
  setTodos(prevTodos => prevTodos.filter(todo => todo !== task));
}
export default function List() {
  const initialTodos = ["Learn React", "Add style", "Make it interactive","Drink water"];
// eslint-disable-next-line no-unused-vars
const myState = useState(initialTodos);
const [todos, setTodos] = useState(initialTodos);
  return (
<ul>
  {initialTodos.map((todos) => (
      <li key={todos}>
        <input className='check' type="checkbox"/>{todos} <i onClick={deleteTask} className="icons fa-solid fa-xmark"></i>
      </li>
  ))}
    </ul>
  );
}