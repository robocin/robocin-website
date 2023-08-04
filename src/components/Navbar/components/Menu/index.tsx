import React from 'react'

import { NavbarProps } from '../../interfaces'

import Main from './Menu'

const Menu = ({
  navOptions,
  languages,
  router,
  locale,
  onChangeLanguage,
}: Omit<NavbarProps, 'isMenuOpen' | 'onPressMenu'>) => {
  return (
    <Main
      navOptions={navOptions}
      languages={languages}
      router={router}
      locale={locale}
      onChangeLanguage={onChangeLanguage}
    />
  )
}

export default Menu
