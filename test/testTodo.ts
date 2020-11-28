import shortid from 'shortid'
import { TodoType } from '../src/types'

export const testTodo = (content: string): TodoType => ({
  id: shortid(),
  content,
  completed: false,
})
