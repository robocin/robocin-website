import styled from 'styled-components'
import Image from 'next/image'

import styles from '@/styles/styles'

interface PublicationImageProps {
  src: any
}

export const Container = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  border: 2px solid ${styles.colors.secondary};
  box-shadow: 10px 0 ${styles.colors.secondary};

  background-color: white;

  @media (max-width: 524px) {
    height: fit-content;
    flex-direction: column;
  }
`

export const PublicationImg = styled.div<PublicationImageProps>`
  width: 350px;
  height: 350px;
  flex-shrink: 0;

  background-image: url(${({ src }) => (src.src ? src.src : src)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 24px;

  @media (max-width: 524px) {
    width: 100%;
    height: 250px;
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 36px;
  overflow: hidden;
`

export const Title = styled.h1`
  max-width: 100%;
  font-size: ${styles.fontSizes.lg};
  font-weight: ${styles.fontWeights.bold};
  color: ${styles.colors.primary};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Description = styled.p`
  font-size: ${styles.fontSizes.md};
  font-weight: ${styles.fontWeights.medium};
  color: ${styles.colors.darkGray};

  text-align: justify;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  margin-bottom: auto;
`

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const LinkIcon = styled(Image)`
  width: 32px;
  height: auto;
`

export const LinkLabel = styled(Title)`
  text-transform: uppercase;
  text-decoration: underline;
`
