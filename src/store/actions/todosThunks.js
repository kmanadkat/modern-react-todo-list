import {
  createTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  markCompleteTodo,
  removeTodo,
} from './todos'

const loadTodosThunk = () => async (dispatch, getState) => {
  dispatch(loadTodos())
  try {
    const response = await fetch('http://localhost:8000/todos')
    const data = await response.json()
    dispatch(loadTodosSuccess(data))
  } catch (error) {
    dispatch(loadTodosFailure())
    console.log(error)
  }
}

const addTodoThunk = (todo) => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8000/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(todo),
    })
    const data = await response.json()
    dispatch(createTodo(data))
  } catch (error) {
    console.log(error)
  }
}

const removeTodoThunk = (id) => async (dispatch, getState) => {
  try {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE',
    })
    dispatch(removeTodo(id))
  } catch (error) {
    console.log(error)
  }
}

const markTodoThunk = (id) => async (dispatch, getState) => {
  try {
    await fetch(`http://localhost:8000/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({ isCompleted: true }),
    })
    dispatch(markCompleteTodo(id))
  } catch (error) {
    console.log(error)
  }
}

export { loadTodosThunk, addTodoThunk, removeTodoThunk, markTodoThunk }
