import React, { FC } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export interface PostCardMockProps {
  PostTime?: string | null
  UserName?: string | null
  UserIcon?: string | null
  Category?: string | null
  PostContent?: string | null
  Tag?: string | null
  Rate?: string | null
}

const PostCard: FC<PostCardMockProps> = ({
  PostTime = '1 minute ago',
  UserName = 'かず',
  UserIcon = '',
  Category = '開発',
  PostContent = '『Jeeek』リリースあああああああああああああああああああああああああああああああああああああ',
  Tag = 'React',
  Rate = 'S',
}) => (
  <div
    style={{ width: 550, height: 220, margin: 10, backgroundColor: '#EEEEEE' }}
    className="ui card"
  >
    <div className="event">
      <div className="content">
        <div
          style={{ margin: 10, float: 'left', width: 50, height: 50 }}
          className="ui icon button"
        >
          <i className="user icon" />
        </div>
      </div>
      <div className="content">
        <div
          className="ui label"
          style={{
            float: 'right',
            width: 130,
            height: 200,
            margin: 10,
            backgroundColor: '#DDDDDD',
          }}
        >
          {Rate}
        </div>
      </div>
      <div className="content">
        <div
          style={{ margin: 10, fontSize: 13, height: 50, backgroundColor: 'Transparent' }}
          className="ui button"
        >
          {UserName}
        </div>
      </div>
      <div className="content">
        <div className="meta" style={{ marginLeft: 80 }}>
          {PostTime}
        </div>
      </div>
      <div className="content">{UserIcon}</div>
      <div className="content">
        <div
          className="ui left floated label"
          style={{ float: 'left', marginLeft: 10, marginTop: 5 }}
        >
          {Category}
        </div>
      </div>
      <div className="content">
        <div
          style={{ marginLeft: 80, marginTop: 5, width: 300, backgroundColor: '#DDDDDD' }}
          className="description"
        >
          {PostContent}
        </div>
      </div>
      <div className="content">
        <div style={{ marginLeft: 80, width: 300, backgroundColor: '#EEEEEE' }} className="label">
          {Tag}
        </div>
      </div>
      <div className="content">
        <div className="ui icon button" style={{ margin: 8, float: 'left' }}>
          <i style={{ margin: 8, width: 10 }} className="reply icon" />
        </div>
      </div>
    </div>
  </div>
)

export default PostCard
