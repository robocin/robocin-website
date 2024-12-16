import styled from 'styled-components'

import Link from 'next/link'
import styles from '@/styles/styles'

export const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: ${styles.colors.primary};
  color: ${styles.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  h1 {
    font-size: 32px;
  }
`

export const ApplicationCTA = styled(Link)`
  padding: 24px 50px;
  border-radius: 36px;
  font-size: 22px;
  border: none;
  color: ${styles.colors.primary};
  background-color: ${styles.colors.white};
  font-weight: ${styles.fontWeights.bold};
  cursor: pointer;
`
