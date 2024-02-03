import React from 'react'

import SSL from './assets/small-size-league.png'
import VSS from './assets/very-small-size-league.png'
import { Drone, TwoDimensionSim } from '@/assets'

import Main from './Categories'

import { CategoriesDefaultProps } from './interfaces'

const Categories = ({ translate }: CategoriesDefaultProps) => {
  const images = [SSL, VSS, TwoDimensionSim, Drone]

  return <Main categories={translate} images={images} />
}

export default Categories
