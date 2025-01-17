import React from 'react'


function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="border mb-[8rem] p-[3rem] bg-red-500">
                <div className="font-bold text-3xl text-white">Sauce</div>
            </div>
            <div className="border mb-2 px-10 py-4 rounded-[1.5rem] bg-green-500">Login</div>
            <div className="border px-10 py-4 rounded-[1.5rem] bg-green-500">Sign Up</div>
        </div>
    )
}

export default Login
