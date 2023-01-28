import { Routes, Route } from 'react-router-dom'
import { resetCss } from '../stitches.config'
import { Home } from './pages/Home'

function App() {
  resetCss()
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
