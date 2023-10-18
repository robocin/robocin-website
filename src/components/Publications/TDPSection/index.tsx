import React from 'react'

import Main from './TDPSection'

import { TDPSectionDefaultProps } from './interfaces'

const TDPSection = ({ translate }: TDPSectionDefaultProps) => {
  const tdpsUrl =
    'https://drive.google.com/drive/folders/1v6uuGsmwW8GQTbqn3OwWAm1-Fh2R1XbC?usp=sharing'

  return <Main translate={translate} tdpsUrl={tdpsUrl} />
}

export default TDPSection
