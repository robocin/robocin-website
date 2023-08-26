import React from 'react'

import RobotArmVector from './assets/robot-arm.svg'
import CircuitryVector from './assets/circuitry.svg'

import * as S from './Activities.styles'

import { ActivitiesProps } from './interfaces'

const Actitivies = ({
  translate,
  activities,
  onClickActivity,
}: ActivitiesProps) => {
  return (
    <S.Container aria-label="Activities">
      {activities &&
        activities?.map((activity, index) => (
          <S.ActivityCard key={index}>
            <S.ActivityImage src={activity.image} alt="Activity Icon" />
            <S.Title>{activity.title}</S.Title>
            <S.Description>{activity.description}</S.Description>
            <S.Button onClick={() => onClickActivity(activity.id)}>
              {translate?.activity_card_button}
            </S.Button>
          </S.ActivityCard>
        ))}
      <S.BackgroundImage
        src={CircuitryVector}
        alt="Circuitry Background Image"
        position="left"
      />
      <S.BackgroundImage
        src={RobotArmVector}
        alt="Robot Arm Background Image"
        position="right"
      />
    </S.Container>
  )
}

export default Actitivies
