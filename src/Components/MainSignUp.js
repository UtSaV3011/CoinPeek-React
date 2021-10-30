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
        <div className="p-8 bg-Body text-2xl h-full w-full flex flex-col items-center h-v80" >
            <form className="p-8 bg-Input rounded-3xl w-v60 max-w-lg flex flex-col items-center font-semibold color-black h-v75" onSubmit={SignUp}>
                <h1 className=" mb-8 font-oxy h-8 text-3xl tracking-wider ">SignUp</h1>
                <label className=" text-base text-left w-8/12 " for="name">Full Name </label>
                <input className="mb-4 shadow-3xl focus:outline-none focus:shadow-4xl w-8/12 rounded border-none px-4 text-xs tracking-wide h-6" type="text" name="name" id="fullName" />
                <label className=" text-base text-left w-8/12 " for="email">Email</label>
                <input className="mb-4 shadow-3xl focus:outline-none focus:shadow-4xl w-8/12 rounded border-none px-4 text-base tracking-wide h-6" type="email" name="email" id="email" />
                <label className="  text-base text-left w-8/12 " for="password">Password </label>
                <input className="mb-4 shadow-3xl focus:outline-none focus:shadow-4xl w-8/12 rounded border-none px-4 text-base tracking-wide h-6" type="password" name="password" id="password" />
                <label className=" text-base text-left w-8/12 " for="password2">Confirm Password </label>
                <input className="mb-4 shadow-3xl focus:outline-none focus:shadow-4xl w-8/12 rounded border-none px-4 text-base tracking-wide h-6" type="password" name="password2" id="password2" />
                <button className="mt-4 text-center shadow-3xl hover:bg-Header transition-all ease-linear bg-Body p-2 py-0.5 text-base box-border w-2/6 text-white" type="submit" id="signUpBTN" >Sign up</button>
                <br/>
                <label for="login" className=" mb-2 text-base">Already a User?</label>
                <button className="text-center shadow-3xl hover:bg-Header transition-all ease-linear bg-Body p-2 py-0.5 text-base box-border w-2/6 text-white" onClick={Loginpage} type="button" id="loginBTN">Log in</button>
            </form>
        </div>
    )
}

export default MainSignUpPage
