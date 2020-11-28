import { createSelector } from 'reselect'
import { getRootSelector } from '../selectors'

export const getTodos = createSelector(getRootSelector, ({ todos = [] }) => todos)
