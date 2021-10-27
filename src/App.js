import React, { Component } from 'react'
import './App.css'
import SignUpPage from './Components/SignUpPage'
import LoginPage from './Components/LoginPage'
import MainPage from './Components/MainPage'
class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn'),
      isSignUpPage: localStorage.getItem('isSignUp'),
      tableData:[]
    }
    this.handeler = this.handeler.bind(this)
    this.logInOut = this.logInOut.bind(this)
  }

  handeler() {
    if (localStorage.getItem('isSignUp')) {
      localStorage.removeItem('isSignUp')
    }
    else {
      localStorage.setItem('isSignUp', JSON.stringify(true))
    }
    console.log(this.state.isSignUpPage)
    this.setState(prevState => {
      return {
        isSignUpPage: !prevState.isSignUpPage
      }
    })
  }

  logInOut() {
    if (localStorage.getItem('isLoggedIn')) {
      if(localStorage.getItem('isSingUp')){
        localStorage.removeItem('isSignUp')
      }
      localStorage.removeItem('isLoggedIn')
    }
    else {
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
    }
    console.log(this.state.isLoggedIn)
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  componentDidMount(){
    console.log('Hello')
    fetch('https://api.coincap.io/v2/assets')
     .then(response => response.json())
     .then(dataa => {
      this.setState({
        tableData : dataa.data
    })
    console.log(this.state.tableData)
  }
    )
  }
  
  render() {

    console.log(localStorage.getItem('isLoggedIn'))
    if (this.state.isLoggedIn) {
      return (
        <MainPage logInOut={this.logInOut} />
      )
    }
    else if (this.state.isSignUpPage) {
      console.log('signup')
      return (
        <div>
          {/* <button onClick={this.handeler}>ClickMe</button> */}
          <SignUpPage handeler={this.handeler} />
        </div>
      )
    }
    else {
      console.log('login')
      return (
        <div>
          {/* <button onClick={this.handeler}>ClickMe</button> */}
          <LoginPage  logInOut={this.logInOut} handeler={this.handeler} />
        </div>
      )
    }

  }
}

export default App;
