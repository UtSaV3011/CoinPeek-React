import React from 'react'
import Header from './Header'
import MainPageAPI from './MainPageAPI'
function logout() {
    localStorage.removeItem('isLoggedIn')
    window.location.reload()
}
function MainPage() {
    return (
        <div>
            <Header />
            <button onClick={logout}>Logout</button>
            <MainPageAPI />
        </div>
    )
}

export default MainPage
