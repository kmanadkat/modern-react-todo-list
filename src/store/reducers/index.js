import { combineReducers } from 'redux'
import { loaderReducer } from './loader'
import { todosReducer } from './todos'

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loaderReducer,
})

export default rootReducer
