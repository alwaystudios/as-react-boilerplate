import { TodoType } from '../types'

export type State = Readonly<{
  todos: ReadonlyArray<TodoType>
}>

export const INITIAL_STATE: State = {
  todos: [],
}
