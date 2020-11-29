import nock from 'nock'
import { BASE_URL, getCategories } from './getCategories'
import { testCategories } from '../../test/testCategories'

const categories = testCategories()
const endpoint = '/categories'

describe('get categories', () => {
  it('returns categories from the api', async () => {
    nock(BASE_URL).get(endpoint).reply(200, { data: categories })
    const res = await getCategories()
    expect(res).toEqual(categories)
    expect(nock.isDone()).toBe(true)
  })

  it('throws errors on server error', async () => {
    nock(BASE_URL).get(endpoint).reply(500)
    await expect(getCategories()).rejects.toEqual(new Error('Internal Server Error'))
  })
})
