import React, { useState } from 'react'
import { useRouter } from 'next/router'

import useTranslation from '@/hooks/useTranslation'

import {
  Footer,
  InfoPopup,
  Activities,
  AboutUs,
  Sponsors,
  Banner,
} from '@/components'

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
        <Banner translate={t.home.banner} />
        <AboutUs translate={t.home.about_us} />
        <Activities
          translate={t.home.activities}
          onClickActivity={handleClickActivity}
        />
        <Sponsors translate={t.home.sponsors} />
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
