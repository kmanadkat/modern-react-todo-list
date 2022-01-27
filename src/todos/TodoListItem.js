import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo, deleteTodo }) => {
  return (
    <div className='todo-item-container'>
      <h3>{todo.text}</h3>
      <div className='buttons-container'>
        <button className='completed-button'>Mark Completed</button>
        <button className='remove-button' onClick={(e) => deleteTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default TodoListItem
