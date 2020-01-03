/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { AuthUserState } from '../../../reducers/auth'

const postScreen = css`
  margin-top: 15px;
`
const inputField = css`
  width: 95%;
`

const commentField = css`
  width: 95%;
  height: 110px;
`

const imgIcon = css`
  width: 48px;
  height: 48px;
`

const field = css`
  margin-top: 20px;
`

const field2 = css`
  margin-top: 20px;
  margin-right: 5%;
`

const submitButtonStyle = css`
  float: right;
  width: 80px;
  height: 40px;
`

interface PostScreenProps {
  user?: AuthUserState
}

const CategoryForm: FC = () => (
  <div className="field" css={field}>
    <b>Category *</b>
    <div>
      <select className="ui dropdown">
        <option value="">----------</option>
        <option value="0">学習</option>
        <option value="1">開発</option>
        <option value="2">執筆</option>
        <option value="3">賞等</option>
      </select>
    </div>
  </div>
)

const SubjectForm: FC = () => (
  <div className="field" css={field}>
    <b>Subject *</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" name="title" placeholder="サービス名、本のタイトル、勉強会、" />
    </div>
  </div>
)

const CommentForm: FC = () => (
  <div className="field" css={field}>
    <b>Comment</b>
    <div className="ui input focus" css={commentField}>
      <textarea
        name="comment"
        cols={50}
        wrap="soft"
        placeholder="「記事投稿しました！」, 「賞をとりました！」, 「7章を読みました！」, etc."
      />
    </div>
  </div>
)

const TagForm: FC = () => (
  <div className="field" css={field}>
    <b>Tag *</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" placeholder="React, 機械学習, GCP, ..." />
    </div>
  </div>
)

const UrlForm: FC = () => (
  <div className="field" css={field}>
    <b>URL</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" name="comment" placeholder="https://jeeek.com" />
    </div>
  </div>
)

const PostScreen: FC<PostScreenProps> = ({ user }) => (
  <div css={postScreen}>
    <div className="content">
      <h3 className="ui header">New Activity</h3>
    </div>
    <hr />
    <div>
      <b>From</b>
      <div className="ui grid">
        <div className="four wide column">
          <img className="ui image" src={user.photoUrl} alt="userIcon" css={imgIcon} />
        </div>
        <div className="six wide column">
          <b>{user.name}</b>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="content">
        <form>
          <CategoryForm />
          <SubjectForm />
          <CommentForm />
          <TagForm />
          <UrlForm />
        </form>
        <div css={field2}>
          <b>*は必須項目です。</b>
          <div className="ui teal button" css={submitButtonStyle}>
            投稿
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PostScreen
