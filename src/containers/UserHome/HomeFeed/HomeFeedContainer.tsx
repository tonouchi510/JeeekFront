import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import HomeFeed from '../../../components/UserHome/HomeFeed'
import { FollowsState } from '../../../reducers/follows'
import { FeedsState } from '../../../reducers/feed'
import { getFeed } from '../../../actions/feed'
import { HomeFeedProps } from '../../../components/UserHome/HomeFeed/HomeFeed'
import { CombinedState } from '../../../reducers'

interface StateProps {
  signedUser: User
  follows: FollowsState
  feed: FeedsState
}

interface DispatchProps {
  getFeedStart: (uid: string) => void
}

type EnhancedHomeFeedProps = StateProps & DispatchProps & HomeFeedProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  signedUser: state.auth.user,
  follows: state.follow,
  feed: state.feed,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFeedStart: (uid: string) => getFeed.start({ uid, followings: [] }),
    },
    dispatch,
  )

const HomeFeedContainer: FC<EnhancedHomeFeedProps> = ({ signedUser, getFeedStart, feed }) => {
  useEffect(() => {
    getFeedStart(signedUser.uid)
  }, [])
  return <HomeFeed feeds={feed.feeds} isLoading={feed.isLoading} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedContainer)
