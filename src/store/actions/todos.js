import { CREATE_TODO, MARK_COMPLETE_TODO, REMOVE_TODO } from './constants'

export const createTodo = ({ text, id }) => ({
  type: CREATE_TODO,
  payload: { text, id, isCompleted: false },
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
})

export const markCompleteTodo = (id) => ({
  type: MARK_COMPLETE_TODO,
  payload: { id },
})
