import React from 'react'


const CustomButton: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="border mb-2 px-10 py-4 rounded-[1.5rem] bg-green-500">{text}</div>
    )
}

export default CustomButton
