import React from 'react'

import LinkIcon from '@/assets/green-link-icon.svg'
import FallbackImage from './assets/document-icon.png'

import * as S from './PublicationCard.styles'

import { PublicationCardDefaultProps } from './interfaces'

const PublicationsCard = ({
  translate,
  title,
  description,
  image,
  url,
}: PublicationCardDefaultProps) => {
  return (
    <S.Container>
      <S.PublicationImg src={image || FallbackImage} />
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.LinkWrapper href={url} target="_blank" rel="noopener noreferrer">
          <S.LinkIcon src={LinkIcon} alt="link" />
          <S.LinkLabel>{translate.url_label}</S.LinkLabel>
        </S.LinkWrapper>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default PublicationsCard
