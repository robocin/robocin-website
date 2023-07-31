import useTranslation from "@/hooks/useTranslation"

import * as S from './home.styles'

export default function Home() {
  const t = useTranslation()

  return (
    <S.StyledComponent>
      {t.content}
    </S.StyledComponent>
  )
}
