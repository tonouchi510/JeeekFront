/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

import ActivityCard from '../ActivityCard'
import { Activity } from '../../../reducers/feed'

const header = css`
  margin-top: 15px;
`

const subHeader = css`
  height: 40px;
  width: 100%;
  text-align: center;
  background-color: #eee;
`

const feedLayout = css`
  height: 480px;
  overflow-y: auto;
`

const uiCard = css`
  padding: 4px;
  line-height: 1;
`
const message = css`
  padding-top: 8px;
`

export interface TrendFeedProps {
  feed: Activity[]
}

const TrendFeed: FC<TrendFeedProps> = ({ feed = [] }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h3 className="ui header">Trend</h3>
    </div>
    <hr />
    <div css={subHeader}>
      <div css={message}>
        <h3>There are trend activities.</h3>
      </div>
    </div>
    <div className="ui feed" css={feedLayout}>
      <div className="cards" css={uiCard}>
        {feed.map((activity: Activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  </div>
)

export default TrendFeed
