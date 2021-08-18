import { Beer } from '../src/types'
import { datatype, internet, lorem } from 'faker'

export const testBeer = (overrides: Partial<Beer> = {}): Beer => ({
  id: datatype.number(),
  name: lorem.words(1),
  tagline: lorem.words(4),
  image_url: internet.url(),
  ...overrides,
})
