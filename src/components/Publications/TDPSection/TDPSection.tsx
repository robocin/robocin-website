import React from 'react'

import { RoboCup2023, OpenInNewIcon } from '@/assets'

import * as S from './TDPSection.styles'

import { TDPSectionProps } from './interfaces'

const TDPSection = ({ translate, tdpsUrl }: TDPSectionProps) => {
  return (
    <>
      <S.Container>
        <S.Picture src={RoboCup2023} alt="Group" priority />
        <S.Content>
          <S.Title>{translate.title}</S.Title>
          <S.Description>{translate.description}</S.Description>
          <S.Button href={tdpsUrl} target="_blank" rel="noopener noreferrer">
            {translate.button_label}
            <S.Icon src={OpenInNewIcon} alt="Open in new tab" />
          </S.Button>
        </S.Content>
      </S.Container>
      <S.Divider />
    </>
  )
}

export default TDPSection
