/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { User } from 'firebase'

const userIconStyle = css`
  width: 70px;
  height: 70px;
`

const normalInputFieldStyle = css`
  width: 250px;
  height: 75px;
`
const contentTextStyle = css`
  font-size: 13px;
  font-weight: bold;
`
const largeInputFieldStyle = css`
  width: 500px;
  height: 110px;
`
const submitButtonStyle = css`
  width: 80px;
  height: 40px;
  background-color: #444444;
`

const CategoryComponent = (
  <div
    className="content"
    style={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginLeft: 50 }}
    css={normalInputFieldStyle}
  >
    <div className="content">
      <div className="content">
        <div
          className="ui label"
          style={{ marginBottom: 2, backgroundColor: 'Transparent' }}
          css={contentTextStyle}
        >
          カテゴリ(*)
        </div>
      </div>
      <select
        className="ui dropdown"
        style={{ width: 178, color: '#666666', fontWeight: 'bold', fontSize: 12 }}
      >
        <option value="">カテゴリ</option>
        <option value="4">学習</option>
        <option value="3">賞等</option>
        <option value="2">記事</option>
        <option value="1">論文</option>
        <option value="0">開発</option>
      </select>
    </div>
  </div>
)

interface UserIconComponentProps {
  user?: User
}

const UserIconComponent: FC<UserIconComponentProps> = ({ user = null }) => (
  <div
    className="content"
    style={{
      float: 'left',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
    }}
    css={userIconStyle}
  >
    <img
      className="ui small circular image"
      // src={user.photoURL} に変える
      src="image/userIcon.png"
      alt="userIcon"
      style={{ width: 70, height: 70 }}
    />
  </div>
)

const TitleIconComponent = (
  <div
    className="content"
    style={{ marginLeft: 50, display: 'flex', alignItems: 'center' }}
    css={normalInputFieldStyle}
  >
    <div className="content">
      <div className="content">
        <div
          className="ui label"
          style={{ marginBottom: 2, backgroundColor: 'Transparent' }}
          css={contentTextStyle}
        >
          タイトル(*)
        </div>
      </div>
      <div className="ui input focus">
        <input type="text" name="title" placeholder="サービス名、本のタイトル、勉強会、" />
      </div>
    </div>
  </div>
)

const CommentComponent = (
  <div className="content" style={{ marginLeft: 50, display: 'flex', alignItems: 'center' }}>
    <div className="content">
      <div className="content">
        <div
          className="ui label"
          style={{ marginBottom: 2, backgroundColor: 'Transparent' }}
          css={contentTextStyle}
        >
          コメント
        </div>
      </div>
      <div className="ui input focus" css={largeInputFieldStyle} style={{ textAlign: 'left' }}>
        <input
          type="text"
          name="comment"
          placeholder="「記事投稿しました！」「賞をとりました！」「7章を読みました！」"
        />
      </div>
    </div>
  </div>
)

const TagComponent = (
  <div
    className="content"
    style={{ marginLeft: 50, display: 'flex', alignItems: 'center' }}
    css={normalInputFieldStyle}
  >
    <div className="content">
      <div className="content">
        <div
          className=" ui label"
          style={{ marginBottom: 2, backgroundColor: 'Transparent' }}
          css={contentTextStyle}
        >
          タグ(*)
        </div>
      </div>
      <div className="ui input focus">
        <input type="text" placeholder="React, 機械学習, GCP, ..." />
      </div>
    </div>
  </div>
)

const UrlComponent = (
  <div className="content" style={{ marginLeft: 50, display: 'flex', alignItems: 'center' }}>
    <div className="content">
      <div className="content">
        <div
          className="ui label"
          style={{ marginBottom: 2, backgroundColor: 'Transparent' }}
          css={contentTextStyle}
        >
          URL
        </div>
      </div>
      <div className="ui labeled input">
        {' '}
        <div className="ui label">http://</div>
        <input type="text" name="comment" placeholder="Jeeek.com" />
      </div>
    </div>
  </div>
)

const Form = styled.div({
  marginLeft: 80,
  backgroundColor: '#FFFFFF',
})

interface PostScreenprops {
  user?: User
}

const PostScreen: FC<PostScreenprops> = ({ user = null }) => (
  <div className="ui grid">
    <div className="two wide column" />
    <div
      className="twelve wide column"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="ui card" style={{ position: 'relative', top: 150, width: 700, height: 550 }}>
        <div className="content">
          <div className="content" style={{ textAlign: 'right' }}>
            <div className="ui icon button" style={{ backgroundColor: '#FFFFFF' }}>
              <i className="times icon" />
            </div>
          </div>
          <div>
            <UserIconComponent />
          </div>
          <div className="content" style={{ backgroundColor: '#FFFFFF' }}>
            <Form>
              <div className="field">
                <div>{CategoryComponent}</div>
              </div>
              <div className="field">
                <div>{TitleIconComponent}</div>
              </div>
              <div className="field">
                <div>{CommentComponent}</div>
              </div>
              <div className="field">
                <div>{TagComponent}</div>
              </div>
              <div className="field">
                <div>{UrlComponent}</div>
              </div>
              <div className="content">
                <div
                  className="ui label"
                  style={{
                    float: 'left',
                    marginTop: 20,
                    marginLeft: 50,
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  *は必須項目です。
                </div>
              </div>
              <div
                className="content"
                style={{ textAlign: 'right', marginRight: 40, marginTop: 20 }}
              >
                <div
                  className="ui black button"
                  style={{ backgroundColor: '#555555' }}
                  css={submitButtonStyle}
                >
                  投稿
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div className="two wide column" />
  </div>
)

export default PostScreen
