import React from 'react'

import * as S from './Header.styles'

import { HeaderDefaultProps } from './interface'

const Header = ({ translate }: HeaderDefaultProps) => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{translate.title}</S.Title>
        <S.Description>{translate.description}</S.Description>
      </S.TextContainer>
    </S.Container>
  )
}

export default Header
