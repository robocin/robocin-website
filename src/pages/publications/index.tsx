import React from 'react'

import useTranslation from '@/hooks/useTranslation'

import { Header, TDPSection, PublicationsList } from '@/components/Publications'
import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

const PublicationsPage = () => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <Header translate={t.publications_page.header} />
        <TDPSection translate={t.publications_page.team_description_papers} />
        <PublicationsList
          translate={t.publications_page.publications_list}
        />
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export default PublicationsPage
