import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Timeline from '../../components/Timeline'
import { getFollows } from '../../actions/follows'
import { AuthUserState } from '../../reducers/auth'

interface StateProps {
  signedUser: AuthUserState
}

interface DispatchProps {
  getFollowsStart: (uid: string) => void
}

type EnhancedUserHomeProps = StateProps & DispatchProps

const mapStateToProps = (state: { authUser: AuthUserState }): StateProps => ({
  signedUser: state.authUser,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFollowsStart: (uid: string) => getFollows.start({ uid }),
    },
    dispatch,
  )

const TimelineContainer: FC<EnhancedUserHomeProps> = ({ signedUser, getFollowsStart }) => {
  // followings, followersの取得
  useEffect(() => {
    getFollowsStart(signedUser.uid)
  }, [signedUser.uid])

  return <Timeline user={signedUser} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelineContainer)
