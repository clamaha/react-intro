import './App.css'
import { useState } from 'react';

export default function List() {
  const initialTodos = ["Learn React", "Add style", "Make it interactive","Drink water"];
// eslint-disable-next-line no-unused-vars
const myState = useState(initialTodos);
// eslint-disable-next-line no-unused-vars
const [todos, setTodos] = useState(initialTodos);
  return (
<ul>
  {initialTodos.map((todos) => (
      <li key={todos}>
        <input type="checkbox" />{todos} <i className="icons fa-solid fa-pen"></i> <i className="icons fa-solid fa-trash"></i>
      </li>
  ))}
    </ul>
  );
}

