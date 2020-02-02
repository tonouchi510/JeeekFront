import React from 'react'
import { storiesOf } from '@storybook/react'
import About from '../../../components/Profile/About'
import { CareerState } from '../../../reducers/career'

export const uidData = 'ggg'

export const careerData: CareerState = {
  education: [
    {
      period: '2019/3',
      subject: '筑波大学卒',
    },
  ],
  workExperience: [
    {
      period: '2019/4',
      subject: 'dely株式会社',
    },
  ],
  certification: [
    {
      period: '2020/4',
      subject: 'ワロタオブザイヤー',
    },
  ],
}

const isEditModeData = false

storiesOf('Profile/About', module).add('About', () => (
  <About uid={uidData} career={careerData} isEditMode={isEditModeData} />
))
