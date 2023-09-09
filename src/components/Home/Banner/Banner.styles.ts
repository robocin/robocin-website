import styled from 'styled-components'
import Image from 'next/image'
import Slider from 'react-slick'

import styles from '@/styles/styles'

import { RoboCup2023 } from '@/assets'
import BanerImage from './assets/banner-img.jpg'

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  min-height: fit-content !important;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 84px;

  background-color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${RoboCup2023.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  @media (max-width: 912px) {
    height: 60vh;
  }
`

export const AchievementBar = styled.div`
  width: 100%;
  min-height: 100px;
  height: fit-content;
  background-color: #e8ffec;
  background-color: ${styles.colors.secondary};
  color: ${styles.colors.white};
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const BannerSlider = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerImage = styled(Image)`
  width: 100%;
  height: 92vh;
  object-fit: cover;
  object-position: center;
`

export const TextContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NewsContainer = styled(TextContainer)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Header = styled.h3`
  width: fit-content;
  max-width: 60vw;
  font-size: calc(${styles.fontSizes.xl} * 1.75);
  font-weight: ${styles.fontWeights.extrabold};
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
  text-align: center;
  color: ${styles.colors.white};
  margin: 8px auto 8px auto;

  @media (max-width: 1200px) {
    font-size: calc(${styles.fontSizes.xl} * 1.5);
    max-width: 80vw;
  }

  @media (max-width: 912px) {
    font-size: calc(${styles.fontSizes.xl} * 1.25);
    max-width: 80vw;
  }
`

export const HeaderComplement = styled.p`
  width: fit-content;
  max-width: 50vw;
  font-size: ${styles.fontSizes.md};
  font-weight: ${styles.fontWeights.bold};
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
  text-align: center;
  color: white;
  margin: 0 auto 0 auto;

  @media (max-width: 912px) {
    max-width: 80vw;
  }
`

export const BannerHeader = styled(Header)`
  max-width: 80%;
  color: inherit;
  font-size: ${styles.fontSizes.xl};
  text-shadow: none;
`

export const BannerHeaderComplement = styled(HeaderComplement)`
  max-width: 75%;
  color: inherit;
  font-size: ${styles.fontSizes.sm};
  text-shadow: none;
`

export const MediaRow = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: auto;
`

export const MediaLogo = styled(Image)`
  width: 60px;
  height: 60px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
`
