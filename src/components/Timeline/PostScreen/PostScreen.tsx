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
  margin-left: 1em;
  margin-top: 1em;
`

const field = css`
  margin-top: 7px;
`

const field2 = css`
  margin-top: 20px;
  margin-right: 5%;
`

const backGroundGrey = css`
  background-color: #eee;
`

const submitButton = css`
  background-color: #47555e;
  float: right;
  margin-right: 5%;
  padding: 0.5em 1em;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
`

const additional = css`
  height: 2.5em;
`

const username = css`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const textarea = css`
  border-color: #85b7d9;
  border-radius: 0.28571429rem;
  padding: 0.67857143em 1em;
  width: -webkit-fill-available;
`
const dropdown = css`
  height: 2.5em;
  border-color: #85b7d9;
`

const marginTopSmall = css`
  display: flex;
  margin-top: 8px;
`

interface PostScreenProps {
  user?: AuthUserState
}

const CategoryForm: FC = () => (
  <div className="field" css={field}>
    <b>カテゴリ *</b>
    <div>
      <select className="dropdown" name="category" css={dropdown} required>
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
    <b>タイトル *</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" name="title" placeholder="サービス名, 本のタイトル, 勉強会, " required />
    </div>
  </div>
)

const CommentForm: FC = () => (
  <div className="field" css={field}>
    <b>一言コメント</b>
    <div className="ui input focus" css={commentField}>
      <textarea
        name="comment"
        placeholder="記事投稿しました！, 賞をとりました！, 7章を読みました！, etc."
        css={textarea}
      />
    </div>
  </div>
)

const TagForm: FC = () => (
  <div className="field" css={field}>
    <b>スキルタグ *</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" name="tag" placeholder="React, 機械学習, GCP, ..." required />
    </div>
  </div>
)

const UrlForm: FC = () => (
  <div className="field" css={field}>
    <b>URL</b>
    <div className="ui input focus" css={inputField}>
      <input type="text" name="url" placeholder="https://jeeek.com" />
    </div>
  </div>
)

// 117行目のデータ送信先(http://localhost:5000)はAPI作成後に適切なURIに変更する
const PostScreen: FC<PostScreenProps> = ({ user }) => (
  <div css={postScreen}>
    <div className="content">
      <h3 className="ui header">New Activity</h3>
    </div>
    <hr />
    <div css={backGroundGrey}>
      <div className="grid" css={marginTopSmall}>
        <div className="one wide column">
          <img className="image" src={user.photoUrl} alt="userIcon" css={imgIcon} />
        </div>
        <div className="two wide column" css={username}>
          <b>{user.name}</b>
        </div>
      </div>
      <div>
        <form action="http://localhost:5000" method="post">
          <div className="content" style={{ marginLeft: '20%' }}>
            <CategoryForm />
            <SubjectForm />
            <CommentForm />
            <TagForm />
            <UrlForm />
            <div css={field2} />
            <b>*は必須項目です。</b>
            <button type="submit" value="投稿" className="button" css={submitButton}>
              <i className="plus icon" />
              投稿
            </button>
            <div className="container" css={additional} />
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default PostScreen
