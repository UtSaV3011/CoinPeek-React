import React from 'react'

function handeler(event) {
    event.preventDefault()
    if (localStorage.getItem(event.target.email.value)) {
        if (JSON.parse(localStorage.getItem(event.target.email.value)).password === event.target.password.value) {
            var form = document.getElementById("myForm");
            localStorage.setItem('userName' , JSON.stringify(JSON.parse(localStorage.getItem(event.target.email.value)).name))

            form.reset();
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            window.location.reload()
        }
        else {
            alert('incorrect')
        }
    }
    else {
        alert('invalidID')
    }
}
function SignUpPage() {
    localStorage.setItem('isSignUp', JSON.stringify(true))
    window.location.reload()
}

function MainLoginPage() {
    return (
        <div className="p-8 bg-Body text-2xl h-full w-full flex flex-col items-center h-v80">
            <form id="myForm" className="p-8 bg-Input rounded-3xl w-v60 max-w-lg flex flex-col items-center font-semibold color-black h-v75  " onSubmit={handeler} >
                <h1 className="m-8 font-oxy h-8 text-3xl tracking-wide ">Login</h1>
                <label className="mb-2 text-base text-left w-8/12 " for="email">Email</label>
                <input className="shadow-3xl focus:outline-none focus:shadow-4xl m w-8/12 rounded border-none px-6 text-base tracking-wide h-6" type="email" name="email" id="email">
                </input>
                <br />
                <label className="mb-2 text-base text-left w-8/12 " for="password">Password</label>
                <input className="shadow-3xl focus:outline-none focus:shadow-4xl shadow-lg w-8/12 w-8/12 px-6 rounded border-none  text-base tracking-wide h-6 " name="password" type="password" id="password">
                </input>
                <br />
                <button className="text-center shadow-3xl hover:bg-Header transition-all ease-linear bg-Body p-2 py-0.5 text-base box-border w-2/6 text-white" type="submit" id="loginBTN">Log in</button>
                <br />
                <label for="signUpBTN" className=" mb-2 text-base" >New User ?</label>
                <button onClick={SignUpPage} type="button" id="signUpBTN" className="text-center shadow-3xl hover:bg-Header transition-all ease-linear bg-Body text-white p-2 py-1 box-border text-base w-2/6">Sign up</button>
            </form>
        </div>
    )
}

export default MainLoginPage
