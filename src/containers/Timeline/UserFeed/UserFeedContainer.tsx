import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import UserFeed from '../../../components/Timeline/UserFeed'
import { Activity } from '../../../reducers/feed'
import { getUserFeed } from '../../../actions/feed'
import { UserFeedProps } from '../../../components/Timeline/UserFeed/UserFeed'

interface StateProps {
  uid: string
  feed: Activity[]
}

interface DispatchProps {
  getUserFeedStart: (uid: string) => void
}

type EnhancedHomeFeedProps = StateProps & DispatchProps & UserFeedProps

const mapStateToProps = (state: {
  authUser: { uid: string }
  timeline: { userFeed: Activity[] }
}): StateProps => ({
  uid: state.authUser.uid,
  feed: state.timeline.userFeed,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUserFeedStart: (uid: string) => getUserFeed.start({ uid }),
    },
    dispatch,
  )

const UserFeedContainer: FC<EnhancedHomeFeedProps> = ({
  uid = null,
  feed = [],
  getUserFeedStart,
}) => {
  useEffect(() => {
    getUserFeedStart(uid)
  }, [])
  return <UserFeed feed={feed} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFeedContainer)
