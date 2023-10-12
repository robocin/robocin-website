import React from 'react'

import useTranslation from '@/hooks/useTranslation'

import mockPublications from '@/components/Publications/PublicationsList/utils/mockData'

import { Header, PublicationsList } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../pages.styles'

const PublicationsPage = () => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.publications_page.header} />
        <PublicationsList
          translate={t.publications_page.publications_list}
          publications={mockPublications}
        />
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export default PublicationsPage
