import useTranslation from '@/hooks/useTranslation'

import { Footer } from '@/components'

import * as S from './home.styles'

export default function Home() {
  const t = useTranslation()

  return (
    <S.PageWrap>
      <S.ContentWrap>
        <S.StyledComponent>{t.content}</S.StyledComponent>
      </S.ContentWrap>
      <Footer />
    </S.PageWrap>
  )
}
