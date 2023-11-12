import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { authApi } from '../api/auth-api'
import { Credentials } from '../interfaces'
import { CONSTANTS } from '../constants/constants'

export const LoginPage = () => {
  const [user, setUser] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const { data } = await authApi.post('/auth/login', user);

      localStorage.setItem(CONSTANTS.TOKEN_KEY, data.token)
      localStorage.setItem(CONSTANTS.USER_KEY, JSON.stringify(data.user))
      location.reload()

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Login</h1>

        <label>
          <span className='label'>Email</span>
          <input
            autoFocus
            type='email'
            className='input'
            placeholder='example@mail.com'
            onChange={({ target }) => setUser({ ...user, email: target.value })}
          />
        </label>

        <label>
          <span className='label'>Password</span>
          <input
            type='password'
            className='input'
            placeholder='*********'
            onChange={({ target }) =>
              setUser({ ...user, password: target.value })
            }
          />
        </label>

        <div>
          <em>
            Don't have an account? <Link to='/register'>Register</Link>
          </em>
        </div>

        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}
