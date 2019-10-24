/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Activity } from '../../../services/models/activities'

const categoryLabel = css`
  width: 5em;
  height: 3em;
  font-size: 100px;
`

const rankLabel = css`
  width: 3em;
  height: 3em;
  font-size: 100px;
`

const smallRightMargin = css`
  margin-right: 1em;
`

const smallTopMargin = css`
  margin-top: 1em;
`

export interface ActivityCardProps {
  activity: Activity
}

// 投稿文が長い想定。
// 長くなるとカードが伸びてダサくなるから投稿文のフィールドの横幅を長くして、
// カードの伸びを極力無くそうとしている。
const ActivityCard: FC<ActivityCardProps> = ({ activity }) => (
  <div className="card" style={{ width: '100%' }}>
    <div className="content">
      <div className="right floated ui label" css={rankLabel}>
        {activity.rank}
      </div>
      <div className="right floated ui label" css={categoryLabel}>
        {activity.category}
      </div>
      <img
        className="left floated ui avatar image"
        src={activity.user.photo_url}
        style={{ width: '2.5em', height: '2.5em' }}
        alt=""
      />
      <a className="header">{activity.user.name}</a>
      <div className="meta">{activity.updatedAt.toDate().toDateString()}</div>
      <div className="description">
        <div className="content">
          <div><b>{activity.content.subject}</b></div>
          <div>{activity.content.comment}</div>
          <div css={smallTopMargin}>
            {activity.tags.map((tag: string) => (
              <div key={tag.toString()} className="ui blue mini label">
                {tag.toString()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="extra content">
      <div className="left floated">
        <i className="reply icon" />
      </div>
      <div className="right floated like">
        <i className="thumbs up outline icon"> </i>20
      </div>
      <div className="right floated star" css={smallRightMargin}>
        <i className="yen sign icon"> </i>10
      </div>
    </div>
  </div>
)

export default ActivityCard
