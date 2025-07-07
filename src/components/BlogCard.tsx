import Link from 'next/link'
import styled from 'styled-components'

type BlogCardProps = {
  title: string
  abstract: string
  slug: string
  date: string
}

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  flex: 0 0 320px;
  width: 320px;

  @media (max-width: 1024px) {
    flex: 0 0 45%;
    width: 45%;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
  }
`

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`

const Abstract = styled.p`
  color: #555;
  margin-bottom: 1rem;
`

const DateText = styled.span`
  display: block;
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`

export default function BlogCard({
  title,
  abstract,
  slug,
  date,
}: BlogCardProps) {
  console.log('BlogCard rendered:', title, slug, date)
  return (
    <Card>
      <Link href={`/blog/${slug}`}>
        <Title>{title}</Title>
      </Link>
      <DateText>{date}</DateText>
      <Abstract>{abstract}</Abstract>
      <Link href={`/blog/${slug}`}>Read more →</Link>
    </Card>
  )
}
