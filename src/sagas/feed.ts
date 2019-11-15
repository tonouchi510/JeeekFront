import firebase from 'firebase'
import { select, take, put, takeEvery } from 'redux-saga/effects'
import { FeedActionType, getFeed } from '../actions/feed'

function* syncFeeds(action: ReturnType<typeof getFeed.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  const db = firebase.firestore()

  const channel = rsf.firestore.channel(db.collection('activities').where('user.uid', '==', uid))
  while (true) {
    const activities = yield take(channel)

    let feeds = []
    activities.forEach(doc => {
      feeds = [...feeds, doc.data()]
      feeds[feeds.length - 1].id = doc.id
    })
    yield put(getFeed.succeed({ feeds }))
  }
}

export default function* feedSagas() {
  yield takeEvery(FeedActionType.GET_FEED_START, syncFeeds)
}
