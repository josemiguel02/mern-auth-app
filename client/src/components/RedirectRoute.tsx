import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface RedirectRouteProps {
  redirectTo?: string
}

export const RedirectRoute = ({
  redirectTo = '/dashboard'
}: RedirectRouteProps) => {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />
  }

  return <Outlet />
}
