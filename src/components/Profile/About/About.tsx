/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { UserProfile, Institution } from '../../../services/models/users'

const headerBackgroundStyle = css`
  width: 100%;
`

interface AboutProps {
  userProfile?: UserProfile
  isEditMode?: boolean
  editStart?: (param?: string) => void
}

const About: FC<AboutProps> = ({
  userProfile = null,
  isEditMode = false,
  editStart = () => {},
}) => (
  <div className="content">
    <h2 className="ui left floated header" style={{ marginLeft: '10px', marginTop: '10px' }}>
      About
    </h2>
    <button
      className="mini ui button"
      type="button"
      onClick={() => editStart(userProfile.uid)}
      style={{ marginLeft: '10px', marginTop: '10px' }}
    >
      編集
    </button>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '30px' }}
        css={headerBackgroundStyle}
      >
        学歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {userProfile.career.education.map((inst: Institution) => (
              <ul key={inst.subject}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '15px' }}
        css={headerBackgroundStyle}
      >
        職歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {userProfile.career.workExperience.map((inst: Institution) => (
              <ul key={inst.subject}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '15px' }}
        css={headerBackgroundStyle}
      >
        資格・受賞歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {userProfile.career.certification.map((inst: Institution) => (
              <ul key={inst.subject}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default About
