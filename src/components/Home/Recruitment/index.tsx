import * as S from './Recruitment.styles'
import useTranslation from '@/hooks/useTranslation'

function Recruitment() {
  const t = useTranslation()

  return (
    <S.Container>
      <h1>{t.home.recruitment.recruiting}</h1>
      <S.ApplicationCTA href="./seletiva">
        {t.home.recruitment.cta}
      </S.ApplicationCTA>
    </S.Container>
  )
}

export default Recruitment
