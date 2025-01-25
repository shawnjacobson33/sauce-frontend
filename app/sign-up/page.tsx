'use client'

import React from 'react'

function SignUp() {

    const [formInput, setFormInput] = React.useState({
        username: '',
        email: '',
        password: ''
    })

    const handleOnChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormInput({...formInput, [name]: value})
    }

    const handleOnSubmit = async (e: { preventDefault: () => void; })  => {
        try {
            e.preventDefault()

            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formInput)
            })

            if (!response.ok) {
                throw new Error("network error!")
            }

            const serverData = await response.json()

            console.log("Server Response:", serverData)

        } catch (e) {
            console.log("Error: ", e)
        }

    }

    return (
        <div className="flex flex-col items-center justify-center space-y-3 h-screen bg-black">
            <div className="border border-red-500 shadow-md shadow-red-500 mb-[8rem] p-[3rem] rounded">
                <div className="font-bold text-3xl text-white">Create an Account</div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    name='username'
                    value={formInput.username}
                    onChange={handleOnChange}
                    placeholder="Username"
                    className="input"
                    required
                />
                <input
                    type='email'
                    name='email'
                    value={formInput.email}
                    onChange={handleOnChange}
                    placeholder="Email Address"
                    className="input"
                    required
                />
                <input
                    type='password'
                    name='password'
                    value={formInput.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    className="input"
                    required
                />
                <button
                    type='submit'
                    className="input"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignUp
