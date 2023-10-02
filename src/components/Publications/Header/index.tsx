import React from 'react'

import Main from './Header'

import { HeaderDefaultProps } from './interface'

const Header = ({ translate }: HeaderDefaultProps) => {
  return <Main translate={translate} />
}

export default Header
