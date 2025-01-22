import React from 'react'
import Image from 'next/image'

import { BettingLine } from '@/components/BettingLineCard/bettingLine'


const Index: React.FC<{ bettingLine: BettingLine }> = ({ bettingLine }) => {
    const imageFileName: string = bettingLine.subject.split(' ').join('-').toLowerCase()

    const getBorderColor = () => {
        if (bettingLine.ev < 0) {
            return "border-gray-500";
        } else if (bettingLine.ev < 0.02) {
            return "border-yellow-500";
        } else if (bettingLine.ev < 0.04) {
            return "border-green-500";
        } else if (bettingLine.ev < 0.08) {
            return "border-purple-500";
        } else if (bettingLine.ev > 0.08) {
            return "border-pink-500";
        }
    }

    return (
        <div
            className={`flex flex-col items-center justify-between w-[10rem] h-[17rem] m-3 border-2 ${getBorderColor()} rounded bg-gray-700`}>
            <div className="w-[55%] h-[32%] mt-3 bg-amber-700">
                <Image
                    src={`/subject-images/${imageFileName}.png`}
                    alt={bettingLine.subject}
                    width={400}
                    height={200}
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-[16%] bg-blue-400">
                <p className="mt-0.5 text-xs text-white">{bettingLine.subject}</p>
                <p className="mt-0.5 text-xs text-white">{bettingLine.game}</p>
            </div>
            <div className="flex flex-col items-center justify-around w-full h-[18%] bg-green-500">
                <p className="mt-0.5 text-sm text-white">{bettingLine.line}</p>
                <p className="mb-0.5 text-xs text-white">{bettingLine.market}</p>
            </div>
            <div className="w-[55%] h-[18%] mb-3 bg-orange-200">
                <Image
                    src={`/bookmaker-images/${bettingLine.bookmaker}.png`}
                    alt={bettingLine.bookmaker}
                    width={400}
                    height={200}
                />
            </div>

        </div>
    )
}

export default Index

