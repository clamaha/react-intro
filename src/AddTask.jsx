import './App.css'
import {useState} from 'react';

function NewTask() {
    const [newTask, setNewTask] = useState('');
  
    const inputChange = (e) => {
      setNewTask(e.target.value);
    };
  
    const submitBtn = (e) => {
      e.preventDefault();
      };
    
return (
    <div className='tdl'>
      <form onSubmit={submitBtn}>
        <input
          type="text"
          value={newTask}
          onChange={inputChange}
          placeholder="New task..."
        />
        <button className='btn' type="submit">+</button>
      </form>
      </div>
      );
}
export default NewTask;
