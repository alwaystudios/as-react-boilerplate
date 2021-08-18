import React, { useEffect, useState } from 'react'
import { getBeers } from '../services/getBeers'
import { Beer as BeerType } from '../types'
import { Beer } from './Beer'

export const Beers: React.FC = () => {
  const [beers, setBeers] = useState<BeerType[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    getBeers(filter).then(setBeers)
  }, [filter])

  return (
    <div>
      <input value={filter} onChange={(event) => setFilter(event.currentTarget.value)} />
      {beers.map((beer) => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </div>
  )
}
