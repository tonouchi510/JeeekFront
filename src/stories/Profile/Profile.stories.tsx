import React from 'react'
import { storiesOf } from '@storybook/react'
import Profile from '../../components/Profile'
import { AuthUserState } from '../../reducers/auth'
import { CareerState } from '../../reducers/career'
import { FollowState } from '../../reducers/follows'

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

export const userData: AuthUserState = {
  uid: '4sra3r4zibfrzp4i',
  name: 'かず',
  email: 'kazuhiro.1247@gmail.com',
  photoUrl: 'http://ドラマシリコンバレー.com/content/images/siliconvalley/richard.jpg',
  phoneNumber: '09091879023',
  emailVerified: true,
  startedAt: '2019/12/1',
  selfIntroduction: '俺が世界を救う',
}

export const followsData: FollowState = {
  followings: [
    {
      uid: 'akkynv4v3v8d5evx',
      name: 'ビルゲイツ',
      photoUrl: 'bill.png',
    },
  ],
  followers: [
    {
      uid: 'i4ac4evjvhc7cv5x',
      name: 'tono',
      photoUrl: 'tono.png',
    },
  ],
}

storiesOf('Profile', module).add('Profile', () => (
  <Profile user={userData} follows={followsData} career={careerData} />
))
