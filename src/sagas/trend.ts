import firebase from 'firebase'
import { select, call, put, takeLatest } from 'redux-saga/effects'
import { TrendActionType, getTrend } from '../actions/trend'

function* runGetTrends(action: ReturnType<typeof getTrend.start>) {
  const rsf = yield select(state => state.auth.rsf)

  try {
    const db = firebase.firestore()
    const snapshot = yield call(
      rsf.firestore.getCollection,
      db.collection('activities').where('rank', '==', 3),
    )
    let trends = []
    snapshot.forEach(doc => {
      trends = [...trends, doc.data()]
      trends[trends.length - 1].id = doc.id
    })
    if (trends) yield put(getTrend.succeed({ trends }))
    else yield put(getTrend.fail('There are no items.'))
  } catch (error) {
    yield put(getTrend.fail(error))
  }
}

export default function* trendSagas() {
  yield takeLatest(TrendActionType.GET_TREND_START, runGetTrends)
}
