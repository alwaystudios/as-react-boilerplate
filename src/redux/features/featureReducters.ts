import { Action, isType } from 'typescript-fsa'
import { FeaturesType } from '../../types'
import { setFeatures } from './featureActions'

export const features = (_features: FeaturesType = {}, action: Action<any>): FeaturesType => {
  if (isType(action, setFeatures)) {
    return action.payload
  }

  return _features
}
