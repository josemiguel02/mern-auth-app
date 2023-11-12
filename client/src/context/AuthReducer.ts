import type { AuthState } from '.'
import { User } from '../interfaces'

type AuthActionType =
  | { type: '[Auth] - LOGIN', payload: User }

export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case '[Auth] - LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }

    default:
      return state
  }
}
