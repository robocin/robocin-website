import styled from 'styled-components'

import styles from '@/styles/styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 125px 0 40px;
  background: #e4e4e4;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1),
    0px 40px 87px 0px rgba(0, 0, 0, 0.1),
    0px 159px 159px 0px rgba(0, 0, 0, 0.09);
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
`

export const Title = styled.h1`
  font-size: ${styles.fontSizes.xl};
  font-weight: ${styles.fontWeights.bold};
  color: ${styles.colors.secondary};
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: ${styles.fontSizes.lg};
  font-weight: ${styles.fontWeights.medium};
  color: ${styles.colors.darkGray};
`
