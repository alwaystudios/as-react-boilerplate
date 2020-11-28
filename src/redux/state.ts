import { FeaturesType, TodoType } from '../types'

export type State = Readonly<{
  todos: ReadonlyArray<TodoType>
  features: FeaturesType
}>

export const INITIAL_STATE: State = {
  todos: [],
  features: {},
}
