import { combineReducers } from 'redux'
import { features } from './features/featureReducters'
import { todos } from './todos/todoReducters'

export default combineReducers({ todos, features })
