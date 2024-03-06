import React, { useState, useMemo, useEffect } from 'react'
import { scientificPublications } from '@/data/publications'

import Main from './PublicationsList'

import { PublicationsListDefaultProps } from './interfaces'
import { useRouter } from 'next/router'

const PublicationsList = ({ translate }: PublicationsListDefaultProps) => {
  const router = useRouter()
  const { locale } = router
  const language = locale === 'en' ? 'en' : 'ptBR'

  const [lang, setLang] = useState(language)
  const [filteredPublications, setFilteredPublications] = useState(
    scientificPublications
  )

  const yearFilterOptions = useMemo(() => {
    const initialYear = 2020
    const finalYear = 2023
    const yearOptionsRange = Array(finalYear - initialYear + 1)
      .fill(undefined)
      .map((_, index) => {
        const year = finalYear - index
        return {
          label: year.toString(),
          value: year.toString(),
        }
      })

    return yearOptionsRange
  }, [])

  const filterOptionsMap = useMemo(() => {
    const options = [
      {
        label: translate.default_filter_options.all,
        value: 'all',
      },
      ...yearFilterOptions,
    ]
    return options
  }, [translate.default_filter_options.all, yearFilterOptions])

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: filterValue } = e.target

    if (filterValue === 'all') {
      setFilteredPublications(scientificPublications)
      return
    }

    const filteredData = scientificPublications.filter(
      (publication) => publication.year === filterValue
    )
    setFilteredPublications(filteredData)
  }

  useEffect(() => {
    setLang(locale === 'en' ? 'en' : 'ptBR')
  }, [locale])

  useEffect(() => {
    setFilteredPublications(scientificPublications)
  }, [lang])

  return (
    <Main
      translate={translate}
      publications={filteredPublications}
      filterOptions={filterOptionsMap}
      onChangeFilter={handleChangeFilter}
    />
  )
}

export default PublicationsList
