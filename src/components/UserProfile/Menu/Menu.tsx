/** @jsx jsx */
import React, { FC } from 'react'
import { User } from 'firebase'
import { css, jsx } from '@emotion/core'

const backgroundStyle = css`
  background-image: url(image/menuBackground.png);
`

interface UserProfileMenuProps {
  user?: User
}

// Kazuのところは{user.displayName}に置き換える

const Menu: FC<UserProfileMenuProps> = ({ user = null }) => (
  <div className="ui grid" style={{ height: '100%' }}>
    <div className="three wide column" style={{ height: '100%' }} css={backgroundStyle}>
      <div
        className="ui tiny labeled icon button"
        style={{ float: 'left', marginTop: 10, marginLeft: 5, backgroundColor: 'Transparent' }}
      >
        <i className="left chevron icon"> </i>
        Back
      </div>
      <div
        className="content"
        style={{
          marginTop: 65,
          marginLeft: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 90,
          height: 90,
        }}
      >
        <img
          className="ui small circular image"
          // src={user.photoURL} に変える
          src="image/userIcon.png"
          alt="userIcon"
          style={{ width: 90, height: 90 }}
        />
      </div>
      <h2
        className="ui header"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Kazu
      </h2>
      <div
        className="content"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div
          className="ui vertical text menu"
          style={{
            position: 'relative',
            marginTop: 20,
            marginLeft: 5,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <li className="ui button" style={{ marginTop: 5, backgroundColor: 'Transparent' }}>
            About
          </li>
          <li className="ui button" style={{ backgroundColor: 'Transparent' }}>
            Article
          </li>
          <li className="ui button" style={{ backgroundColor: 'Transparent' }}>
            Products
          </li>
          <li className="ui button" style={{ backgroundColor: 'Transparent' }}>
            Blog
          </li>
          <div
            className="content"
            style={{
              marginTop: 25,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="ui circular facebook icon button">
              <i className="facebook icon"> </i>
            </div>
            <div className="ui circular twitter icon button">
              <i className="twitter icon"> </i>
            </div>
            <div className="ui circular linkedin icon button">
              <i className="linkedin icon"> </i>
            </div>
            <div className="ui circular google plus icon button">
              <i className="google plus icon"> </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Menu
