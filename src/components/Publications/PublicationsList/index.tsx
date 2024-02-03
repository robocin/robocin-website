import React, { useState, useMemo, useEffect } from 'react'
import publications from '@/data/publications'

import Main from './PublicationsList'

import { PublicationsListDefaultProps } from './interfaces'
import { useRouter } from 'next/router'

const PublicationsList = ({
  translate,
}: // publications,
PublicationsListDefaultProps) => {
  const router = useRouter()
  const { locale } = router
  const language = locale === 'en' ? 'en' : 'ptBR'

  const [lang, setLang] = useState(language)
  const [filteredPublications, setFilteredPublications] = useState(
    publications[lang]
  )

  // const currentDate = new Date()
  // const currentYear = currentDate.getFullYear()
  const currentYear = 2020

  const yearFilterOptions = useMemo(() => {
    const startYear = 2016
    const yearOptionsRange = Array(currentYear - startYear + 1)
      .fill(undefined)
      .map((_, index) => {
        const year = currentYear - index
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
      setFilteredPublications(publications[lang])
      return
    }

    const filteredData = publications[lang].filter(
      (publication) => publication.year === filterValue
    )
    setFilteredPublications(filteredData)
  }

  useEffect(() => {
    setLang(locale === 'en' ? 'en' : 'ptBR')
  }, [locale])

  useEffect(() => {
    setFilteredPublications(publications[lang])
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
