import React from 'react'

import FolhaPe from './assets/folha-pe-logo.png'
import Tilt from './assets/uol-tilt-logo.jpg'
import Cin from './assets/cin-logo-red.png'
import Terra from './assets/terra-logo.jpg'

import { BannerDefaultProps } from './interfaces'

import Main from './Banner'

const Banner = ({ translate }: BannerDefaultProps) => {
  const NewsMap = [
    {
      id: 'key_folha_pe',
      link: 'https://www.folhape.com.br/colunistas/tecnologia-e-games/equipe-da-ufpe-conquista-o-bicampeonato-da-maior-competicao-de-robotica-do-mundo/38613/',
      src: FolhaPe,
      alt: 'Folha PE logo',
    },
    {
      id: 'key_tilt',
      link: 'https://www.uol.com.br/tilt/noticias/redacao/2022/07/27/robocin-equipe-de-pernambuco-vence-copa-do-mundo-dos-robos.htm',
      src: Tilt,
      alt: 'Tilt logo',
    },
    {
      id: 'key_terra',
      link: 'https://portaldeprefeitura.com.br/2023/07/17/equipe-robocin-da-ufpe-e-bicampea-da-maior-competicao-de-robotica-do-mundo/',
      src: Terra,
      alt: 'Terra logo',
    },
    {
      id: 'key_cin',
      link: 'https://portal.cin.ufpe.br/2023/07/10/robocin-e-bicampeao-mundial-de-ssl-na-robocup-2023/',
      src: Cin,
      alt: 'CIn logo',
    },
  ]

  const settings = {
    dots: false,
    inifite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  }

  return <Main translate={translate} sliderSettings={settings} news={NewsMap} />
}

export default Banner
