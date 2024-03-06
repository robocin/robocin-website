import styled from 'styled-components'
import styles from '@/styles/styles'

export const Container = styled.div`
  width: 80%;
  min-height: 200px;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  border-radius: 24px;
  border: 2px solid ${styles.colors.secondary};
  box-shadow: 10px 0 ${styles.colors.secondary};

  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    border-left: 2px solid ${styles.colors.secondary};
    height: fit-content;
  }
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Date = styled.p`
  font-size: ${styles.fontSizes.sm};
  font-weight: ${styles.fontWeights.thin};
`

export const Title = styled.p`
  font-size: ${styles.fontSizes.lg};
  font-weight: ${styles.fontWeights.bold};
`

export const Authors = styled.p`
  font-size: ${styles.fontSizes.md};
  margin-top: 20px;
`

export const AnchorText = styled.p`
  font-size: ${styles.fontSizes.xs};
  text-align: right;
  color: ${styles.colors.primary};
`
