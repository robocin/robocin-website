import React from 'react'

import { CompetitionsIcon, PapersIcon, MembersIcon } from './assets'

import { AboutUsProps } from './interfaces'

import Main from './AboutUs'

const AboutUs = ({ translate }: AboutUsProps) => {
  const features = [
    {
      icon: CompetitionsIcon,
      label: translate?.features.awards,
      quantity: 32,
      id: 'awards',
    },
    {
      icon: PapersIcon,
      label: translate?.features.papers,
      quantity: 28,
      id: 'papers',
    },
    {
      icon: MembersIcon,
      label: translate?.features.members,
      quantity: 89,
      id: 'members',
    },
  ]

  return <Main translate={translate} features={features} />
}

export default AboutUs
