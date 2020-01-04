/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import Navbar from './components/Navbar'

const header = css`
  margin-top: 15px;
`
const themeColor = css`
  color: #47555e;
`

const footer = css`
  width: inherit;
  height: 10%;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
`

interface LayoutProps {
  children: any
}

const DefaultLayout: FC<LayoutProps> = ({ children = null }) => (
  <div className="ui container">
    <header css={header}>
      <h1 className="header" css={themeColor}>
        <i className="large beer icon" />
        Jeeek
      </h1>
    </header>
    <Navbar />
    <main className="main">{children}</main>
    <footer className="app-footer" css={footer}>
      <hr />
    </footer>
  </div>
)

export default DefaultLayout
