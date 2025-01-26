'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


function SignUp() {

    const router = useRouter()

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

            console.log(response)
            if (response.ok) {

                const { token, user } = await response.json()

                document.cookie = `token=${token}; max-age=86400; Secure; HttpOnly; Same-Site=strict`;
                localStorage.setItem('user', JSON.stringify(user))

                router.push('/value-board')

            } else {
                alert("Invalid Credentials")
            }

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
