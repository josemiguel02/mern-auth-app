import { createContext } from 'react'
import { User } from '../interfaces'

interface AuthContextProps {
  isLoggedIn: boolean
  user?: User
}

const AuthContext = createContext({} as AuthContextProps)

export default AuthContext
