import { CREATE_TODO, REMOVE_TODO } from './constants'

export const createTodo = ({ text, id }) => ({
  type: CREATE_TODO,
  payload: { text, id },
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
})
