/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { UserProfile, Institution } from '../../../services/models/users'

const headerBackgroundStyle = css`
  width: 90%;
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
    <div className="content" style={{ height: '100%' }}>
      <h2 className="ui left floated header" style={{ marginLeft: 10, marginTop: 10 }}>
        About
      </h2>
      <button
        className="mini ui button"
        type="button"
        onClick={() => editStart(userProfile.uid)}
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        編集
      </button>
      <div className="content">
        <h3
          className="ui dividing teal header"
          style={{ marginLeft: 10, marginTop: 30 }}
          css={headerBackgroundStyle}
        >
          学歴
        </h3>
        <div className="content">
          <div className="content" style={{ height: '100%' }}>
            {isEditMode ? (
              <textarea> </textarea>
            ) : (
              <div className="description" style={{ marginLeft: 30 }}>
                {userProfile.career.education.map((inst: Institution) => (
                  <ul key={inst.subject}>
                    <li style={{ float: 'left', width: 80 }}>{inst.period}</li>
                    {inst.subject}
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        <h3
          className="ui dividing teal header"
          style={{ marginLeft: 10, marginTop: 15 }}
          css={headerBackgroundStyle}
        >
          職歴
        </h3>
        <div className="content">
          <div className="content" style={{ height: '100%' }}>
            {isEditMode ? (
              <textarea> </textarea>
            ) : (
              <div className="description" style={{ marginLeft: 30 }}>
                {userProfile.career.workExperience.map((inst: Institution) => (
                  <ul key={inst.subject}>
                    <li style={{ float: 'left', width: 80 }}>{inst.period}</li>
                    {inst.subject}
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        <h3
          className="ui dividing teal header"
          style={{ marginLeft: 10, marginTop: 15 }}
          css={headerBackgroundStyle}
        >
          資格・受賞歴
        </h3>
        <div className="content">
          <div className="content" style={{ height: '100%' }}>
            {isEditMode ? (
              <textarea> </textarea>
            ) : (
              <div className="description" style={{ marginLeft: 30 }}>
                {userProfile.career.certification.map((inst: Institution) => (
                  <ul key={inst.subject}>
                    <li style={{ float: 'left', width: 80 }}>{inst.period}</li>
                    {inst.subject}
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
