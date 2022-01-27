import React from 'react'
import './TodoList.css'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux'
import { loadTodosThunk, markTodoThunk, removeTodoThunk } from './todosThunks'

const TodoList = ({
  todos = [],
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
      {todos.map((todo) => (
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
  todos: state.todos,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(removeTodoThunk(id)),
  markComplete: (id) => dispatch(markTodoThunk(id)),
  initializeTodos: () => dispatch(loadTodosThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
