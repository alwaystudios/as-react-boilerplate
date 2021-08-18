import React from 'react'
import { Beer as BeerType } from '../types'

type Props = {
  beer: BeerType
}

export const Beer: React.FC<Props> = ({ beer: { name, image_url, tagline } }) => {
  return (
    <div>
      {name}
      <img src={image_url} />
      {tagline}
    </div>
  )
}
