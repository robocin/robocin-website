import React from 'react'

import Main from './Category'

import { CategoryDefaultProps } from './interfaces'

const Category = ({
  title,
  image,
  competitions,
  description,
  approaches,
}: CategoryDefaultProps) => {
  return (
    <Main
      title={title}
      image={image}
      competitions={competitions}
      description={description}
      approaches={approaches}
    />
  )
}

export default Category
