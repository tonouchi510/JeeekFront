import React, { FC } from 'react'

export interface PostCardMockProps {
  PostTime?: string | null
  UserName?: string | null
  UserIcon?: string | null
  Category?: string | null
  PostContent?: string | null
  SubContent?: string | null
  Tag?: string | null
  Value?: string | null
}

const PostCard: FC<PostCardMockProps> = ({
  PostTime = '1 minute ago',
  UserName = 'かず',
  UserIcon = '',
  Category = '開発',
  PostContent = 'Jeeek',
  SubContent = 'サービスリリースしました！',
  Tag = 'React',
  Value = 'S',
}) => (
  <div
    style={{ width: 400, height: 170, margin: 10, backgroundColor: '#FFFFFF' }}
    className="ui card"
  >
    <div className="event">
      <div className="content">
        <div
          style={{
            float: 'left',
            position: 'absolute',
            margin: 10,
            width: 50,
            height: 50,
            backgroundColor: '#FFFFFF',
          }}
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
            position: 'absolute',
            top: 5,
            bottom: 5,
            right: 5,
            width: 60,
            margin: 10,
            backgroundColor: '#DDDDDD',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 30, color: '#000000' }}>{Value}</p>
        </div>
      </div>
      <div className="content">
        <div
          style={{
            position: 'relative',
            marginLeft: 70,
            marginTop: 10,
            fontSize: 13,
            textAlign: 'left',
            height: 35,
            backgroundColor: 'Transparent',
          }}
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
          float: 'left',
          width: 10,
          position: 'absolute',
          bottom: 8,
          left: 80,
          backgroundColor: '#FFFFFF',
        }}
      >
        <i
          style={{
            float: 'left',
            width: 10,
            position: 'absolute',
            bottom: 8,
            left: 0,
            backgroundColor: '#FFFFFF',
          }}
          className="reply icon"
        />
      </div>
    </div>
  </div>
)

export default PostCard
