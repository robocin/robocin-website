interface BackgroundImages {
  leftImage?: any
  rightImage?: any
}

export interface InfoPopupProps {
  title: string
  description: string
  type?: 'development' | 'research' | 'competitions' | 'none'
  backgroundImages?: BackgroundImages
  onClose: () => void
}
