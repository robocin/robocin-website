import styled from 'styled-components'

import styles from '@/styles/styles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  padding: 60px 14%;

  @media (max-width: 912px) {
    padding: 60px 7%;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Title = styled.h1`
  font-size: ${styles.fontSizes.xl};
  font-weight: ${styles.fontWeights.extrabold};
  color: ${styles.colors.secondary};
  text-align: center;
  text-transform: uppercase;
`

export const RegularText = styled.p`
  font-size: ${styles.fontSizes.lg};
  font-weight: ${styles.fontWeights.medium};
  color: ${styles.colors.darkGray};
  text-align: center;
`

export const Select = styled.select`
  width: 80%;
  text-align-last: left;
  background: linear-gradient(
      331deg,
      rgba(48, 48, 48, 0.6) 35.74%,
      rgba(0, 0, 0, 0) 100%
    ),
    #469c57;
  outline: none;
  font-size: ${styles.fontSizes.md};
  font-weight: ${styles.fontWeights.medium};
  text-decoration: none;
  color: white;
  padding: 8px;
  border-radius: 24px;
  cursor: pointer;

  & option {
    background-color: white;
    color: ${styles.colors.primary};
  }
`
