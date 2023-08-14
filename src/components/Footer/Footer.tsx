import React from 'react'
import Image from 'next/image'

import { LogoWithLabelBright } from '@/assets'
import { Facebook, Github, Instagram, LinkedIn, Youtube } from './assets'

import * as S from './Footer.styles'

const Footer = () => {
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

  return (
    <S.Container>
      <S.Content>
        <h3>Nosso contato</h3>
        <p>robocin@cin.ufpe.br</p>
        <S.SocialMediaWrapper>
          {socialMediaMap.map((socialMedia, index) => (
            <a
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <S.SocialMediaIcon src={socialMedia.icon} alt="social media" />
            </a>
          ))}
        </S.SocialMediaWrapper>
      </S.Content>
      <S.Logo src={LogoWithLabelBright} alt="Logo" priority />
      <S.Content align="right">
        <h3>Onde estamos</h3>
        <p>
          Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE,
          50740-560
        </p>
      </S.Content>
    </S.Container>
  )
}

export default Footer
