/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import Navbar from './components/Navbar'

const header = css`
  margin-top: 15px;
`

interface LayoutProps {
  children: any
}

const DefaultLayout: FC<LayoutProps> = ({ children = null }) => (
  <div className="ui container">
    <header css={header}>
      <h1 className="ui teal header">
        <i className="big beer icon" />
        Jeeek
      </h1>
    </header>
    <Navbar />
    <main className="main">{children}</main>
    <footer className="app-footer" />
  </div>
)

export default DefaultLayout
