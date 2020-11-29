import request from 'superagent'
import { CategoryType } from '../types'

export const BASE_URL = 'http://localhost/api'

export const getCategories = (): Promise<CategoryType[]> =>
  request.get(`${BASE_URL}/categories`).then(({ body: { data } }) => data)
