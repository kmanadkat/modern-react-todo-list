import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo, deleteTodo, markComplete }) => {
  return (
    <div className='todo-item-container'>
      <h3 className={todo.isCompleted ? 'completed' : ''}>{todo.text}</h3>
      <div className='buttons-container'>
        {!todo.isCompleted && (
          <button
            className='completed-button'
            onClick={(e) => markComplete(todo.id)}>
            Mark Completed
          </button>
        )}
        <button className='remove-button' onClick={(e) => deleteTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default TodoListItem
