import { Routes, Route } from 'react-router-dom'
import { resetCss } from '../stitches.config'
import { Login } from './pages/Login'

function App() {
  resetCss()
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  )
}

export default App
