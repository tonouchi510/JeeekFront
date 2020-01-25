import React from 'react'
import About from '../../../src/components/Profile/About'
import { CareerState } from '../../../src/reducers/career'

export default {
  title: 'Profile/About',
  component: About,
  excludeStories: /.*Data$/,
}

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

export const about = () => <About uid={uidData} career={careerData} isEditMode={isEditModeData} />

about.story = {
  name: 'about',
}

// editStart?: (param?: string) => void
