import React, { FC } from 'react'
import SkillList from './SkillList'
import SkillGraph from '../../containers/Home/SkillGraph'
import { SkillState } from '../../reducers/skillStack'

interface HomeProps {
  skillStack: SkillState[]
}

const Home: FC<HomeProps> = ({ skillStack = [] }) => (
  <div className="ui grid">
    <div className="three wide column">
      <SkillGraph skillStack={skillStack} />
    </div>
    <div className="ten wide column">
      <SkillList skillStack={skillStack} />
    </div>
  </div>
)

export default Home
