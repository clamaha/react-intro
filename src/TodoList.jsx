
export default function List({tab, deletebtn,checklist}) {
  /*
 const initialTodos = ["Learn React", "Add style", "Make it interactive","Drink water"];
// eslint-disable-next-line no-unused-vars
const myState = useState(initialTodos);
*/
  return(
    <ul>
    {tab.map((task, index) => (
      <li key={index}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => checklist(task)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
         <i className="icons fa-solid fa-xmark" onClick={() => deletebtn(task)}></i>
      </li>
    ))}
  </ul>
)}