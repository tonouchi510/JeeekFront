/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Activity } from '../../../services/models/activities'
import ActivityCard from '../ActivityCard'

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

const feed = css`
  height: 530px;
  overflow-y: auto;
`

const uiCard = css`
  padding: 4px;
  line-height: 1;
`

export interface TrendFeedProps {
  feeds?: Activity[]
}

const TrendFeed: FC<TrendFeedProps> = ({ feeds = null }) => (
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
    <div className="ui feed" css={feed}>
      <div className="cards" css={uiCard}>
        {feeds.map((activity: Activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  </div>
)

export default TrendFeed
