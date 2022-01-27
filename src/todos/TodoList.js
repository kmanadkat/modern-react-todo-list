import React from 'react'
import './TodoList.css'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { removeTodo, markCompleteTodo } from '../store/actions/todos'
import { connect } from 'react-redux'

const TodoList = ({ todos = [], deleteTodo, markComplete }) => {
  return (
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
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(removeTodo(id)),
  markComplete: (id) => dispatch(markCompleteTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
