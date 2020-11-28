import { Store, Dispatch, Action } from 'redux'

type ConfigureStore = Store<any, Action<any>>

export interface ConfigureStoreType extends ConfigureStore {
  dispatch: Dispatch<any>
}

export type TodoType = {
  id: string
  content: string
  completed: boolean
}
