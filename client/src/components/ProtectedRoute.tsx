import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface ProtectedRouteProps {
  redirectTo?: string
}

export const ProtectedRoute = ({
  redirectTo = '/login'
}: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />
  }

  return <Outlet />
}
