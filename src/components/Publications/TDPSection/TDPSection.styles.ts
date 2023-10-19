import styled from 'styled-components'
import Image from 'next/image'

import styles from '@/styles/styles'

export const Container = styled.section`
  width: 80%;
  padding: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: auto;

  @media (max-width: 1366px) {
    flex-direction: column;
  }

  @media (max-width: 912px) {
    width: 100%;
    padding: 30px;
    gap: 40px;
  }
`

export const Picture = styled(Image)`
  width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
  background-color: gray;

  @media (max-width: 1366px) {
    width: 80%;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  text-align: justify;
  text-align-last: right;

  @media (max-width: 1366px) {
    align-items: center;
    text-align: center;
    text-align-last: auto;
  }
`

export const Title = styled.h1`
  font-size: ${styles.fontSizes.xl};
  font-weight: ${styles.fontWeights.extrabold};
  color: ${styles.colors.primary};
`

export const Description = styled.p`
  font-size: ${styles.fontSizes.lg};
  font-weight: ${styles.fontWeights.medium};
  color: ${styles.colors.darkGray};
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-size: ${styles.fontSizes.md};
  border: none;
  color: white;
  background: linear-gradient(
      331deg,
      rgba(48, 48, 48, 0.6) 35.74%,
      rgba(0, 0, 0, 0) 100%
    ),
    #469c57;
  padding: 8px 32px;
  border-radius: 24px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 414px) {
    font-size: ${styles.fontSizes.lg};
    padding: 12px 48px;
  }
`

export const Icon = styled(Image)`
  height: 100%;
  width: auto;
`

export const Divider = styled.hr`
  width: 80%;
  margin: auto;
`
