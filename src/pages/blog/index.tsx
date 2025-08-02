import React from 'react'

import { NextPage, GetStaticProps } from 'next'

import useTranslation from '@/hooks/useTranslation'

import { Header, PublicationsList } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

import { compileMDX } from 'next-mdx-remote/rsc'

import { promises as fs } from 'fs'
import { globby } from 'globby'
import path from 'path'

import BlogCard from '@/components/Blog/BlogCard'

import styled from 'styled-components'

type Props = {
  MDXFiles: Array<MDXAttr>
}

type FrontmatterProps = {
  title: string
  author: string
  year: string
}

type MDXAttr = {
  content: string
  slug: string
  frontmatter: {
    title: string
    abstract: string
    date: string
  }
}

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 2rem;
`

const BlogPage: NextPage<Props> = ({ MDXFiles }) => {
  const t = useTranslation()

  const sortedFiles = [...MDXFiles]
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .reverse()

  const blogCards = sortedFiles.map((file) => {
    return (
      <BlogCard
        key={file.slug}
        title={file.frontmatter.title}
        abstract={file.frontmatter.abstract}
        date={file.frontmatter.date}
        slug={file.slug}
      />
    )
  })

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        <CardsGrid>{blogCards}</CardsGrid>
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const parseMdxFile = async (f: string) => {
    const file = await fs.readFile(f, 'utf8')

    const { content, frontmatter } = await compileMDX<{
      title: string
      abstract: string
      date: string // ISO date string YYYY-MM-DD
    }>({
      source: file,
      options: { parseFrontmatter: true },
    })
    const slug = path.basename(f, '.mdx')

    return {
      slug: slug,
      content: content.toString(),
      frontmatter: frontmatter,
    }
  }

  const files = await globby(['src/pages/blog/content/*.mdx'])

  const parsedMdxs = await Promise.all(
    files.map(async (file) => parseMdxFile(file))
  )

  return {
    props: {
      MDXFiles: parsedMdxs,
    },
  }
}

export default BlogPage
