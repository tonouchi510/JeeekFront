import { select, call, put, takeLatest } from 'redux-saga/effects'
import { SkillActionType, getSkill } from '../actions/skillStack'

function* runGetSkills(action: ReturnType<typeof getSkill.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.common.rsf)

  try {
    const doc = yield call(rsf.firestore.getDocument, 'skillStacks/'.concat(uid))
    const data = doc.data()
    yield put(getSkill.succeed({ uid }, data))
  } catch (error) {
    yield put(getSkill.fail({ uid }, error))
  }
}

export default function* skillSagas() {
  yield takeLatest(SkillActionType.GET_SKILL_START, runGetSkills)
}
