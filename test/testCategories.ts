import { CategoryType } from '../src/types'
import { random, internet } from 'faker'

export const testCategory = (): CategoryType => ({
  id: internet.ipv6(),
  title: random.word(),
})

export const testCategories = (size = 2): CategoryType[] =>
  [...Array(size)].map(() => testCategory())
