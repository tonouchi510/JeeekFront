import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import UserFeed from '../../../components/Timeline/UserFeed'
import { FollowsState } from '../../../reducers/follows'
import { FeedsState } from '../../../reducers/feed'
import { getFeed } from '../../../actions/feed'
import { UserFeedProps } from '../../../components/Timeline/UserFeed/UserFeed'
import { CombinedState } from '../../../reducers'

interface StateProps {
  uid: string
  follows: FollowsState
  feed: FeedsState
}

interface DispatchProps {
  getFeedStart: (uid: string) => void
}

type EnhancedHomeFeedProps = StateProps & DispatchProps & UserFeedProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  uid: state.auth.user.uid,
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

const UserFeedContainer: FC<EnhancedHomeFeedProps> = ({ uid, follows, feed, getFeedStart }) => {
  useEffect(() => {
    if (follows.followings || feed.isLoading) {
      // following ユーザ分fetch
      follows.followings.forEach(u => {
        getFeedStart(u.uid)
      })
      // 自分の分
      getFeedStart(uid)
    }
  }, [follows.followings])
  const feeds = feed.feeds.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
  return <UserFeed feeds={feeds} isLoading={feed.isLoading} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFeedContainer)
