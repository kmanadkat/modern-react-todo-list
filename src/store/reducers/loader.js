import {
  LOADING_TODOS,
  LOADING_TODOS_FAILURE,
  LOADING_TODOS_SUCCESS,
} from '../actions/constants'

const intialState = false

export const loaderReducer = (state = intialState, { type }) => {
  switch (type) {
    case LOADING_TODOS:
      return true

    case LOADING_TODOS_SUCCESS:
    case LOADING_TODOS_FAILURE:
      return false

    default:
      return state
  }
}
