import { useAuth } from '../hooks/useAuth'

export const Dashboard = () => {
  const { user } = useAuth()

  const logout = () => {
    localStorage.clear()
    location.reload()
  }

  return (
    <div>
      {user && <h1>Hola, {user.fullname}</h1>}

      <button onClick={logout} className='btn btn-danger'>
        Logout
      </button>
    </div>
  )
}
