import React from 'react'

const BettingLineCard = () => {
    return (
        <div
            className="flex flex-col items-center justify-between w-[10rem] h-[17rem] m-5 border-2 rounded bg-gray-700">
            <div className="w-[55%] h-[32%] mt-3 bg-amber-700"></div>
            <div className="flex flex-col items-center justify-center w-full h-[16%] bg-blue-400">
                <p className="mt-0.5 text-xs text-white">Tyreek Hill</p>
                <p className="mt-0.5 text-xs text-white">MIA @ NE</p>
            </div>
            <div className="flex flex-col items-center justify-around w-full h-[18%] bg-green-500">
                <p className="mt-0.5 text-sm text-white">55.5</p>
                <p className="mb-0.5 text-xs text-white">Receiving Yards</p>
            </div>
            <div className="w-[55%] h-[18%] mb-3 bg-orange-200"></div>

        </div>
    )
}

export default BettingLineCard

