import React from 'react'
import { Carousel } from './Caurosel'
import { Table } from './Table'

export const Test: React.FC = () => (
  <div>
    <Table />
    <Carousel delay={2000}>
      <div>hello 1</div>
      <div>hello 2</div>
      <div>hello 3</div>
    </Carousel>
  </div>
)
