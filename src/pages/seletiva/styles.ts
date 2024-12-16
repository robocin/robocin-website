import styled from 'styled-components'
import Image from 'next/image'

import styles from '@/styles/styles'
import Link from 'next/link'

export const Container = styled.div`
  padding: 150px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BannerImage = styled(Image)`
  width: 100%;
  height: 700px;
  object-fit: cover;
  display: block;
`

export const ApplicationLink = styled(Link)`
  padding: 20px 40px;
  border-radius: 36px;
  font-size: 22px;
  border: none;
  margin: 40px 0 20px;
  color: ${styles.colors.white};
  background-color: ${styles.colors.primary};
  cursor: pointer;
`

export const FaqContainer = styled.section`
  max-width: 600px;
  font-size: ${styles.fontSizes.md};

  ul {
    list-style: none;
  }

  li {
    margin: 16px 0;
  }
`
