import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'
import Home from '../../components/Home'
import { CombinedState } from '../../reducers'
import { UserProfile } from '../../services/models/users'
import { ProfileState } from '../../reducers/profile'
import { getProfile } from '../../actions/profile'

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

const HomeContainer: FC<EnhancedHomeProps> = ({ user, profile, getProfileStart }) => {
  useEffect(() => {
    getProfileStart(user.uid)
  }, [])

  if (!profile) return <p>loading...</p>
  return <Home userProfile={profile} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer)
