import { CREATE_TODO, REMOVE_TODO } from '../actions/constants'

const intialState = []

export const todosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return [...state, payload]

    case REMOVE_TODO:
      const todos = state.filter((todo) => todo.id !== payload.id)
      return todos

    default:
      return state
  }
}
