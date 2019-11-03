import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { User } from 'firebase'
import UserProfile from '../../components/UserProfile'
import { CombinedState } from '../../reducers'
import { getUserProfile } from '../../actions/userProfile'
import { UserProfile as Profile } from '../../services/models/users'

interface StateProps {
  user: User
  userProfile: Profile
}

interface DispatchProps {
  getUserProfileStart: (uid: string) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  user: state.auth.user,
  userProfile: state.userProfile.userProfile,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUserProfileStart: (uid: string) => getUserProfile.start({ uid }),
    },
    dispatch,
  )

const UserProfileContainer: FC<EnhancedUserProfileProps> = ({
  user,
  userProfile,
  getUserProfileStart,
}) => {
  useEffect(() => {
    getUserProfileStart(user.uid)
  }, [])

  if (!userProfile) return <p>loading...</p>
  return <UserProfile userProfile={userProfile} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer)
