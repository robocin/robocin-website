import React from 'react'

import typeImageMap from './utils/typeImageMap'

import { InfoPopupProps } from './interfaces'

import Main from './InfoPopup'

const InfoPopup = ({
  title,
  description,
  type = 'none',
  onClose,
}: InfoPopupProps) => {
  const backgroundImages = typeImageMap[type as keyof typeof typeImageMap]

  return (
    <Main
      title={title}
      description={description}
      backgroundImages={backgroundImages}
      onClose={onClose}
    />
  )
}

export default InfoPopup
