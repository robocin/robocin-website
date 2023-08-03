import React from 'react'
import { useRouter } from 'next/router'

import useTranslation from '@/hooks/useTranslation'

import Main from './Navbar'

const Navbar = () => {
  const router = useRouter()
  const { locale } = router

  const t = useTranslation()

  const navOptions = [
    {
      label: t.navbar.options.home,
      link: '/',
    },
    {
      label: t.navbar.options.categories,
      link: '/categories',
    },
    {
      label: t.navbar.options.team,
      link: '/team',
    },
    {
      label: t.navbar.options.papers,
      link: '/papers',
    },
  ]

  const languages = [
    {
      label: 'EN',
      value: 'en',
    },
    {
      label: 'PT',
      value: 'pt-BR',
    },
  ]

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value
    router.push(router.pathname, router.asPath, { locale: selectedLocale })
  }

  return (
    <Main
      router={router}
      locale={locale}
      navOptions={navOptions}
      languages={languages}
      onChangeLanguage={handleChangeLanguage}
    />
  )
}

export default Navbar
