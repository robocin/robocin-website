interface Achievement {
  title: string
  description: string
}

interface Headline {
  title: string
  complement: string
}

interface Translate {
  headline: Headline
  achievements: Achievement[]
}

interface News {
  id: string
  link: string
  src: any
  alt: string
}

export interface BannerDefaultProps {
  translate: Translate
}

export interface BannerProps {
  translate: Translate
  sliderSettings: any
  news: News[]
}
