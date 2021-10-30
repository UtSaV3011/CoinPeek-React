import React, { useState, useEffect } from 'react'
import Header from './Header'
import MainPageAPI from './MainPageAPI'
function logout() {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    window.location.reload()
}

function MainPage() {

    const [data1, setData] = useState([])
    
    useEffect(() => {
        // setInterval(()=>{
        fetch('https://api.coincap.io/v2/assets')
            .then(repsonse => repsonse.json())
            .then(res => {
                localStorage.setItem('error',JSON.stringify(false))
                setData(res.data)
                console.log(res.data)
            })
            .catch(error =>{
                localStorage.setItem('error',JSON.stringify(true))
                console.log(error)
                alert('Please Wait Page is Reloading')
            })
        // },500)
    })

    return (
        <div>
            <Header />
            <span>Hello {JSON.parse(localStorage.getItem('userName'))}</span>
            <button onClick={logout}>Logout</button>
            <div className="flex flex-col bg-Body">
            <table className="border-collapse m-4 mt-8 self-center  flex flex-col">
                <tr>
                    <th className="m-0 font-bold text-center w-60 h-20 border-black border-b-2 bg-TH text-p100">Crypto</th>
                    <th className="m-0 text-center w-60 h-20 border-black border-b-2 bg-TH text-p100">Price USD</th>
                    <th className="m-0 text-center w-60 h-20 border-black border-b-2 bg-TH text-p100">ID</th>
                </tr>
                {data1.map((data) => (
                    <tr>
                        <td  className="m-0 text-center w-60 h-20 bg-white border-black border-b-2  text-p100">
                            {data.name}
                        </td>
                        <td  className="m-0 text-center w-60 h-20 bg-white border-black border-b-2  text-p100">
                            {data.priceUsd}
                        </td>
                        <td  className="m-0 text-center w-60 h-20 bg-white border-black border-b-2  text-p100">
                            {data.id}
                        </td>
                    </tr>
                ))}
            </table>
            </div>
        </div>
    )
}

export default MainPage
