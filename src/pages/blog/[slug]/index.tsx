import React from 'react'

import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import useTranslation from '@/hooks/useTranslation'

import { Header } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../../styles/pages.styles'

import { promises as fs } from 'fs'
import { globby } from 'globby'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import styled from 'styled-components'

import matter from 'gray-matter'
// ...existing imports...

import CustomImage from '@/components/Blog'

type Props = {
  slug: string
  mdxSource: MDXRemoteSerializeResult
  frontmatter: {
    title: string
    abstract: string
    date: string
  }
}
const MDXContent = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  line-height: 1.7;
  font-size: 1.1rem;
`

const PostPage: NextPage<Props> = ({ slug, mdxSource }) => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        <MDXContent>
          <MDXRemote {...mdxSource} components={CustomImage} />
        </MDXContent>
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await globby(['src/pages/blog/content/*.mdx'])

  const paths = files.map((file) => ({
    params: {
      slug: path.basename(file, '.mdx'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(
    process.cwd(),
    'src/pages/blog/content',
    `${slug}.mdx`
  )
  const source = await fs.readFile(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  console.log('MDX Source:', data)
  return {
    props: {
      slug,
      mdxSource,
      frontmatter: {
        title: data.title || 'Untitled',
        abstract: data.abstract || '',
        date: (data.date as Date).toISOString() || new Date().toISOString(),
      },
    },
  }
}

export default PostPage
