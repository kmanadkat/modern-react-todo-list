import React from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  return (
    <div className='App'>
      <TodoList />
    </div>
  )
}

export default hot(module)(App)
