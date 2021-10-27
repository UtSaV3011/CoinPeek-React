import React, { Component } from 'react'

class MainSignUp extends Component {
    createUser(event) {
        event.preventDefault()
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.password.value)
        localStorage.setItem(JSON.stringify(event.target.email.value), event.target.password.value)
        if (event.target.password.value != event.target.password2.value) {
            console.log('Pass donot match')
        }
        if (!event.target.email.value.match(emailFormat)) {
            console.log('invalid email')
        }
    }
    
    render() {

        return (
            <div>
                <h2>SignUp</h2>
                <form onSubmit={this.createUser}>
                    <label for="name">Full Name <input type="text" name="name" id="fullName" /></label>
                    <br />
                    <label for="email">Email <input type="email" name="email" id="email" /></label>
                    <br />
                    <label for="password">Password <input type="password" name="password" id="password" /></label>
                    <br />
                    <label for="password2">Confirm Password <input type="password" name="password2" id="password2" /></label>
                    <br />
                    <button type="submit" id="signUpBTN" className="btn" >Sign up</button>
                    <br />
                    <label for="login" className="btnLabel">Already a User?</label>
                    <br />
                    <button onClick={this.props.handeler} type="button" className="btn" id="loginBTN">Log in</button>
                </form>
            </div>
        )
    }
}

export default MainSignUp
