import React from 'react'
import Image from 'next/image'

import { LogoWithLabel } from '@/assets'

import * as S from './Navbar.styles'

import { NavbarProps } from './interfaces'

const Navbar = ({
  router,
  locale,
  navOptions,
  languages,
  onChangeLanguage,
}: NavbarProps) => (
  <S.Container>
    <Image src={LogoWithLabel} alt="logo" />
    <S.NavOptions>
      {navOptions.map((option, index) => (
        <S.StyledLink
          key={index + option.link}
          href={option.link}
          active={router.asPath === option.link ? 'true' : 'false'}
        >
          {option.label}
        </S.StyledLink>
      ))}
      <S.StyledSelect
        name="Idioma"
        onChange={onChangeLanguage}
        defaultValue={locale}
      >
        {languages.map((language, index) => (
          <option
            key={index + language.label}
            value={language.value}
            label={language.label}
          />
        ))}
      </S.StyledSelect>
    </S.NavOptions>
  </S.Container>
)

export default Navbar
