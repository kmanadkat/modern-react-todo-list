import React from 'react'
import './TodoList.css'
import { connect } from 'react-redux'
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import TodoListItem from '../TodoListItem/TodoListItem'
import {
  loadTodosThunk,
  markTodoThunk,
  removeTodoThunk,
} from '../../store/actions/todosThunks'
import {
  getCompleteTodosFromState,
  getInCompleteTodosFromState,
  getLaodingFromState,
} from '../../store/selectors'

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
    <div className='list-wrapper'>
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
    </div>
  )

  if (loading) {
    return loadingMessage
  }
  return content
}

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
