import React from 'react'
import ReactDOM from 'react-dom/client'
import Quotes from './Quotes.jsx'
import Title from './Title.jsx'
import Form from './Form.jsx'
import List from './TodoList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title/>
    <Form/>
    <List/>
    <Quotes/>
  </React.StrictMode>,
)
