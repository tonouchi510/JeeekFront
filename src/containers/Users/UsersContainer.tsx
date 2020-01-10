import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Users from '../../components/Users'
import { AuthUserState } from '../../reducers/auth'
import { FollowState } from '../../reducers/follows'
import { UserSearchState } from '../../reducers/userSearch'
import { getFollows } from '../../actions/follows'
import { searchUsers } from '../../actions/userSearch'

interface StateProps {
  user: AuthUserState
  follows: FollowState
  userSearch: UserSearchState
}

interface DispatchProps {
  getFollowsStart: (uid: string) => void
  searchUserStart: (query: string) => void
}

type EnhancedUserProfileProps = StateProps & DispatchProps

const mapStateToProps = (state: {
  userSearch: UserSearchState
  follows: FollowState
  authUser: AuthUserState
}): StateProps => ({
  user: state.authUser,
  follows: state.follows,
  userSearch: state.userSearch,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFollowsStart: (uid: string) => getFollows.start({ uid }),
      searchUserStart: (query: string) => searchUsers.start({ query }),
    },
    dispatch,
  )

const UsersContainer: FC<EnhancedUserProfileProps> = ({
  user,
  follows,
  userSearch,
  getFollowsStart,
  searchUserStart,
}) => {
  useEffect(() => {
    getFollowsStart(user.uid)
    searchUserStart('aaa')
  }, [])
  return (
    <Users
      follows={follows}
      searchedResult={userSearch.results}
      searchUserAction={searchUserStart}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer)
