import firebase from 'firebase'
import { select, call, put, takeLatest } from 'redux-saga/effects'
import { UserSearchActionType, searchUsers } from '../actions/userSearch'

function* runSearchUsers(action: ReturnType<typeof searchUsers.start>) {
  const { query } = action.payload.params
  const rsf = yield select(state => state.common.rsf)

  try {
    const snapshot = yield call(
      rsf.firestore.getCollection,
      firebase
        .firestore()
        .collection('users')
        .limit(30),
    )

    let users = []
    snapshot.forEach(u => {
      users = [...users, u.data().userTiny]
    })

    yield put(searchUsers.succeed({ query }, { users }))
  } catch (error) {
    yield put(searchUsers.fail({ query }, error))
  }
}

export default function* userSearchSagas() {
  yield takeLatest(UserSearchActionType.SEARCH_USERS_START, runSearchUsers)
}
