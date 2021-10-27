import React from 'react'
import Header from './Header'
import MainLoginPage from './MainLoginPage'
function LoginPage() {
    return (
        <div className="flex flex-col h-screen" >
            <Header />
            <MainLoginPage />
        </div>
    )
}

export default LoginPage
