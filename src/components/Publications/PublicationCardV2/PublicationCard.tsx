import React from 'react'

import { PublicationCardDefaultProps as PublicationCardProps } from './interfaces'

import * as S from './PublicationCard.styles'
import Link from 'next/link'
//<a href={publication?.url} rel="noopener noreferrer" target="_blank">
//          <S.AnchorText>{translate?.url_label}</S.AnchorText>
//        </a>
//
const PublicationCard = ({ publication, translate }: PublicationCardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Date>{publication?.year}</S.Date>
        <S.Title>{publication?.title}</S.Title>
        <S.Authors>{publication?.author}</S.Authors>
        <Link href={publication?.url}>
          <S.AnchorText>{translate?.url_label}</S.AnchorText>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default PublicationCard
