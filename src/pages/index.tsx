import React, { useState } from 'react'

import useTranslation from '@/hooks/useTranslation'

import { Footer, InfoPopup, Activities, AboutUs } from '@/components'

import * as S from './home.styles'

export default function Home() {
  const [infoPopupOpen, setInfoPopupOpen] = useState<boolean>(false)
  const [infoPopupType, setInfoPopupType] = useState<
    'competitions' | 'research' | 'development'
  >('competitions')

  const t = useTranslation()

  const handleClickActivity = (
    activity: 'competitions' | 'research' | 'development'
  ) => {
    setInfoPopupType(activity)
    setInfoPopupOpen(true)
  }

  const handleCloseInfoPopup = () => {
    setInfoPopupOpen(false)
  }

  return (
    <S.PageWrap>
      <S.ContentWrap>
        <S.StyledComponent>{t.content}</S.StyledComponent>
        <Activities
          translate={t.home.activities}
          onClickActivity={handleClickActivity}
        />
        <AboutUs translate={t.home.about_us} />
      </S.ContentWrap>
      {infoPopupOpen && (
        <InfoPopup
          type={infoPopupType}
          translate={t.home.infoPopup}
          onClose={handleCloseInfoPopup}
        />
      )}
      <Footer />
    </S.PageWrap>
  )
}
