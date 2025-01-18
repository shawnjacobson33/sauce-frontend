import React from 'react'

import CustomButton from '@/components/CustomButton'


function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="border mb-[8rem] p-[3rem] bg-red-500">
                <div className="font-bold text-3xl text-white">Sauce</div>
            </div>
            <CustomButton text="Login"/>
            <CustomButton text="Sign Up"/>
        </div>
    )
}

export default Home
