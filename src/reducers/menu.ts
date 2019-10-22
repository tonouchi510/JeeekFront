import { Reducer } from 'redux'
import { MenuAction, MenuActionType } from '../actions/menu'

export interface MenuState {
  pageNumber: number
}

const initialState = {
  pageNumber: 0,
}

const menuReducer: Reducer<MenuState, MenuAction> = (
  state: MenuState = initialState,
  action: MenuAction,
): MenuState => {
  switch (action.type) {
    case MenuActionType.MENU_TRANSITION: {
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
      }
    }
    default: {
      return state
    }
  }
}

export default menuReducer
