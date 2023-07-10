import React from 'react'
import ReactDOM from 'react-dom/client'
import Quotes from './Quotes.jsx'
import Title from './Title.jsx'
import NewTask from './AddTask.jsx'
import List from './TodoList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Title/>
    <NewTask/>
    <List/>
    <Quotes/>
  </React.StrictMode>,
)
