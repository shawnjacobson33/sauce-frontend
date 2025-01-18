import React from 'react'

function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 h-screen bg-black">
            <div className="border mb-[8rem] p-[3rem] bg-red-500">
                <div className="font-bold text-3xl text-white">Create an Account</div>
            </div>
            <input
                type='text'
                name='username'
                placeholder="Username"
                className="p-4 w-[20rem] rounded"/>
            <input
                type='text'
                name='email'
                placeholder="Email Address"
                className="p-4 w-[20rem] rounded"/>
            <input
                type='text'
                name='password'
                placeholder="Password"
                className="p-4 w-[20rem] rounded"/>

        </div>
    )
}

export default SignUp
