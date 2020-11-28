import { setFeatures } from './featureActions'
import { testFeatures } from '../../../test/testFeatures'

describe('feature actions', () => {
  it('has set features action', () => {
    const features = testFeatures()
    expect(setFeatures(features)).toEqual({
      type: 'SET_FEATURES',
      payload: features,
    })
  })
})
