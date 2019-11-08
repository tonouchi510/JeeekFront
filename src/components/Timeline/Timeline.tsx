/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { User } from 'firebase'
import HomeFeed from '../../containers/Timeline/UserFeed'
import TrendFeed from '../../containers/Timeline/TrendFeed'
import PostScreen from './PostScreen'

interface TimelineProps {
  user: User
}

const postScreenBG = css`
  background-color: '#D2E4F4';
`

const Timeline: FC<TimelineProps> = ({ user }) => (
  <div className="ui container">
    <div className="ui grid">
      <div className="five wide column" css={postScreenBG}>
        <PostScreen user={user} />
      </div>
      <div className="five wide column">
        <HomeFeed />
      </div>
      <div className="five wide column">
        <TrendFeed />
      </div>
    </div>
  </div>
)

export default Timeline
