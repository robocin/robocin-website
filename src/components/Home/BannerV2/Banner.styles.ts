import styled from 'styled-components'
import Image from 'next/image'

export const SectionContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const TextContainer = styled.div`
  width: 100vw;
  padding: 10vw;
  position: absolute;
  text-align: center;
  margin: auto;
  padding: auto;
  color: white;
  text-shadow: 5px 5px 4px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const BannerImg = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Heading = styled.h1`
  font-size: 8rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`

export const Paragraph = styled.p`
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
