import React from 'react'
import PostScreen from '../../../src/components/Timeline/PostScreen'
import { AuthUserState } from '../../../src/reducers/auth'

export default {
  title: 'Timeline/PostScreen',
  component: PostScreen,
  excludeStories: /.*Data$/,
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

export const postScreenStory = () => <PostScreen user={userData} />

postScreenStory.story = {
  name: 'PostScreen',
}
