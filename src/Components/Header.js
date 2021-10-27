import React, { Component } from 'react'
class Header extends Component {

    changee() {
        console.log('yes')
        // window.location.href="https://www.youtube.com/"
    }

    render() {
        return (
            <div>
                <h1 className="font-semibold h-24 p-2 text-6xl text-black text-center font-sans bg-blue-900">Coin Peek</h1>
            </div>
        )
    }
}

export default Header
