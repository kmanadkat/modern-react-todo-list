import { CalendarCheck, Trash } from 'phosphor-react'
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
            <CalendarCheck
              color='#00812A'
              size={22}
              weight='duotone'
              style={{ position: 'relative', top: 2 }}
            />
          </button>
        )}
        <button className='remove-button' onClick={(e) => deleteTodo(todo.id)}>
          <Trash
            color='#B61515'
            size={22}
            weight='duotone'
            style={{ position: 'relative', top: 2 }}
          />
        </button>
      </div>
    </div>
  )
}

export default TodoListItem
