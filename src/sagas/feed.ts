import firebase from 'firebase'
import { select, take, put, takeLatest } from 'redux-saga/effects'
import { FeedActionType, getTrendFeed, getUserFeed } from '../actions/feed'

function* syncUserFeed(action: ReturnType<typeof getUserFeed.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.common.rsf)
  const db = firebase.firestore()

  const colRef = db
    .collection('users')
    .doc(uid)
    .collection('timeline')
    .orderBy('updatedAt')

  const channel = rsf.firestore.channel(colRef)

  while (true) {
    const snapshot = yield take(channel)

    let feeds = []
    snapshot.forEach(doc => {
      feeds = [...feeds, doc.data()]
      feeds[feeds.length - 1].id = doc.id
    })
    if (feeds) yield put(getUserFeed.succeed(feeds))
    else yield put(getUserFeed.fail('There are no items.'))
  }
}

function* syncTrendFeed(action: ReturnType<typeof getTrendFeed.start>) {
  const rsf = yield select(state => state.common.rsf)
  const db = firebase.firestore()

  const colRef = db
    .collection('users')
    .doc(action.payload.params.uid)
    .collection('timeline')
    .orderBy('updatedAt')

  const channel = rsf.firestore.channel(colRef)

  while (true) {
    const snapshot = yield take(channel)

    let trends = []
    snapshot.forEach(doc => {
      trends = [...trends, doc.data()]
      trends[trends.length - 1].id = doc.id
    })
    if (trends) yield put(getTrendFeed.succeed(trends))
    else yield put(getTrendFeed.fail('There are no items.'))
  }
}

export default function* feedSagas() {
  yield takeLatest(FeedActionType.GET_USER_FEED_START, syncUserFeed)
  yield takeLatest(FeedActionType.GET_TREND_FEED_START, syncTrendFeed)
}
