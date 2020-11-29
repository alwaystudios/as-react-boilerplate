import React, { FunctionComponent, useEffect, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { CategoryType } from '../types'

export const Categories: FunctionComponent = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string>()

  const loadCategories = () =>
    getCategories()
      .then((data) => {
        setCategories(data)
      })
      .catch((err: Error) => {
        setError(err.message)
      })

  useEffect(() => {
    if (!categories.length) {
      loadCategories()
    }
  }, [categories])

  return error ? (
    <p>{error}</p>
  ) : (
    <>
      {categories && (
        <div>
          <h1>Categories</h1>
          <div>
            {categories.map((c) => (
              <div key={c.id}>{c.title}</div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
