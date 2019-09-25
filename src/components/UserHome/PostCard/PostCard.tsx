import React, { FC } from 'react'

export interface PostCardMockProps {
  PostTime?: string | null
  UserName?: string | null
  UserIcon?: string | null
  Category?: string | null
  PostContent?: string | null
  SubContent?: string | null
  Tag?: string | null
  Rate?: string | null
}

const PostCard: FC<PostCardMockProps> = ({
  PostTime = '1 minute ago',
  UserName = 'かず',
  UserIcon = '',
  Category = '開発',
  PostContent = '『Jeeek』リリース',
  SubContent = 'リリースしたぞおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお',
  Tag = 'React',
  Rate = 'S',
}) => (
  <div
    style={{ width: 1200, height: 250, margin: 10, backgroundColor: '#FFFFFF' }}
    className="ui card"
  >
    <div className="event">
      <div className="content">
        <div
          style={{ margin: 10, float: 'left', width: 50, height: 50, backgroundColor: '#FFFFFF' }}
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
        <div className="meta" style={{ marginLeft: 80, backgroundColor: '#FFFFFF' }}>
          {PostTime}
        </div>
      </div>
      <div className="content">{UserIcon}</div>
      <div className="content">
        <div
          className="ui left floated label"
          style={{ float: 'left', marginLeft: 10, marginTop: 5, backgroundColor: '#FFFFFF' }}
        >
          {Category}
        </div>
      </div>
      <div className="content">
        <div
          style={{ marginLeft: 80, marginTop: 5, width: 250, backgroundColor: '#FFFFFF' }}
          className="description"
        >
          {PostContent}
        </div>
        <div
          style={{ marginLeft: 80, marginTop: 5, width: 250, backgroundColor: '#FFFFFF' }}
          className="description"
        >
          {SubContent}
        </div>
      </div>
      <div className="content">
        <div style={{ marginLeft: 80, width: 300, backgroundColor: '#FFFFFF' }} className="label">
          {Tag}
        </div>
      </div>
      <div
        className="ui icon button"
        style={{
          margin: 8,
          float: 'left',
          width: 10,
          position: 'relative',
          bottom: 5,
          left: 5,
          backgroundColor: '#FFFFFF',
        }}
      >
        <i
          style={{
            margin: 8,
            width: 10,
            backgroundColor: '#FFFFFF',
          }}
          className="reply icon"
        />
      </div>
    </div>
  </div>
)

export default PostCard
