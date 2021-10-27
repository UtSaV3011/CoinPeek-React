import React from 'react'

function SignUp(e) {
    e.preventDefault()
    if (!e.target.email.value || !e.target.name.value || !e.target.password.value || !e.target.password2.value) {
        alert('Please fill All area')
    }
    else if (e.target.password2.value = !e.target.password.value) {
        alert('pass donot match!')
    }
    else {
        localStorage.setItem(e.target.email.value, JSON.stringify({ name: e.target.name.value, password: e.target.password.value }))
        localStorage.removeItem('isSignUp')
        window.location.reload()
    }
}

function Loginpage() {
    localStorage.removeItem('isSignUp')
    window.location.reload()
}

function MainSignUpPage() {
    return (
        <div className="p-8 bg-blue-700 text-2xl h-full w-full flex flex-col items-center" >
            <form className="p-8 bg-gray-200 rounded-3xl w-4/12 flex flex-col items-center font-semibold color-black  m-h-96" onSubmit={SignUp}>
                <h1 className="m-8  h-8 text-3xl tracking-wider ">SignUp</h1>
                <label className=" text-base text-center w-3/12 " for="name">Full Name </label>
                <input className=" w-64 border-black border-solid border-2 text-center text-base tracking-wide h-6 shadow-2xl trasnition-all" type="text" name="name" id="fullName" />
                <br />
                <label className=" text-base text-center w-3/12 " for="email">Email</label>
                <input className=" w-64 border-black border-solid border-2 text-center text-base tracking-wide h-6 shadow-2xl trasnition-all" type="email" name="email" id="email" />
                <br />
                <label className=" text-base text-center w-3/12 " for="password">Password </label>
                <input className=" w-64 border-black border-solid border-2 text-center text-base tracking-wide h-6 shadow-2xl trasnition-all" type="password" name="password" id="password" />
                <br />
                <label className=" text-base text-center w-3/12 " for="password2">Confirm Password </label>
                <input className=" w-64 border-black border-solid border-2 text-center text-base tracking-wide h-6 shadow-2xl trasnition-all" type="password" name="password2" id="password2" />
                <br />
                <button className="text-center bg-black p-2 py-1 text-xl w-2/6 text-white" type="submit" id="signUpBTN" >Sign up</button>
                <br />
                <label for="login" className="btnLabel">Already a User?</label>
                <br />
                <button className="text-center bg-black p-2 py-1 text-xl w-2/6 text-white" onClick={Loginpage} type="button" id="loginBTN">Log in</button>
            </form>
        </div>
    )
}

export default MainSignUpPage
