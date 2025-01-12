import { MDXComponents } from 'mdx/types'

import React from 'react'

import useTranslation from '@/hooks/useTranslation'


import { Header } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import { readFile } from 'node:fs/promises'

import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const components: MDXComponents = {
  em(properties: any) {
    return <i {...properties} />
  }
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid red;
`
const PublicationsPage = async () => {
  const t = useTranslation()
  const data = await readFile('./content/dumb.mdx');

  const value = await compile(data, {
    jsx: true,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
  })

  console.log(value)
  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.blog_page.header} />
        {/*<PublicationsList
          translate={t.publications_page.publications_list}
          publications={mockPublications}
        />*/}
        <MDXProvider components={components}>
          <CenteredDiv>
          </CenteredDiv>
        </MDXProvider>
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export default PublicationsPage
