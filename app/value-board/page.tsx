import React from 'react';

import { BettingLine } from "@/components/BettingLineCard/bettingLine";
import BettingLineCard from '@/components/BettingLineCard'
import FilterBar from '@/components/FilterBar'
// import mockBettingLines from '@/testData/mockBettingLines'


export default async function ValueBoard() {

    const response = await fetch('http://localhost:8000/betting_lines')

    const bettingLines: BettingLine[] = await response.json()

    const leagues: string[] = ["NBA", "NCAAM"]

    const bookmakers: string[] = ["PrizePicks", "Underdog", "Sleeper", "DraftKings", "FanDuel"]

    return (
        <div className="flex flex-col items-center justify-center bg-black">
            <div className="flex flex-col items-center justify-center p-4">
                <FilterBar filtertableType="league" filterables={leagues}/>
                <FilterBar filtertableType="bookmaker" filterables={bookmakers}/>
            </div>
            <div className="grid grid-cols-4 w-[54rem] pl-2">
                {bettingLines.map((bettingLine) => {
                    return <BettingLineCard key={bettingLine._id} bettingLine={bettingLine}/>
                })}
            </div>
        </div>
    );
}