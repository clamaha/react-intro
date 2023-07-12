
import {useState} from 'react';

 export default function Form({addTask}) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTask)
    setNewTask("")

  };
    return (
    <div className='new-task'>
          <form onSubmit={handleSubmit}>
            <input className='type-new-task'
              type="text"
              value={newTask}
              onChange={handleInputChange}
              placeholder=" New task..."
            />
            <button className='btn' type="submit">+</button>
          </form>
          </div>    
      );
}

/*  const inputRef = useRef();
export default function Form() {
  const inputRef = useRef();
  function clickHandler() {
    const inputElement = inputRef.current;
    console.log(inputElement.value);
  }
    <div className='new-task'>
      <input ref={inputRef}  className='type-new-task' type="text" placeholder="New task..." />
      <button className='btn' type="submit" > + </button>
    </div>
}
}*/