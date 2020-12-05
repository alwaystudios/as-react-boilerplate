import { combineReducers } from 'redux'
import { features } from './features/featureReducters'
import { todos } from './todos/todoReducers'

export default combineReducers({ todos, features })
