import React from 'react'

import Main from './PublicationCard'

import { PublicationCardDefaultProps } from './interfaces'

const PublicationCard = ({
  translate,
  title,
  description,
  image,
  url,
}: PublicationCardDefaultProps) => {
  return (
    <Main
      translate={translate}
      title={title}
      description={description}
      image={image}
      url={url}
    />
  )
}

export default PublicationCard
