import { Pie } from 'react-chartjs-2'
import React, { FC } from 'react'
import { UserProfile, SkillData } from '../../../services/models/users'

interface SkillGraphProps {
  userProfile?: UserProfile
  data?: SkillData
}

const SkillGraph: FC<SkillGraphProps> = ({ data = null }) => (
  <div className="ui container">
    <div className="content" style={{ marginTop: '15px' }}>
      <h3 className="ui header">Skill Graph</h3>
    </div>
    <hr />
    <Pie data={data} width={80} />
  </div>
)

export default SkillGraph
