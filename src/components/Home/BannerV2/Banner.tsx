import React from 'react'

import { GroupPhoto } from '@/assets'

import * as S from './Banner.styles'
import { BannerDefaultProps } from './interfaces'

const Banner = ({ translate }: BannerDefaultProps) => {
  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.Heading>ROBÔCIN</S.Heading>
        <S.Paragraph>{translate.heading}</S.Paragraph>
      </S.TextContainer>
      <S.BannerImg src={GroupPhoto} alt="Group photo" />
    </S.SectionContainer>
  )
}

export default Banner
