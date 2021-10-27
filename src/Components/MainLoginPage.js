import React, { Component } from 'react'

class MainLoginPage extends Component {
    
    constructor() {
        super()
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        event.preventDefault()
        // console.log(localStorage.getItem(JSON.stringify(event.target.email.value)))
        if (localStorage.getItem(JSON.stringify(event.target.email.value))) {
            if (localStorage.getItem(JSON.stringify(event.target.email.value)) === event.target.password.value) {
                // console.log(localStorage.getItem('isLoggedIn'))
                // console.log(localStorage.getItem(JSON.stringify(event.target.email.value)))
                // console.log(event.target.password.value)
                this.props.login();
            }
            else {
                alert('Incorrect')
            }
        }
        else {
            alert('Incorrect')
        }
    }
    render() {
        return (
            <div className=" text-2xl h-full">
                <form className=" font-semibold color-black  m-h-96 max-w-lg " onSubmit={this.validate}>
                    <h1 className="h-8 text-3xl tracking-wider ">Login</h1>
                    <label className="w-5" for="email">Email:
                        <input className="w-48 border-black border-solid border-2 text-base tracking-wide h-6 mb-8 shadow-2xl pl-8 trasnition-all" type="email" id="email">
                        </input>
                    </label>
                    <br />
                    <label className="" for="password">Password:
                        <input  className=" width- border-blue-600 border-solid border-2 text-base tracking-wide h-6 mb-8 shadow-2xl pl-8 trasnition-all " type="password" id="password"></input>
                    </label>
                    <br />
                    <button type="submit" id="loginBTN">Log in</button>
                    <br />
                    <label for="signUpBTN" >New User ?</label>
                    <br />
                    <button onClick={this.props.handeler} type="button" id="signUpBTN" className="border-black">Sign up</button>
                </form>
            </div>
        )
    }
}

export default MainLoginPage
