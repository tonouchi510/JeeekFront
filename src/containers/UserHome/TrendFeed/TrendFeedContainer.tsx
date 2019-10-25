import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import TrendFeed from '../../../components/UserHome/TrendFeed'
import { CombinedState } from '../../../reducers'
import { FeedsState } from '../../../reducers/feed'

interface StateProps {
  signedUser: User
  trendFeed: FeedsState
}

interface DispatchProps {
  getFeed: any
}

type EnhancedUserHomeProps = StateProps & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  signedUser: state.auth.user,
  trendFeed: state.feed,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFeed: null,
    },
    dispatch,
  )

const TrendFeedContainer: FC<EnhancedUserHomeProps> = ({ signedUser, trendFeed }) => {
  return <TrendFeed feeds={trendFeed.feeds} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendFeedContainer)
