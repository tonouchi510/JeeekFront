import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Users from '../../components/Users'
import { AuthUserState } from '../../reducers/auth'
import { FollowState } from '../../reducers/follows'
import { getFollows } from '../../actions/follows'

interface StateProps {
  follows: FollowState
  user: AuthUserState
}

interface DispatchProps {
  getFollowsStart: (uid: string) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: { follows: FollowState; authUser: AuthUserState }): StateProps => ({
  follows: state.follows,
  user: state.authUser,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFollowsStart: (uid: string) => getFollows.start({ uid }),
    },
    dispatch,
  )

const UsersContainer: FC<EnhancedUserProfileProps> = ({ follows, user, getFollowsStart }) => {
  useEffect(() => {
    getFollowsStart(user.uid)
  }, [])
  return <Users follows={follows} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer)
