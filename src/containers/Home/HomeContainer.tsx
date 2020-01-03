import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Home from '../../components/Home'
import { SkillState } from '../../reducers/skillStack'
import { getSkill } from '../../actions/skillStack'
import { AuthUserState } from '../../reducers/auth'

interface StateProps {
  user: AuthUserState
  skillStack: SkillState[]
}

interface DispatchProps {
  getSkillStackStart: (uid: string) => void
}

type EnhancedHomeProps = StateProps & DispatchProps

const mapStateToProps = (state: {
  authUser: AuthUserState
  skillStack: SkillState[]
}): StateProps => ({
  user: state.authUser,
  skillStack: state.skillStack,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getSkillStackStart: (uid: string) => getSkill.start({ uid }),
    },
    dispatch,
  )

const HomeContainer: FC<EnhancedHomeProps> = ({ user, skillStack, getSkillStackStart }) => {
  useEffect(() => {
    getSkillStackStart(user.uid)
  }, [])

  if (!skillStack) return <p>loading...</p>
  return <Home skillStack={skillStack} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer)
