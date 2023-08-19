import React from 'react'

import { useRouter } from 'next/router'

import useTranslation from '@/hooks/useTranslation'

import { Facebook, Github, Instagram, LinkedIn, Youtube } from './assets'

import Main from './Footer'

const Footer = () => {
  const router = useRouter()
  const { locale } = router

  const t = useTranslation()

  const socialMediaMap = [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/robocinufpe/',
    },
    {
      icon: Github,
      link: 'https://github.com/robocin',
    },
    {
      icon: Facebook,
      link: 'https://www.facebook.com/robocin',
    },
    {
      icon: LinkedIn,
      link: 'https://www.linkedin.com/company/robocin',
    },
    {
      icon: Youtube,
      link: 'https://www.youtube.com/@robocinufpe',
    },
  ]

  return <Main translate={t.footer} socialMediaMap={socialMediaMap} />
}

export default Footer
