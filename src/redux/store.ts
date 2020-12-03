import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { INITIAL_STATE, State } from './state'
import { todoMiddleware } from '../middleware/todoMiddleware'

export const configureStore = (state?: DeepPartial<State>) => {
  const middlewares = [todoMiddleware()]

  return createStore(
    rootReducer,
    (state as any) || INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
}
