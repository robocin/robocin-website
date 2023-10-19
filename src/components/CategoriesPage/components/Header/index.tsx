import React from 'react'

import Main from './CategoriesHeader'

import { CategoriesHeaderProps } from './interfaces'

const CategoriesHeader = ({ translate }: CategoriesHeaderProps) => {
  return <Main translate={translate} />
}

export default CategoriesHeader
