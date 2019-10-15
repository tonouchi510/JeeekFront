/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

interface TopProps {
  signinStart?: () => void
  signoutStart?: () => void
}
const wrapper = css`
  font-size: 30px;
`

const buttonStyle = css`
  width: 100px;
  font-size: 15px;
`

const Top: FC<TopProps> = ({ signinStart = () => {}, signoutStart = () => {} }) => (
  <div className="container">
    <h2 css={wrapper}>Lets join Jeeek!(wip)</h2>
    <button css={buttonStyle} type="button" onClick={signinStart}>
      signIn
    </button>
    <button css={buttonStyle} type="button" onClick={signoutStart}>
      signOut
    </button>
  </div>
)

export default Top
