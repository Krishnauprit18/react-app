import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="app-wrapper">
      {showLogin ? (
        <Login onSwitch={() => setShowLogin(false)} />
      ) : (
        <Register onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  )
}

export default App
