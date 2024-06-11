import React from 'react'
import { useRouter } from 'next/router'

import { resultsTables } from '@/data/tables'

import { ExpandableTable } from '@/components'

import { CategoryDefaultProps } from './interfaces'

import * as S from './Category.styles'

type ResultTableKey = 'vssl' | 'ssl' | 'simulation' | 'drone'

const titleMap: Record<string, ResultTableKey> = {
  'Small Size League': 'ssl',
  'Very Small Size Soccer': 'vssl',
  '2D Simulation': 'simulation',
  Drone: 'drone',
}

const Category = ({
  title,
  image,
  competitions,
  description,
  approaches,
}: CategoryDefaultProps) => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'en' ? 'en' : 'ptBR'

  return (
    <S.Container id={title.toLowerCase()}>
      <S.Divider />
      <S.Wrapper>
        <S.MainTextcontainer>
          <S.Row spaced="true">
            <S.CategoryTitle>{title}</S.CategoryTitle>
            <S.CategoryCompetitions>{competitions}</S.CategoryCompetitions>
          </S.Row>
          <S.CategoryDescription>{description}</S.CategoryDescription>
        </S.MainTextcontainer>
        <S.CategoryImage src={image} alt={`${title} picture`} />
      </S.Wrapper>
      {approaches && (
        <>
          <S.ApproachSectionTitle>
            {lang === 'en' ? 'Our Approaches' : 'Nossas abordagens'}
          </S.ApproachSectionTitle>
          <S.Wrapper>
            {approaches.map((approach, index) => (
              <S.ApproachContainer
                small={(index % 2 !== 0).toString()}
                key={`${approach.title}_category_key`}
              >
                <S.ApproachTitle>{approach.title}</S.ApproachTitle>
                <S.ApproachDescription>
                  {approach.description}
                </S.ApproachDescription>
              </S.ApproachContainer>
            ))}
          </S.Wrapper>
        </>
      )}
      <S.TableWrapper>
        <ExpandableTable data={resultsTables[lang][titleMap[title]]} />
      </S.TableWrapper>
    </S.Container>
  )
}

export default Category
