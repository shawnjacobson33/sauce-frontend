import React from 'react';

import { BettingLine } from "@/components/BettingLineCard/bettingLine";
import BettingLineCard from '@/components/BettingLineCard'
import FilterBar from '@/components/FilterBar'
// import mockBettingLines from '@/testData/mockBettingLines'


export default async function ValueBoard() {

    const response = await fetch('http://localhost:8000/betting_lines')

    const bettingLines: BettingLine[] = await response.json()

    return (
        <div className="flex flex-col items-center justify-center bg-black">
            <FilterBar />
            <FilterBar />
            <div className="grid grid-cols-4 w-[50rem] bg-blue-700">
                {bettingLines.map((bettingLine) => {
                    return <BettingLineCard key={bettingLine._id} bettingLine={bettingLine}/>
                })}
            </div>
        </div>
    );
}