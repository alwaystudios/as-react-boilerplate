import shortid from 'shortid'
import { Action, isType } from 'typescript-fsa'
import { TodoType } from '../../types'
import { addTodoAction, removeTodoAction, toggleTodoAction } from './todoActions'

export const todos = (
  todos: ReadonlyArray<TodoType> = [],
  action: Action<any>,
): ReadonlyArray<TodoType> => {
  if (isType(action, addTodoAction)) {
    const newTodo: TodoType = {
      id: shortid(),
      content: action.payload,
      completed: false,
    }
    return [newTodo, ...todos]
  }

  if (isType(action, toggleTodoAction)) {
    return todos.map((todo) =>
      todo.id === action.payload
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo,
    )
  }

  if (isType(action, removeTodoAction)) {
    return todos.filter((todo) => todo.id !== action.payload)
  }

  return todos
}
