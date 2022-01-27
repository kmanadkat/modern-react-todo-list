import {
  CREATE_TODO,
  LOADING_TODOS_SUCCESS,
  MARK_COMPLETE_TODO,
  REMOVE_TODO,
} from '../actions/constants'

const intialState = []

export const todosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOADING_TODOS_SUCCESS:
      return [...payload.todos]

    case CREATE_TODO:
      return [...state, payload]

    case REMOVE_TODO:
      const todos = state.filter((todo) => todo.id !== payload.id)
      return todos

    case MARK_COMPLETE_TODO:
      const newTodos = state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, isCompleted: true }
        }
        return todo
      })
      return newTodos

    default:
      return state
  }
}
