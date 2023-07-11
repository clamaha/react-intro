import './App.css'
import {useState, useRef} from 'react';

export default function Form() {
    const [tasks, setTasks] = useState([]);
    const [Form, setForm] = useState('');
    const handleInputChange = (event) => {
      setForm(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (Form.trim() !== '') {
        setTasks([...tasks, Form]);
        setForm('');
      }
    };
  
    return (
      <div className='new-task'>
        <form onSubmit={handleSubmit}>
          <input className='type-new-task'
            type="text"
            value={Form}
            onChange={handleInputChange}
            placeholder=" New task..."
          />
          <button className='btn' type="submit"> + </button>
        </form>
      </div>
    );
  }
/*
export default function Form() {
  const inputRef = useRef();
  function clickHandler() {
    const inputElement = inputRef.current;
    console.log(inputElement.value);
  }
    <div className='new-task'>
      <input ref={inputRef}  className='type-new-task' type="text" placeholder="New task..." />
      <button className='btn' type="submit" onClick={clickHandler}> + </button>
    </div>
}
*/