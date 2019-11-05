import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import UserFeed from '../../../components/Timeline/UserFeed'
import { FollowsState } from '../../../reducers/follows'
import { FeedsState } from '../../../reducers/feed'
import { getFeed } from '../../../actions/feed'
import { UserFeedProps } from '../../../components/Timeline/UserFeed/UserFeed'
import { CombinedState } from '../../../reducers'

interface StateProps {
  signedUser: User
  follows: FollowsState
  feed: FeedsState
}

interface DispatchProps {
  getFeedStart: (uid: string) => void
}

type EnhancedHomeFeedProps = StateProps & DispatchProps & UserFeedProps

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

const UserFeedContainer: FC<EnhancedHomeFeedProps> = ({
  signedUser,
  follows,
  feed,
  getFeedStart,
}) => {
  useEffect(() => {
    if (!feed.isLoading) return
    // following ユーザ分fetch
    if (follows) {
      follows.followings.forEach(u => {
        getFeedStart(u.uid)
      })
    }
    getFeedStart(signedUser.uid)
  }, [follows.followings])
  const feeds = feed.feeds.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
  return <UserFeed signedUser={signedUser} feeds={feeds} isLoading={feed.isLoading} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFeedContainer)
