import firebase from 'firebase'
import { select, call, put, takeEvery } from 'redux-saga/effects'
import { FeedActionType, getFeed } from '../actions/feed'

function* runGetFeeds(action: ReturnType<typeof getFeed.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  const db = firebase.firestore()

  try {
    const snapshot = yield call(
      rsf.firestore.getCollection,
      db.collection('activities').where('user.uid', '==', uid),
    )
    let feeds = []
    snapshot.forEach(doc => {
      feeds = [...feeds, doc.data()]
      feeds[feeds.length - 1].id = doc.id
    })
    yield put(getFeed.succeed({ feeds }))
  } catch (error) {
    yield put(getFeed.fail(error))
  }
}

export default function* feedSagas() {
  yield takeEvery(FeedActionType.GET_FEED_START, runGetFeeds)
}
