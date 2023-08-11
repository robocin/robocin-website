import React from 'react'

import {
  CodeBlock,
  HappyRobot,
  Paper,
  ResearchLaptop,
  Star,
  Trophy,
} from '../assets'

const typeImageMap = {
  development: {
    leftImage: CodeBlock,
    rightImage: HappyRobot,
  },
  research: {
    leftImage: Paper,
    rightImage: ResearchLaptop,
  },
  competitions: {
    leftImage: Star,
    rightImage: Trophy,
  },
}

export default typeImageMap
