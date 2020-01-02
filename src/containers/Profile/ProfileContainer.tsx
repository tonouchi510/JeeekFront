import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Profile from '../../components/Profile'
import { AuthUserState } from '../../reducers/auth'
import { CareerState } from '../../reducers/career'
import { FollowState } from '../../reducers/follows'
import { getCareer } from '../../actions/career'
import { getFollows } from '../../actions/follows'

interface StateProps {
  user?: AuthUserState
  career?: CareerState
  follows?: FollowState
}

interface DispatchProps {
  getCareerStart: (uid: string) => void
  getFollowsStart: (uid: string) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: {
  authUser: AuthUserState
  career: CareerState
  follows: FollowState
}): StateProps => ({
  user: state.authUser,
  career: state.career,
  follows: state.follows,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getCareerStart: (uid: string) => getCareer.start({ uid }),
      getFollowsStart: (uid: string) => getFollows.start({ uid }),
    },
    dispatch,
  )

const ProfileContainer: FC<EnhancedUserProfileProps> = ({
  user,
  career,
  follows,
  getCareerStart,
  getFollowsStart,
}) => {
  useEffect(() => {
    getCareerStart(user.uid)
    getFollowsStart(user.uid)
  }, [])

  return <Profile user={user} career={career} follows={follows} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer)
