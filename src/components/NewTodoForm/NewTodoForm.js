import React from 'react'
import { connect } from 'react-redux'
import './NewTodoForm.css'
import { addTodoThunk } from '../../store/actions/todosThunks'

function NewTodoForm({ addNewTodo }) {
  const [inputValue, setInputValue] = React.useState('')

  const createButtonHandler = (e) => {
    addNewTodo({ text: inputValue, isCompleted: false })
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

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(addTodoThunk(todo)),
})

export default connect(null, mapDispatchToProps)(NewTodoForm)
