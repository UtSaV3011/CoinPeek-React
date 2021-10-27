import React, { Component } from 'react'
import Header from './Header'
import MainSignUp from './MainSignUp'

 class SignUpPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainSignUp handeler={this.props.handeler}/>
            </div>
        )
    }
}

export default SignUpPage
