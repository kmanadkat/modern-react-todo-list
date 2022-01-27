import { generateId } from '../../util'
import {
  CREATE_TODO,
  LOADING_TODOS,
  LOADING_TODOS_FAILURE,
  LOADING_TODOS_SUCCESS,
  MARK_COMPLETE_TODO,
  REMOVE_TODO,
} from './constants'

export const createTodo = ({ text, id, isCompleted }) => ({
  type: CREATE_TODO,
  payload: { text, id, isCompleted },
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
})

export const markCompleteTodo = (id) => ({
  type: MARK_COMPLETE_TODO,
  payload: { id },
})

export const loadTodos = () => ({ type: LOADING_TODOS })

export const loadTodosSuccess = (todos) => ({
  type: LOADING_TODOS_SUCCESS,
  payload: { todos },
})

export const loadTodosFailure = () => ({
  type: LOADING_TODOS_FAILURE,
})
