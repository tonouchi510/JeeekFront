import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import Profile from '../../components/Profile'
import { CombinedState } from '../../reducers'
import { getProfile } from '../../actions/profile'
import { Follows, UserProfile } from '../../services/models/users'

interface StateProps {
  user: User
  profile: UserProfile
  follows?: Follows
}

interface DispatchProps {
  getProfileStart: (uid: string) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  user: state.auth.user,
  profile: state.profile.profile,
  follows: state.follow,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getProfileStart: (uid: string) => getProfile.start({ uid }),
    },
    dispatch,
  )

const ProfileContainer: FC<EnhancedUserProfileProps> = ({
  user,
  profile,
  getProfileStart,
  follows,
}) => {
  useEffect(() => {
    getProfileStart(user.uid)
  }, [])

  if (!profile) return <p>loading...</p>
  return <Profile userProfile={profile} user={user} follows={follows} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer)
