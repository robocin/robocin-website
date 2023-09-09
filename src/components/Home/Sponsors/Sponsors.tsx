import React from 'react'

import * as Brand from './assets'
import { Mail } from './assets'

import { SponsorsProps } from './interfaces'

import * as S from './Sponsors.styles'

const Sponsors = ({ translate }: SponsorsProps) => {
  return (
    <S.Container>
      <S.SectionTitle>{translate?.title}</S.SectionTitle>
      <S.Column>
        <S.Row>
          <S.Brand src={Brand.CIn} alt="CIn logo" />
          <S.Brand
            src={Brand.Cesar}
            alt="Cesar logo"
            style={{ width: '12%' }}
          />
          <S.Brand src={Brand.Embraer} alt="Embraer logo" />
          <S.Brand src={Brand.Hsbs} alt="HSBS logo" />
          <S.Brand src={Brand.Incognia} alt="Incognia logo" />
          <S.Brand src={Brand.Ines} alt="INES logo" />
          <S.Brand src={Brand.Microsoft} alt="Microsoft logo" />
          <S.Brand src={Brand.Moura} alt="Moura logo" />
          {/* <S.Brand
            src={Brand.Itemm}
            alt="Embraer logo"
            style={{ width: '12%' }}
          /> */}
          <S.Brand
            src={Brand.Neurotech}
            alt="Neurotech logo"
            style={{ width: '22%' }}
          />
        </S.Row>
      </S.Column>
      <S.Column>
        <S.CallToAction>{translate?.call_to_action}</S.CallToAction>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=robocin@cin.ufpe.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.Mail>
            <S.MailIcon src={Mail} alt="Mail Icon" />
            robocin@cin.ufpe.br
          </S.Mail>
        </a>
      </S.Column>
    </S.Container>
  )
}

export default Sponsors
