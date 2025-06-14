import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Signup from './components/signup'
import ProtectedRoute from './components/ProtectedRoute'

// Import your other components here
// import Login from './components/login'
// import Home from './components/Home'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/signup" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App