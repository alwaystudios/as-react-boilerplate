import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { INITIAL_STATE, State } from './state'

export const configureStore = (state?: DeepPartial<State>) => {
  const middlewares = [].filter(Boolean)

  return createStore(
    rootReducer,
    (state as any) || INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
}
