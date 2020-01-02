import firebase from 'firebase'
import { select, put, takeLatest, take } from 'redux-saga/effects'
import { TrendActionType, getTrend } from '../actions/trend'

function* syncTrends(action: ReturnType<typeof getTrend.start>) {
  const rsf = yield select(state => state.common.rsf)
  const db = firebase.firestore()

  const colRef = db.collection('activities').where('rank', '==', 3)
  const channel = rsf.firestore.channel(colRef)

  while (true) {
    const snapshot = yield take(channel)

    let trends = []
    snapshot.forEach(doc => {
      trends = [...trends, doc.data()]
      trends[trends.length - 1].id = doc.id
    })
    if (trends) yield put(getTrend.succeed(trends))
    else yield put(getTrend.fail('There are no items.'))
  }
}

export default function* trendSagas() {
  yield takeLatest(TrendActionType.GET_TREND_START, syncTrends)
}
