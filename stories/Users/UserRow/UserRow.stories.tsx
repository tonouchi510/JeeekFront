import React from 'react'
import UserRow from '../../../src/components/Users/UserRow'
import { UserTiny } from '../../../src/reducers/follows'

export default {
  title: 'Users/UserRow',
  component: UserRow,
  excludeStories: /.*Data$/,
};

const userData: UserTiny = {
  uid: 'akkynv4v3v8d5evx',
  name:'ビルゲイツ',
  photoUrl: 'https://weblio.hs.llnwd.net/e7/img/dict/binbi/biuu002.png',
}

const followingData: boolean = true
const followerData: boolean = true

export const userRowStory = () => <UserRow user={userData} following={followingData} follower={followerData} />

userRowStory.story = {
  name: 'UserRow'
}
