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
import { Publication } from '@/components/Publications/PublicationsList/interfaces'

type Props = {
  MDXFiles: Array<MDXAttr>,
}

type FrontmatterProps = {
  title: string,
  author: string,
  year: string
}

type MDXAttr = {
  content: string,
  slug: string
  frontmatter: FrontmatterProps
}

const BlogPage: NextPage<Props> = ({ MDXFiles }) => {
  const t = useTranslation()

  let publications: Publication[] = MDXFiles.map(file => {
    return {
      title: file.frontmatter.title,
      author: file.frontmatter.author,
      url: `/blog/${file.slug}`,
      year: file.frontmatter.year
    }
  })

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        <PublicationsList
          translate={t.blog_page.publications_list}
          publications={publications}
        />
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
