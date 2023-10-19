interface Translate {
  url_label: string
}

export interface PublicationCardDefaultProps {
  translate: Translate
  title: string
  description: string
  image?: any
  url: string
}
