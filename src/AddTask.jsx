import './App.css'
import {useState} from 'react';

function NewTask() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const handleInputChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Type a new task..."
          />
          <button className='btn' type="submit">+</button>
        </form>
      </div>
    );
  }
  
  export default NewTask;

