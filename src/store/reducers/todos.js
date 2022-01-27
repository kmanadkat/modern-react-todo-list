import {
  CREATE_TODO,
  LOADING_TODOS,
  LOADING_TODOS_FAILURE,
  LOADING_TODOS_SUCCESS,
  MARK_COMPLETE_TODO,
  REMOVE_TODO,
} from '../actions/constants'

const intialState = {
  data: [],
  isLoading: false,
}

export const todosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOADING_TODOS:
      return {
        ...state,
        isLoading: true,
      }

    case LOADING_TODOS_SUCCESS:
      return {
        ...state,
        data: [...payload.todos],
        isLoading: false,
      }

    case LOADING_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }

    case CREATE_TODO:
      return {
        ...state,
        data: [...state.data, payload],
      }

    case REMOVE_TODO:
      const todos = state.data.filter((todo) => todo.id !== payload.id)
      return {
        ...state,
        data: todos,
      }

    case MARK_COMPLETE_TODO:
      const newTodos = state.data.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, isCompleted: true }
        }
        return todo
      })
      return {
        ...state,
        data: newTodos,
      }

    default:
      return state
  }
}
