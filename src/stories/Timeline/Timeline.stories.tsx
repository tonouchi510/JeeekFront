import React, { FC } from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import { AuthUserState } from '../../reducers/auth'
import PostScreen from '../../components/Timeline/PostScreen'
import HomeFeed from '../../components/Timeline/UserFeed'
import TrendFeed from '../../components/Timeline/TrendFeed'
import { userFeedData } from './UserFeed/UserFeed.stories'
import { trendFeedData } from './TrendFeed/TrendFeed.stories'
import { Activity } from '../../reducers/feed'

const userData: AuthUserState = {
  uid: '4sra3r4zibfrzp4i',
  name: 'かず',
  email: 'kazuhiro.1247@gmail.com',
  photoUrl: 'http://ドラマシリコンバレー.com/content/images/siliconvalley/richard.jpg',
  phoneNumber: '09091879023',
  emailVerified: true,
  startedAt: '2019/12/1',
  selfIntroduction: 'フロントエンドエンジニア',
}

interface TimelineStoryProps {
  user: AuthUserState
  userFeed: Activity[]
  trendFeed: Activity[]
}

const Timeline: FC<TimelineStoryProps> = ({ user, userFeed, trendFeed }) => (
  <div className="ui container">
    <div className="ui grid">
      <div className="five wide column">
        <PostScreen user={user} />
      </div>
      <div className="five wide column">
        <HomeFeed feed={userFeed} />
      </div>
      <div className="five wide column">
        <TrendFeed feed={trendFeed} />
      </div>
    </div>
  </div>
)

storiesOf('Timeline', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>)
  .add('Timeline', () => (
    <Timeline user={userData} userFeed={userFeedData} trendFeed={trendFeedData} />
  ))
