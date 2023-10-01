import React from 'react'

import SSL from './assets/small-size-league.png'
import VSS from './assets/very-small-size-league.png'
import Simulation from './assets/2d-simulation.png'
import Drone from './assets/drone.jpeg'

import Main from './Categories'

import { CategoriesDefaultProps } from './interfaces'

const Categories = ({ translate }: CategoriesDefaultProps) => {
  const images = [SSL, VSS, Simulation, Drone]

  return <Main categories={translate} images={images} />
}

export default Categories
