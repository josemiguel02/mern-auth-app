import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import { LoginPage, RegisterPage, Dashboard } from './pages'
import { RedirectRoute } from './components/RedirectRoute'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='*' element={<h1>Not found</h1>} />

          {/* Redirect Routes */}
          <Route element={<RedirectRoute />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>

          {/* Private Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
