/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

const header = css`
  margin-top: 15px;
`

interface NewsProps {}

const News: FC<NewsProps> = ({}) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h3 className="ui header">News</h3>
    </div>
    <hr />
    <table className="ui basic table">
      <tbody>
        <tr>
          <td>
            【9/23
            フロントエンドmeetup!@渋谷】最新のフロントエンド情報をキャッチアップしよう。こちらは...{' '}
          </td>
        </tr>
        <tr>
          <td>
            【9/26 ガチもくもく会@六本木】
            本気でもくもくを行いたい人向けのイベントです。個人開発者はもち...
          </td>
        </tr>
        <tr>
          <td>
            【10/2
            第7回技術書展】今年もやってきました。毎年恒例の技術書展が渋谷で開催されます。日程の詳...
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default News
