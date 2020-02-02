import React from 'react'
import { storiesOf } from '@storybook/react'
import UserRow from '../../../components/Users/UserRow'
import { UserTiny } from '../../../reducers/follows'

const userData: UserTiny = {
  uid: 'akkynv4v3v8d5evx',
  name: 'ビルゲイツ',
  photoUrl: 'https://weblio.hs.llnwd.net/e7/img/dict/binbi/biuu002.png',
}

const followingData = true
const followerData = true

storiesOf('Users/UserRow', module).add('UserRow', () => (
  <UserRow user={userData} follower={followerData} following={followingData} />
))
