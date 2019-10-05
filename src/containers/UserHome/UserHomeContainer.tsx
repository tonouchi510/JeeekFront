import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import UserHome from '../../components/UserHome'
import { getFollows } from '../../actions/follows'
import { AuthState } from '../../reducers/auth'

interface StateProps {
  signedUser: User
}

interface DispatchProps {
  getFollowsStart: (uid: string) => void
}

type EnhancedUserHomeProps = StateProps & DispatchProps

const mapStateToProps = (state: { auth: AuthState }): StateProps => ({
  signedUser: state.auth.user,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFollowsStart: (uid: string) => getFollows.start({ uid }),
    },
    dispatch,
  )

const UserHomeContainer: FC<EnhancedUserHomeProps> = ({ signedUser, getFollowsStart }) => {
  // followings, followersの取得
  useEffect(() => {
    getFollowsStart(signedUser.uid)
  }, [])

  return <UserHome />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHomeContainer)
