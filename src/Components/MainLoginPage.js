import React from 'react'

function handeler(event) {
    event.preventDefault()
    if (localStorage.getItem(event.target.email.value)) {
        if (JSON.parse(localStorage.getItem(event.target.email.value)).password === event.target.password.value) {
            var form = document.getElementById("myForm");
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
        <div className="p-8 bg-blue-700 text-2xl h-full w-full flex flex-col items-center">
            <form id="myForm" className="p-8 bg-gray-200 rounded-3xl w-4/12 flex flex-col items-center font-semibold color-black  m-h-96 " onSubmit={handeler} >
                <h1 className="m-8  h-8 text-3xl tracking-wider ">Login</h1>
                <label className=" text-base text-center w-3/12 " for="email">Email</label>
                <input className=" w-64 border-black border-solid border-2 text-center text-base tracking-wide h-6 shadow-2xl trasnition-all" type="email" name="email" id="email">
                </input>
                <br />
                <label className="text-base text-center w-3/12" for="password">Password</label>
                <input className=" text-center w-64 border-blue-600 border-solid border-2 text-base tracking-wide h-6  shadow-2xl  trasnition-all " name="password" type="password" id="password">
                </input>
                <br />
                <button className="text-center bg-black p-2 py-1 text-xl w-2/6 text-white" type="submit" id="loginBTN">Log in</button>
                <br />
                <label for="signUpBTN" >New User ?</label>
                <br />
                <button onClick={SignUpPage} type="button" id="signUpBTN" className="text-center bg-black text-white p-2 py-1 text-xl w-2/6">Sign up</button>
            </form>
        </div>
    )
}

export default MainLoginPage
