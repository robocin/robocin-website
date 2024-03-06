import React from 'react'

import { PublicationCardDefaultProps } from './interfaces'

import Main from './PublicationCard'

const PublicationCard = ({
  publication,
  translate,
}: PublicationCardDefaultProps) => {
  return <Main publication={publication} translate={translate} />
}

export default PublicationCard
