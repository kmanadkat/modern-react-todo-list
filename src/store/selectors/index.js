import { createSelector } from 'reselect'

const getTodosFromState = (state) => state.todos.data
const getLaodingFromState = (state) => state.todos.isLoading

const getInCompleteTodosFromState = createSelector(getTodosFromState, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
)
const getCompleteTodosFromState = createSelector(getTodosFromState, (todos) =>
  todos.filter((todo) => todo.isCompleted)
)

export {
  getTodosFromState,
  getLaodingFromState,
  getInCompleteTodosFromState,
  getCompleteTodosFromState,
}
