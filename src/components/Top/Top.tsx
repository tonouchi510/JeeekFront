/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

const wrapper = css`
  font-size: 30px;
  color: #f00;
`

const Top: FC = () => (
  <div className="container">
    <h2 css={wrapper}>Lets join Jeeek!</h2>
    <p>wip</p>
  </div>
)

export default Top
