import React, { useEffect, useReducer } from 'react'
import AuthContext from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { User } from '../interfaces'
import { CONSTANTS } from '../constants/constants'

export interface AuthState {
  isLoggedIn: boolean
  user?: User
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  const loadUser = () => {
    if (localStorage.getItem(CONSTANTS.TOKEN_KEY)) {
      const user = JSON.parse(localStorage.getItem(CONSTANTS.USER_KEY) ?? '')
      dispatch({ type: '[Auth] - LOGIN', payload: user })
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
