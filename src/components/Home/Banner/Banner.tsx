import React from 'react'
import Image from 'next/image'

import Trophy from './assets/trophy-with-wreath.png'

import { BannerProps } from './interfaces'

import * as S from './Banner.styles'

const Banner = ({ translate, sliderSettings, news }: BannerProps) => {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <S.Header>{translate.headline.title}</S.Header>
          <S.HeaderComplement>
            {translate.headline.complement}
          </S.HeaderComplement>
          <S.MediaRow>
            {news.map((newsArticle) => (
              <a
                key={newsArticle.id}
                href={newsArticle.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.MediaLogo src={newsArticle.src} alt={newsArticle.alt} />
              </a>
            ))}
          </S.MediaRow>
        </S.TextContainer>
      </S.Container>
      <S.AchievementBar>
        <S.BannerSlider {...sliderSettings}>
          {translate.achievements.map((achievement, index) => (
            <div key={`key_${index}`}>
              <S.TextContainer>
                <Image
                  src={Trophy}
                  alt="Trophy icon"
                  style={{ width: '84px', height: 'auto' }}
                />
                <S.BannerHeader>{achievement.title}</S.BannerHeader>
                <S.BannerHeaderComplement>
                  {achievement.description}
                </S.BannerHeaderComplement>
              </S.TextContainer>
            </div>
          ))}
        </S.BannerSlider>
      </S.AchievementBar>
    </>
  )
}

export default Banner
