import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { User } from 'firebase'
import UserProfile from '../../components/UserProfile'
import { menu } from '../../actions/menu'
import { CombinedState } from '../../reducers'

interface StateProps {
  displayPage: number
  user: User
}

interface DispatchProps {
  menuTransition: (param: number) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  displayPage: state.menu.pageNumber,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      menuTransition: (pageNumber: number) => menu.transition({ pageNumber }),
    },
    dispatch,
  )

const UserProfileContainer: FC<EnhancedUserProfileProps> = ({
  displayPage,
  user,
  menuTransition,
}) => {
  return <UserProfile displayPage={displayPage} user={user} menuTransition={menuTransition} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer)
