import React, { Component } from 'react'
import Header from './Header'
import MainLoginPage from './MainLoginPage'

class MainPage extends Component {
    
    constructor(){
        super()
        this.login=this.login.bind(this)
    }
    login () {
        this.props.logInOut();
    }
    render() {
        return (
            <div>
                <Header />
                <MainLoginPage login={this.login} handeler={this.props.handeler} />
            </div>
        )
    }
}

export default MainPage
