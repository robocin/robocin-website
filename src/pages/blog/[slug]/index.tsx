import React from 'react'

import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import useTranslation from '@/hooks/useTranslation'

import { Header } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../../styles/pages.styles'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { compileMDX } from 'next-mdx-remote/rsc'

import { promises as fs } from 'fs'
import { globby } from 'globby'
import path from 'path'

type Props = {
  slug: string
}

const BlogPage: NextPage<Props> = ({ slug }) => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        <p> {slug} </p>
      </ContentWrap>
      <Footer />
    </PageWrap >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await globby(['src/pages/blog/content/*.mdx'])
  console.log(files)

  const paths = files.map(file => ({
    params: {
      slug: path.basename(file, '.mdx')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  return {
    props: {
      slug: slug
    }
  }
}

export default BlogPage;
