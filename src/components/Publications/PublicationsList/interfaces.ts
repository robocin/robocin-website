interface Publication {
  title: string
  description: string
  image?: any
  url: string
  year: string
}

interface FilterOption {
  label: string
  value: string
}

interface Translate {
  default_filter_options: {
    all: string
    recent: string
  }
  header: {
    description: string
    title: string
  }
  publication_card: {
    url_label: string
  }
  filter_results: {
    fallback: string
  }
}

export interface PublicationsListDefaultProps {
  translate: Translate
  publications: Publication[]
}

export interface PublicationsListProps extends PublicationsListDefaultProps {
  filterOptions: FilterOption[]
  onChangeFilter?: React.ChangeEventHandler<HTMLSelectElement>
}
