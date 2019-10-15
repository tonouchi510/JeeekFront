import 'firebase/firestore'

export enum PostActionType {
  POST_START = 'POST_START',
  POST_SUCCEED = 'POST_SUCCEED',
  POST_FAIL = 'POST_FAIL',
}

export interface PostAction {
  type: PostActionType
  payload?: {
    PostTime: string | null
    UserName: string
    UserIcon: string | null
    Category: string
    PostContent: string
    SubContent: string | null
    Tag: string | null
    Rate: string | null
  }
}

// 投稿アクションを開始するに当たってその権限的なアクション
// このstartがきたらトリガーにしてSagaはアクションを遂行する
export const start = (): PostAction => ({
  type: PostActionType.POST_START,
  payload: null,
})

export const succeed = () => ({
  type: PostActionType.POST_SUCCEED,
  payload: {},
})

export const fail = () => ({
  type: PostActionType.POST_FAIL,
  payload: {},
  error: true,
})
