import { Action, isType } from 'typescript-fsa'
import { FeaturesType } from '../../types'
import { setFeatures } from './featureActions'

export const features = (_features: FeaturesType = {}, action: Action<any>): FeaturesType => {
  if (isType(action, setFeatures)) {
    return { ..._features, ...action.payload }
  }

  return _features
}
