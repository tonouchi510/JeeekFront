import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { User } from 'firebase'

import TrendFeed from '../../../components/UserHome/TrendFeed'
import { CombinedState } from '../../../reducers'
import { TrendsState } from '../../../reducers/trend'
import { getTrend } from '../../../actions/trend'

interface StateProps {
  signedUser: User
  trendFeed: TrendsState
}

interface DispatchProps {
  getTrendStart: (uid: string) => void
}

type EnhancedTrendFeedProps = StateProps & DispatchProps

const mapStateToProps = (state: CombinedState): StateProps => ({
  signedUser: state.auth.user,
  trendFeed: state.trend,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getTrendStart: (uid: string) => getTrend.start({ uid }),
    },
    dispatch,
  )

const TrendFeedContainer: FC<EnhancedTrendFeedProps> = ({
  signedUser,
  trendFeed,
  getTrendStart,
}) => {
  useEffect(() => {
    getTrendStart(signedUser.uid)
  }, [])
  return <TrendFeed feeds={trendFeed.trends} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendFeedContainer)
