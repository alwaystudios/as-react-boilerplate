import { testState } from '../../../test/testState'
import { testFeatures } from '../../../test/testFeatures'
import { getFeatures } from './featureSelectors'

describe('feature selectors', () => {
  it('returns features', () => {
    const features = testFeatures()
    const state = testState({ features })
    expect(getFeatures(state)).toEqual(features)
  })
})
