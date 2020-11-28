import { isFeatureEnabled } from './features'

describe('features', () => {
  beforeEach(jest.resetAllMocks)

  it('detects enabled feature for string with value true', () => {
    expect(isFeatureEnabled({ test: 'true' }, 'test')).toBe(true)
  })

  it('detects disabled feature for empty string', () => {
    expect(isFeatureEnabled({ test: '' }, 'test')).toBe(false)
  })
})
