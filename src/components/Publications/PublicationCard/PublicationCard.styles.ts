import styled from 'styled-components'
import Image from 'next/image'

import styles from '@/styles/styles'

interface PublicationImageProps {
  src: any
}

export const Container = styled.div`
  width: 80%;
  height: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  border: 2px solid ${styles.colors.secondary};
  border-left: none;
  box-shadow: 10px 0 ${styles.colors.secondary};

  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    border-left: 2px solid ${styles.colors.secondary};
    height: fit-content;
  }
`

export const PublicationImg = styled.div<PublicationImageProps>`
  width: 200px;
  height: 200px;
  flex-shrink: 0;

  background-image: url(${({ src }) => (src.src ? src.src : src)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 36px;
  overflow: hidden;
`

export const Title = styled.h1`
  max-width: 100%;
  font-size: ${styles.fontSizes.md};
  font-weight: ${styles.fontWeights.bold};
  color: ${styles.colors.primary};

  flex-shrink: 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Description = styled.p`
  font-size: ${styles.fontSizes.sm};
  font-weight: ${styles.fontWeights.medium};
  color: ${styles.colors.darkGray};

  flex-shrink: 0;

  text-align: justify;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin-bottom: auto;

  overflow: hidden;
  text-overflow: ellipsis;
  flex-wrap: nowrap;
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
  margin-left: 8px;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: underline;
`
