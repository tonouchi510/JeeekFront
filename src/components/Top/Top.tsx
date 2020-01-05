/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

interface TopProps {
  signinStart?: () => void
  signoutStart?: () => void
}
const wrapper = css`
  font-size: 45px;
  margin-top: 3em;
  margin-bottom: 2em;
  color: #47555e;
`

const buttonStyle = css`
  width: 100px;
  font-size: 15px;
  margin: 2em;
  background-color: #47555e;
  padding: 0.5em 1em;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
`

const positionCenter = css`
  text-align: center;
`

const button = css`
  text-align: center;
  margin-top: 5em;
`

const Top: FC<TopProps> = ({ signinStart = () => {}, signoutStart = () => {} }) => (
  <div className="ui container">
    <div className="grid">
      <div className="two wide column" />
      <div className="fourteen wide column" css={positionCenter}>
        <div className="header" css={wrapper}>
          Welcome to Jeeek !
        </div>
        <i className="massive comment alternate icon" />
        <div css={button}>
          <button css={buttonStyle} onClick={signinStart}>
            signIn
          </button>
          <button css={buttonStyle} onClick={signoutStart}>
            signOut
          </button>
        </div>
      </div>
      <div className="two wide column" />
    </div>
  </div>
)

export default Top
