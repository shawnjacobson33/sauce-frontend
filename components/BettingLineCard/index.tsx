import React from 'react'
import Image from 'next/image'

import { BettingLine } from '@/components/BettingLineCard/bettingLine'

type BettingLineCardProps = {
    bettingLine: BettingLine
}

const Index = ({ bettingLine }: BettingLineCardProps) => {
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
            className={`flex flex-col items-center justify-between w-[94%] h-[98%] border-[0.1rem] ${getBorderColor()} 
            shadow-md rounded`}>
            <div className="w-[55%] h-[32%] mt-3">
                <Image
                    src={`/subject-jerseys/${imageFileName}.png`}
                    alt={bettingLine.subject}
                    width={400}
                    height={200}
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-[16%]">
                <p className="mt-0.5 text-xs text-white font-bold">{bettingLine.subject}</p>
                <p className="mt-0.5 text-xs text-white text-[0.6rem] italic">{bettingLine.game}</p>
            </div>
            <div className="flex flex-col items-center justify-around space-y-0.5 w-full h-[18%]">
                <p className="mt-0.5 text-sm text-white font-bold">{bettingLine.line}</p>
                <p className="mb-0.5 text-xs text-white">{bettingLine.market}</p>
            </div>
            <div className="w-[55%] h-[18%] mb-3">
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

