import actionCreatorFactory from 'typescript-fsa'
import { FeaturesType } from '../../types'

const createAction = actionCreatorFactory()

export const setFeatures = createAction<FeaturesType>('SET_FEATURES')
