import { User } from 'firebase'
import { AxiosError } from 'axios';

export enum PostActionType {
  POST_START = 'POST_START',
  POST_SUCCEED = 'POST_SUCCEED',
  POST_FAIL = 'POST_FAIL',
}

interface PostParams {
    IsSignedIn: boolean
}

interface PostResult {
  type: PostActionType
  payload?: {
      users: User[]
  }
}

export const PostStart = (params: PostParams) => ({
  type: PostActionType.POST_START,
  payload: {
    params,
  },
})

export const PostSucceed = (params: PostParams): (result: PostResult) => ({
  type: PostActionType.POST_SUCCEED,
  payload: {
      params,
      result
  },
})

export const PostFail = (params: PostParams): (error: AxiosError) => ({
  type: PostActionType.POST_FAIL,
  payload: {
      error
  },
})
