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

    const handleSubmit = async (e: { preventDefault: () => void; })  => {
        try {
            e.preventDefault()

            const response = await fetch('http://localhost:8000/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formInput)
            })

            const responseData = await response.json()

            if (responseData.status_code == 200) {
                document.cookie = `token=${responseData.token}; max-age=86400; Secure; HttpOnly; Same-Site=strict`;
                localStorage.setItem('user', JSON.stringify(responseData.user))

                router.push('/value-board')

            } else {
                alert(responseData.detail)
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
