import firebase from 'firebase'
import { select, take, put, takeEvery } from 'redux-saga/effects'
import { FeedActionType, getFeed } from '../actions/feed'

function* syncFeeds(action: ReturnType<typeof getFeed.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.rsf)
  const db = firebase.firestore()

  const colRef = db.collection('activities').where('user.uid', '==', uid)
  const channel = rsf.firestore.channel(colRef)

  while (true) {
    const snapshot = yield take(channel)

    let feeds = []
    snapshot.forEach(doc => {
      feeds = [...feeds, doc.data()]
      feeds[feeds.length - 1].id = doc.id
    })
    if (feeds) yield put(getFeed.succeed({ feeds }))
    else yield put(getFeed.fail('There are no items.'))
  }
}

export default function* feedSagas() {
  yield takeEvery(FeedActionType.GET_FEED_START, syncFeeds)
}
