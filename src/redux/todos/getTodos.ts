import shortid from 'shortid'
import { TodoType } from '../../types'

const todos = [...Array(3)].map((_, i) => ({
  id: shortid(),
  content: `todo-${i}`,
  completed: false,
}))

export const apiGetTodos = (): Promise<TodoType[]> => Promise.resolve(todos)
