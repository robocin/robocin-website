import React, { useState, useMemo } from 'react'

import Main from './PublicationsList'

import { PublicationsListDefaultProps } from './interfaces'

const PublicationsList = ({
  translate,
  publications,
}: PublicationsListDefaultProps) => {
  const [filteredPublications, setFilteredPublications] = useState(publications)

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

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
  }, [translate.default_filter_options.all])

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: filterValue } = e.target

    if (filterValue === 'all') {
      setFilteredPublications(publications)
      return
    }

    const filteredData = publications.filter(
      (publication) => publication.year === filterValue
    )
    setFilteredPublications(filteredData)
  }

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
