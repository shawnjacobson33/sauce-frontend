'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

function LogIn() {

    const router = useRouter()

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (event: { target: { name: string, value: string } }) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/users/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const responseData = await response.json()

            if (responseData.status_code == 200) {
                document.cookie = `token=${responseData.token}; max-age=86400; Secure; HttpOnly;`;
                localStorage.setItem('user', responseData.user)

                router.push('/value-board')

            } else {
                alert(responseData.detail)
            }

        } catch (e) {
            console.log("Error:", e)
        }

    }

    return (
        <div className="flex flex-col items-center justify-center space-y-3 h-screen bg-black">
            <div className="border border-red-500 shadow-md shadow-red-500 mb-[8rem] p-[3rem] rounded">
                <div className="font-bold text-3xl text-white">Welcome Back!</div>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="input"
                    required
                />
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
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

export default LogIn
