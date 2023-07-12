import Title from './Title.jsx'
import Form from './Form.jsx'
import List from './TodoList.jsx'
import Quotes from './Quotes.jsx'
import { useState, useEffect } from 'react';
import './App.css'

const myKey = "To-do-list"
export default function App(){
const [tab,setTab]= useState(()=> {
    const localValue = localStorage.getItem(myKey)
    if (localValue == null) return []
    return JSON.parse(localValue)
});


useEffect(()=>{
    window.localStorage.setItem(myKey, JSON.stringify(tab));
})

const handleAddToDo= (newToDo) =>{
    const newTab = {text:newToDo}
    setTab([...tab,newTab])
}

const handleCheckboxChange = (index) => {
   const updatedTasks = tab.map((item)=> {
if (item=== index){
    return{
        ...item,
        completed: !item.completed
    };
}
return item;
   })
setTab(updatedTasks);
   };
  

// eslint-disable-next-line no-unused-vars
const handleDelete = (index) => {
if (index.completed){
    const updatedTasks = tab.filter((item)=> item !== index)
    setTab(updatedTasks)
}
    };

    return(
        <>
        <Title/>
        <Form addTask={handleAddToDo}/>
        <List tab={tab} deletebtn={handleDelete} checklist={handleCheckboxChange} />
        <Quotes/>
        </>
    )
    }
