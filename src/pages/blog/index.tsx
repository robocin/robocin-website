import { MDXComponents } from 'mdx/types'

import React from 'react'

import useTranslation from '@/hooks/useTranslation'


import { Header } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

import { MDXProvider } from '@mdx-js/react'
import Post from './content/dumb.mdx'
import styled from 'styled-components'

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
const PublicationsPage = () => {
  const t = useTranslation()

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
            <Post />
          </CenteredDiv>
        </MDXProvider>
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export default PublicationsPage
