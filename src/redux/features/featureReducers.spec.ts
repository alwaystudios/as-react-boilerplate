import { features } from './featureReducters'
import { setFeatures } from './featureActions'
import { testFeatures } from '../../../test/testFeatures'

describe('features reducers', () => {
  it('sets features', () => {
    const _features = testFeatures()
    const newState = features(_features, setFeatures({ newFeature: 'true' }))
    expect(newState).toEqual({ ..._features, newFeature: 'true' })
  })
})
