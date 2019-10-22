export enum MenuActionType {
  MENU_TRANSITION = 'MENU_TRANSITION',
}

export interface MenuAction {
  type: MenuActionType
  payload?: MenuParams
}

interface MenuParams {
  pageNumber: number
}

export const menu = {
  transition: (param: MenuParams): MenuAction => ({
    type: MenuActionType.MENU_TRANSITION,
    payload: param,
  }),
}
