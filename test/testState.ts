import { mergeDeepRight } from 'ramda'
import { DeepPartial } from 'redux'
import { INITIAL_STATE, State } from '../src/redux/state'

export const testState = (state: DeepPartial<State> = {}): State =>
  mergeDeepRight(INITIAL_STATE, state as any)
