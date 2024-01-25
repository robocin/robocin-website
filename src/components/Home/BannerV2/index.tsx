import React from 'react'

import { BannerDefaultProps } from './interfaces'
import Main from './Banner'

const Banner = ({ translate }: BannerDefaultProps) => {
  return <Main translate={translate} />
}

export default Banner
