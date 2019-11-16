import React, { FC } from 'react'
import SkillList from './SkillList'
import { UserProfile } from '../../services/models/users'
import SkillGraph from '../../containers/Home/SkillGraph'

interface HomeProps {
  userProfile?: UserProfile
}

const Home: FC<HomeProps> = ({ userProfile = null }) => (
  <div className="ui grid">
    <div className="three wide column">
      <SkillGraph />
    </div>
    <div className="ten wide column">
      <SkillList userProfile={userProfile} />
    </div>
  </div>
)

export default Home
