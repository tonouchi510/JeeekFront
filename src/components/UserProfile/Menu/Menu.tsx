/** @jsx jsx */
import React, { FC } from 'react'
import { User } from 'firebase'
import { css, jsx } from '@emotion/core'

const backgroundStyle = css`
  background-image: url(image/menuBackground.png);
`
const menuButtonStyle = css`
  background-color: '#ffffff';
`

interface UserProfileMenuProps {
  user?: User
  menuTransition?: (param?: number) => void
}

// Kazuのところは{user.displayName}に置き換える
const Menu: FC<UserProfileMenuProps> = ({ user = null, menuTransition = () => {} }) => (
  <div className="content" style={{ height: '100%' }}>
    <div className="content" css={backgroundStyle}>
      <div className="content">
        <div
          className="ui tiny labeled icon button"
          style={{ marginTop: 10, marginLeft: 5, backgroundColor: 'Transparent' }}
        >
          <i className="left chevron icon"> </i>
          Back
        </div>
      </div>
      <div
        className="content"
        style={{
          position: 'relative',
          top: 55,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className="ui tiny circular image"
          // src={user.photoURL} に変える
          src="image/userIcon.png"
          alt="userIcon"
          style={{
            width: 90,
            height: 90,
          }}
        />
      </div>
      <div className="content" style={{ marginTop: 90 }}>
        <h2
          className="ui header"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          Kazu
        </h2>
      </div>
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
          <button
            className="ui button"
            type="button"
            onClick={() => menuTransition(0)}
            css={menuButtonStyle}
          >
            About
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => menuTransition(1)}
            css={menuButtonStyle}
          >
            Article
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => menuTransition(2)}
            css={menuButtonStyle}
          >
            Products
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => menuTransition(3)}
            css={menuButtonStyle}
          >
            Blog
          </button>
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
