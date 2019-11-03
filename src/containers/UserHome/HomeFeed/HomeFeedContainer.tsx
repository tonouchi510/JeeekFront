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

const HomeFeedContainer: FC<EnhancedHomeFeedProps> = ({
  signedUser,
  follows,
  feed,
  getFeedStart,
}) => {
  useEffect(() => {
    // following ユーザ分fetch
    if (follows) {
      follows.followings.forEach(u => {
        getFeedStart(u.uid)
      })
    }
    getFeedStart(signedUser.uid)
  }, [follows])
  const feeds = feed.feeds.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
  return <HomeFeed signedUser={signedUser} feeds={feeds} isLoading={feed.isLoading} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedContainer)
