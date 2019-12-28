import { select, call, put, takeLatest } from 'redux-saga/effects'
import { AuthUserActionType, getUser } from '../actions/authUser'
import { SkillActionType, getSkill } from '../actions/skillStack'

function* runInit(action: ReturnType<typeof getUser.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.authUser.rsf)
  try {
    const doc = yield call(rsf.firestore.getDocument, 'users/'.concat(uid))
    const data = doc.data()
    data.user = doc.user
    yield put(getUser.succeed({ uid }, { user: data.user }))
  } catch (error) {
    yield put(getUser.fail({ uid }, error))
  }
  try {
    const doc = yield call(rsf.firestore.getDocument, 'skillStacks/'.concat(uid))
    const data = doc.data()
    data.skillStacks = doc.skillStacks
    yield put(getSkill.succeed({ uid }, { skillStacks: data.skillStacks }))
  } catch (error) {
    yield put(getSkill.fail({ uid }, error))
  }
}
export default function* initSaga() {
  yield takeLatest(AuthUserActionType.GET_USER_START, runInit)
  yield takeLatest(SkillActionType.GET_SKILL_START, runInit)
}
