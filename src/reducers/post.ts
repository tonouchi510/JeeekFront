import { Reducer } from 'redux'
import { AxiosError } from 'axios'
import { User } from 'firebase'
import { PostAction, PostActionType } from '../actions/post'

// ここはアウトプット（マッピングするときの）なので、postContent配列が入ってくると思う
// モック的に一時的にUser配列を書いている、その一つずつを取り出したものをアウトプットしている
export interface PostState {
  users: User[]
  error: boolean
}

const initialState: PostState = {
  users: [],
  error: false,
}

const postReducer: Reducer<PostState, PostAction> = (
  state: PostState = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case PostActionType.POST_START:
      return {
        ...state,
        users: [],
      }
    case PostActionType.POST_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
      }
    case PostActionType.POST_FAIL:
      return {
        ...state,
        error: action.payload.error,
      }
    default: {
      return state
    }
  }
}

export default postReducer
