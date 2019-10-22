/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Activity } from '../../../services/models/activities'

// 現時点ではあまりemotionのメリットがない（少し見やすいだけ）ので、
// Sprint3で洗練したい感ある
// 基本的に背景色や横幅、縦幅はcss emotionに記載した
// positionなどの位置関係についてはstyleに記述した

const content = css`
  width: 380px;
  background-color: #transparent;
`
const userIconButton = css`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
`
const valueLabel = css`
  width: 60px;
  margin: 5px;
`
const value = css`
  font-size: 30px;
  color: #000000;
`
const userNameButton = css`
  width: 200px;
  font-size: 13px;
  height: 40px;
  background-color: #transparent;
`
const userNameField = css`
  width: 180px;
  font-size: 13px;
  height: 20px;
  background-color: #transparent;
`
const postTime = css`
  width: 180px;
  background-color: #ffffff;
`
// 色が適用されてないからstyleに書いてある
const category = css`
  height: 20px,
  width: 40px;
  background-color: '#ffffff',
`

const postContent = css`
  width: 290px;
  background-color: #ffffff;
`
// 適用されてない↓
const reply = css`
  width: 25px,
  height: 25px,
  background-color: #111111;
`
// 色が適用されてないからstyleに書いてある
const values = css`
  width: 25px;
  height: 25px;
  margin-top: 3px;
  margin-bottom: 3px;
`

export interface ActivityCardProps {
  activity: Activity
}

// 投稿文が長い想定。
// 長くなるとカードが伸びてダサくなるから投稿文のフィールドの横幅を長くして、
// カードの伸びを極力無くそうとしている。
const ActivityCard: FC<ActivityCardProps> = ({ activity }) => (
  <div className="content" css={content}>
    <div
      className="ui card"
      style={{
        position: 'relative',
        width: 365,
        minHeight: 170,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        margin: 1,
      }}
    >
      <div className="event">
        <div
          className="ui icon button"
          style={{
            float: 'left',
            position: 'absolute',
            margin: 10,
          }}
          css={userIconButton}
        >
          <i className="user icon" />
        </div>
        <div
          className="ui label"
          style={{
            float: 'right',
            position: 'relative',
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          css={valueLabel}
        >
          <p css={value}>{activity.rank}</p>
        </div>
        <div className="content">
          <div
            className="ui button"
            style={{
              position: 'relative',
              marginLeft: 60,
              marginTop: 10,
              backgroundColor: 'Transparent',
            }}
            css={userNameButton}
          >
            <div
              className="description"
              style={{
                position: 'absolute',
                left: 1,
                float: 'left',
                textAlign: 'left',
              }}
              css={userNameField}
            >
              {activity.user.name}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="meta" style={{ marginLeft: 60 }} css={postTime}>
            {activity.updatedAt.toDate().toDateString()}
          </div>
        </div>
        <div className="content">{activity.user.photo_url}</div>
        <div className="content">
          <div
            className="ui left floated label"
            style={{
              float: 'left',
              marginLeft: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
            }}
            css={category}
          >
            {activity.category}
          </div>
        </div>
        <div className="content">
          <div className="description" style={{ marginLeft: 60, marginTop: 5 }} css={postContent}>
            {activity.content.subject}
          </div>
          <div className="description" style={{ marginLeft: 60, marginTop: 5 }} css={postContent}>
            {activity.content.comment}
          </div>
        </div>
        <div className="content">
          <div className="label" style={{ marginLeft: 60, marginTop: 5 }} css={postContent}>
            {activity.tags.toString()}
          </div>
        </div>
        <div
          className="ui icon button"
          style={{
            position: 'relative',
            float: 'left',
            width: 25,
            height: 25,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
          css={reply}
        >
          <i className="reply icon" />
        </div>
        <div
          className="content"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div
            className="ui icon button"
            style={{
              position: 'relative',
              left: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
            }}
            css={values}
          >
            <i className="thumbs up outline icon"> </i>
          </div>
          <div
            className="ui circular label"
            style={{
              position: 'relative',
              left: 65,
              backgroundColor: '#FFFFFF',
            }}
            css={values}
          >
            2
          </div>
          <div
            className="ui icon button"
            style={{
              position: 'relative',
              left: 70,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
            }}
            css={values}
          >
            <i className="yen sign icon"> </i>
          </div>
          <div
            className="ui circular label"
            style={{
              position: 'relative',
              left: 75,
              backgroundColor: '#FFFFFF',
            }}
            css={values}
          >
            10
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ActivityCard
