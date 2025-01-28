import React from 'react'

import CustomButton from '@/components/CustomButton'


function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="border border-red-500 shadow-md shadow-red-500 mb-[8rem] p-[3rem] rounded">
                <div className="font-bold text-3xl text-white">Sauce</div>
            </div>
            <CustomButton text="Login" location='/login'/>
            <CustomButton text="Sign Up" location='/register'/>
        </div>
    )
}

export default Home
