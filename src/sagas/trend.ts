import firebase from 'firebase'
import { select, put, takeLatest, take } from 'redux-saga/effects'
import { TrendActionType, getTrend, GetTrendResult } from '../actions/trend'

function* syncTrends(action: ReturnType<typeof getTrend.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  const db = firebase.firestore()

  const colRef = db.collection('timeline'.concat(uid)).where('rank', '==', 3)
  const channel = rsf.firestore.channel(colRef)

  while (true) {
    const snapshot = yield take(channel)

    const trends: GetTrendResult = null
    snapshot.forEach((doc: GetTrendResult) => {
      trends.userTiny = doc.userTiny
      trends.category = doc.category
      trends.rank = doc.rank
      trends.content = doc.content
      trends.tags = doc.tags
      trends.favorites = doc.favorites
      trends.gifts = doc.gifts
      trends.updatedAt = doc.updatedAt
    })
    if (trends) yield put(getTrend.succeed(trends))
    else yield put(getTrend.fail('There are no items.'))
  }
}

export default function* trendSagas() {
  yield takeLatest(TrendActionType.GET_TREND_START, syncTrends)
}
