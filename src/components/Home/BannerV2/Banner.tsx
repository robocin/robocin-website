import React from 'react'

import { GroupPhoto } from '@/assets'

import * as S from './Banner.styles'

const Banner = () => {
  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.Heading>ROBÔCIN</S.Heading>
        <S.Paragraph>IA que vence competições mundiais</S.Paragraph>
      </S.TextContainer>
      <S.BannerImg src={GroupPhoto} alt="Group photo" />
    </S.SectionContainer>
  )
}

export default Banner
