import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'
import { CombinedState } from '../../../reducers'
import { Skill, UserProfile, ChartData } from '../../../services/models/users'
import { ProfileState } from '../../../reducers/profile'
import { getProfile } from '../../../actions/profile'
import SkillGraph from '../../../components/Home/SkillGraph'

interface StateProps {
  user: User
  profile?: UserProfile
}

interface DispatchProps {
  getProfileStart: (uid: string) => void
}

type EnhancedHomeProps = StateProps & ProfileState & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  user: state.auth.user,
  profile: state.profile.profile,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getProfileStart: (uid: string) => getProfile.start({ uid }),
    },
    dispatch,
  )

const SkillGraphContainer: FC<EnhancedHomeProps> = ({ user, profile, getProfileStart }) => {
  const tags: string[] = []
  const points: number[] = []
  const colors: string[] = []

  const defaultColors: string[] = [
    '#36A2EB',
    '#FFCE56',
    '#63FF90',
    '#FF6384',
    '#63FFDD',
    '#FF9063',
    '#DD63FF',
    '#D3FF63',
    '#6385FF',
    '#FFDD63',
  ]

  let i = 0
  profile.skills.forEach((s: Skill) => {
    tags.push(s.tag)
    points.push(s.point)
    colors.push(defaultColors[i])
    i += 1
  })

  const dataSets: ChartData = {
    labels: tags,
    datasets: [
      {
        data: points,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  }

  if (!profile) return <p>loading...</p>
  return <SkillGraph userProfile={profile} data={dataSets} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SkillGraphContainer)
