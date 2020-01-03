import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import TrendFeed from '../../../components/Timeline/TrendFeed'
import { getTrendFeed } from '../../../actions/feed'
import { Activity } from '../../../reducers/feed'

interface StateProps {
  uid: string
  feed: Activity[]
}

interface DispatchProps {
  getTrendFeedStart: (uid: string) => void
}

type EnhancedTrendFeedProps = StateProps & DispatchProps

const mapStateToProps = (state: {
  authUser: { uid: string }
  timeline: { trendFeed: Activity[] }
}): StateProps => ({
  uid: state.authUser.uid,
  feed: state.timeline.trendFeed,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getTrendFeedStart: (uid: string) => getTrendFeed.start({ uid }),
    },
    dispatch,
  )

const TrendFeedContainer: FC<EnhancedTrendFeedProps> = ({
  uid = null,
  feed = [],
  getTrendFeedStart,
}) => {
  useEffect(() => {
    getTrendFeedStart(uid)
  }, [])
  return <TrendFeed feed={feed} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendFeedContainer)
