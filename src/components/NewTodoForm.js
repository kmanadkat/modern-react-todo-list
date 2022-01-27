import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addTodoThunk } from '../store/actions/todosThunks'

function NewTodoForm({ addNewTodo }) {
  const [inputValue, setInputValue] = React.useState('')

  const createButtonHandler = (e) => {
    addNewTodo({ text: inputValue, isCompleted: false })
    setInputValue('')
  }

  return (
    <NewTodoFormWrapper>
      <NewTodoInput
        type='text'
        className='new-todo-input'
        placeholder='Take dog outside for a walk..'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewTodoButton className='new-todo-button' onClick={createButtonHandler}>
        Create Todo
      </NewTodoButton>
    </NewTodoFormWrapper>
  )
}

const NewTodoFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 32px 32px;
  text-align: center;
  box-shadow: 0 4px 8px rgb(0 0 0 / 9%);
  background-color: #fff;
`

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 16px;
  border: none;
  background-color: rgb(237, 237, 237);
  border-radius: 8px;
  width: 70%;
  outline: none;
`

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #4a68cb;
  color: #fff;
`

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(addTodoThunk(todo)),
})

export default connect(null, mapDispatchToProps)(NewTodoForm)
