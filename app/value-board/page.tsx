import React from 'react';

import BettingLineCard from '@/components/BettingLineCard'
import FilterBar from '@/components/FilterBar'
import mockBettingLines from '@/testData/mockBettingLines'


export default function ValueBoard() {
  return (

      <div className="flex flex-col items-center justify-center bg-black">
          <FilterBar />
          <FilterBar />
          <div className="grid grid-cols-4 w-[50rem] bg-blue-700">
              {mockBettingLines.map((bettingLine) => {
                  return <BettingLineCard key={bettingLine.id} bettingLine={bettingLine}/>
              })}
          </div>
      </div>

  );
}
