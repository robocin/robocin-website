import React from 'react'

import { GroupPhoto } from '@/assets'

import * as S from './Banner.styles'

const Banner = () => {
  return (
    <S.SectionContainer>
      <S.BannerImg src={GroupPhoto} alt="Group photo" />
    </S.SectionContainer>
  )
}

export default Banner
