import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../store/actions/todos'
import { generateId } from '../util'
import './NewTodoForm.css'

function NewTodoForm({ todos, addTodo }) {
  const [inputValue, setInputValue] = React.useState('')

  const createButtonHandler = (e) => {
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <div className='new-todo-form '>
      <input
        type='text'
        className='new-todo-input'
        placeholder='Take dog outside for a walk..'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='new-todo-button' onClick={createButtonHandler}>
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(createTodo({ text, id: generateId() })),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
