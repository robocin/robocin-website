import React from 'react'

import { LeftArrow } from './assets'

import typeImageMap from './utils/typeImageMap'

import { InfoPopupProps } from './interfaces'

import * as S from './InfoPopup.styles'

const InfoPopup = ({
  title,
  description,
  backgroundImages,
  onClose,
}: InfoPopupProps) => {
  return (
    <S.Container>
      <S.CloseIcon src={LeftArrow} alt="Fechar popup" onClick={onClose} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {backgroundImages && (
          <>
            <S.BackgroundImage
              position="left"
              src={backgroundImages.leftImage}
              alt="Background image"
            />
            <S.BackgroundImage
              position="right"
              src={backgroundImages.rightImage}
              alt="Background image"
            />
          </>
        )}
      </S.Content>
    </S.Container>
  )
}

export default InfoPopup
