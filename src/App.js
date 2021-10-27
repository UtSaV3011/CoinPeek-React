import React from 'react'
import Header from './Components/Header'
import LoginPage from './Components/LoginPage'
import MainPage from './Components/MainPage'
import SignUpPage from './Components/SignUpPage'

function App() {
  if (localStorage.getItem('isLoggedIn')) {
    return (
      <div>
        <MainPage />
      </div>
    )
  }
  else if (localStorage.getItem('isSignUp')) {
    return (
      <div>
        <SignUpPage />
      </div>
    )
  }
  else {
    return (
      <div>
        <LoginPage />
      </div>
    )
  }
}

export default App
