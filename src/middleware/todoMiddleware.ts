import { Action, Middleware } from 'redux'
import { isType } from 'typescript-fsa'
import { apiGetTodos } from '../redux/todos/getTodos'
import { addTodoAction } from '../redux/todos/todoActions'
import { getTodos } from '../redux/todos/todoSelectors'

export const todoMiddleware = (): Middleware => (store) => {
  return (next) => async (action: Action<any>) => {
    next(action)

    const todos = getTodos(store.getState())

    if (isType(action, addTodoAction)) {
      const apiTodos = await apiGetTodos()
      console.log([...todos, ...apiTodos])
    }
  }
}
