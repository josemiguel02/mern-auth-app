import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { authApi } from '../api/auth-api'
import { Credentials } from '../interfaces'
import { CONSTANTS } from '../constants/constants'

export const RegisterPage = () => {
  const [user, setUser] = useState<Credentials>({
    fullname: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const { data } = await authApi.post('/auth/register', user);

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
        <h1>Register</h1>

        <label>
          <span className='label'>Fullname</span>
          <input
            autoFocus
            type='text'
            className='input'
            placeholder='Jhon Doe'
            onChange={({ target }) =>
              setUser({ ...user, fullname: target.value })
            }
          />
        </label>

        <label>
          <span className='label'>Email</span>
          <input
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
            You have an account? <Link to='/login'>Login</Link>
          </em>
        </div>

        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </div>
  )
}
