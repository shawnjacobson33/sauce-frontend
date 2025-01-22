'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


const CustomButton: React.FC<{ text: string, location: string }> = ({ text, location }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(location)
    }

    return (
        <button
            onClick={handleClick}
            className="border border-red-500 shadow-sm shadow-red-500 mb-2 px-10 py-4 rounded-[1.5rem]
            text-white"
        >{text}
        </button>
    )
}

export default CustomButton
