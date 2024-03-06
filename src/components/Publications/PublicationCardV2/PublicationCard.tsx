import React from 'react'

import { PublicationCardDefaultProps as PublicationCardProps } from './interfaces'

import * as S from './PublicationCard.styles'

const PublicationCard = ({ publication, translate }: PublicationCardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Date>{publication?.year}</S.Date>
        <S.Title>{publication?.title}</S.Title>
        <S.Authors>{publication?.description}</S.Authors>
        <a href={publication?.url} rel="noopener noreferrer" target="_blank">
          <S.AnchorText>{translate?.url_label}</S.AnchorText>
        </a>
      </S.Wrapper>
    </S.Container>
  )
}

export default PublicationCard
