/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

import ActivityCard from '../ActivityCard'
import { Activity } from '../../../reducers/feed'

const header = css`
  margin-top: 15px;
`

const subHeader = css`
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
`

const searchBar = css`
  width: 100%;
  height: 30px;
  margin-top: 5px;
`

const feedLayout = css`
  height: 530px;
  overflow-y: auto;
`

const uiCard = css`
  padding: 4px;
  line-height: 1;
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
    <div className="ui search" css={subHeader}>
      <div className="ui icon input" css={searchBar}>
        <input className="prompt" type="text" placeholder="Common passwords..." />
        <i className="search icon"> </i>
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
