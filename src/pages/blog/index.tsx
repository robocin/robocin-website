import React from 'react'

import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

import useTranslation from '@/hooks/useTranslation'

import { Header } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

import { compileMDX } from 'next-mdx-remote/rsc'

import { promises as fs } from 'fs'
import { globby } from 'globby'
import path from 'path'

type Props = {
  MDXFiles: Array<MDXAttr>,
}

type MDXAttr = {
  content: string,
  slug: string
  frontmatter: {
    title: string,
    abstract: string,
  },
}

const BlogPage: NextPage<Props> = ({ MDXFiles }) => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        <ul>
          {MDXFiles.map(file => (
            <li key={`${file.slug}`}>
              <Link href={`/blog/${file.slug}`}>
                {file.slug}
              </Link>
            </li>)
          )}
        </ul>
      </ContentWrap>
      <Footer />
    </PageWrap >
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const parseMdxFile = async (f: string) => {
    const file = await fs.readFile(f, 'utf8')

    const { content, frontmatter } = await compileMDX<{ title: string, abstract: string }>({
      source: file,
      options: { parseFrontmatter: true },
    })

    let slug = path.basename(f, '.mdx')

    return {
      slug: slug,
      content: content.toString(),
      frontmatter: frontmatter,
    }
  }


  const files = await globby(['src/pages/blog/content/*.mdx'])

  let parsedMdxs = await Promise.all(files.map(async file => parseMdxFile(file)))

  return {
    props: {
      MDXFiles: parsedMdxs
    }
  }
}

export default BlogPage;
