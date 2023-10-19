import React from 'react'

import PublicationCard from '../PublicationCard'

import * as S from './PublicationsList.styles'

import { PublicationsListProps } from './interfaces'

const PublicationsList = ({
  translate,
  publications,
  filterOptions,
  onChangeFilter,
}: PublicationsListProps) => {
  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Title>{translate.header.title}</S.Title>
          <S.RegularText>{translate.header.description}</S.RegularText>
        </div>
        <S.Select
          name="publication-filter"
          onChange={onChangeFilter}
          defaultValue="all"
          data-testid="pub-filter"
        >
          {filterOptions?.map((filterOption, index) => (
            <option
              key={index + filterOption.label}
              value={filterOption.value}
              label={filterOption.label}
              data-testid={filterOption.label}
            />
          ))}
        </S.Select>
      </S.Header>
      {publications?.length === 0 ? (
        <S.RegularText>{translate.filter_results.fallback}</S.RegularText>
      ) : (
        publications?.map((publication) => (
          <PublicationCard
            translate={translate.publication_card}
            title={publication.title}
            description={publication.description}
            image={publication?.image}
            url={publication.url}
          />
        ))
      )}
    </S.Container>
  )
}

export default PublicationsList
