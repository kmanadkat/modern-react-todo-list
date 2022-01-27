import React from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'
import {
  loadTodosThunk,
  markTodoThunk,
  removeTodoThunk,
} from '../store/actions/todosThunks'
import {
  getCompleteTodosFromState,
  getInCompleteTodosFromState,
  getLaodingFromState,
} from '../store/selectors'

const TodoList = ({
  completedTodos,
  incompleteTodos,
  deleteTodo,
  markComplete,
  loading,
  initializeTodos,
}) => {
  React.useEffect(() => {
    initializeTodos()
  }, [])

  const loadingMessage = <p style={{ textAlign: 'center' }}>Loading Todos...</p>
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3 style={{ marginTop: 64 }}>Incomplete</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
      ))}
      <h3 style={{ marginTop: 64 }}>Completed</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
      ))}
    </ListWrapper>
  )

  if (loading) {
    return loadingMessage
  }
  return content
}

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const mapStateToProps = (state) => ({
  completedTodos: getCompleteTodosFromState(state),
  incompleteTodos: getInCompleteTodosFromState(state),
  loading: getLaodingFromState(state),
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(removeTodoThunk(id)),
  markComplete: (id) => dispatch(markTodoThunk(id)),
  initializeTodos: () => dispatch(loadTodosThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
