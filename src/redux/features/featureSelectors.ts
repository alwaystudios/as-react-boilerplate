import { createSelector } from 'reselect'
import { getRootSelector } from '../selectors'

export const getFeatures = createSelector(getRootSelector, ({ features = {} }) => features)
